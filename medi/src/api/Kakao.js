/* global kakao */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyLocation from "../assets/images/MyLocation.png";



const { kakao } = window;

const MapContainer = styled.div`
    width: "60vw",
    height: "30vw",
`;

const Kakao = ({ inputValue, onPharmacyInfoChange }) => {

    const [map, setMap] = useState(null);
    useEffect(() => {
        const geoOptions = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: Infinity,
        };
        const container = document.getElementById('map');


        if (inputValue !== "" ) {
            console.log("지도 검색 기능 활성화");
            const geocoder =  new kakao.maps.services.Geocoder();
            geocoder.addressSearch( inputValue, function(result,status){
                if(status === kakao.maps.services.Status.OK){
                    console.log("위치 좌표 변환 완료");
                    const options = {
                        center: new kakao.maps.LatLng(result[0].y, result[0].x),
                        level: 4,
                    };
                    const kakaoMap = new kakao.maps.Map(container, options);
                    const locPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const message= "검색한 위치 : " + inputValue;;
                    console.log(message);
                    displayMarker(kakaoMap,locPosition,message);
                    searchPharmacies(kakaoMap,locPosition);
                }
            });
        } else {
            if (navigator.geolocation) {
                console.log("현재 위치 기준 검색 기능 활성화");
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const options = {
                            center: new kakao.maps.LatLng(
                                position.coords.latitude,
                                position.coords.longitude
                            ),
                            level: 4,
                        };
                        const kakaoMap = new kakao.maps.Map(container, options);
                        setMap(kakaoMap);
                        const locPosition = new kakao.maps.LatLng(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        const message = '<div style="padding:5px;">현재 내 위치</div>';
                        displayMarker(kakaoMap, locPosition, message);
                        searchPharmacies(kakaoMap, locPosition);
                    },
                    function (error) {
                        console.error('현재 위치 받아올 수 없음 :', error);
                    },
                    geoOptions
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        }
    }, [inputValue]);

        function displayMarker(map, locPosition, message) {
            const redMarkerImageSrc = MyLocation
            const MarKerImage = new kakao.maps.MarkerImage(
                redMarkerImageSrc,
                new kakao.maps.Size(35, 35),
                { offset: new kakao.maps.Point(17, 35) }
            );
            const marker = new kakao.maps.Marker({
                map: map,
                position: locPosition,
                image:MarKerImage,
            });
            const iwContent = message;
            const iwRemovable = true;

            const infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemovable,
            });
            infowindow.open(map, marker);
            map.setCenter(locPosition);
        }

        function searchPharmacies(map, locPosition) {
            let arr = [];
            const places = new kakao.maps.services.Places();
            const searchOptions = {
                location: locPosition,
                radius: 10000,
                sort: kakao.maps.services.SortBy.DISTANCE,
            };

            places.keywordSearch('약', function (data, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const pharmacyData = data.map((pharmacy) => ({
                        name: pharmacy.place_name,
                        address: pharmacy.address_name,
                        }));
                    console.log('Pharmacy Data:', pharmacyData);

                    onPharmacyInfoChange(pharmacyData);

                    for (let i = 0; i < data.length; i++) {
                        const pharmacyPosition = new kakao.maps.LatLng(data[i].y, data[i].x);
                        const pharmacyMarker = new kakao.maps.Marker({
                            map: map,
                            position: pharmacyPosition,
                        });

                        kakao.maps.event.addListener(pharmacyMarker, 'click', function () {
                                const infoMessage = `<div><strong>${data[i].place_name}</strong><br>주소: ${data[i].address_name}</div>`;
                                const infoWindow = new kakao.maps.InfoWindow({
                                    content: infoMessage,
                                });
                                infoWindow.open(map, pharmacyMarker);
                            });
                        }
                }
            }, searchOptions);
        }

        return (
            <MapContainer>
                <div
                    id="map"
                    style={{
                        width: '60vw',
                        height: '30vw',
                        marginTop: '5vw',
                    }}
                ></div>
            </MapContainer>
        );
};

export default Kakao; 