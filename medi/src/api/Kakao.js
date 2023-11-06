/* global kakao */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import geolib from 'geolib';


const { kakao } = window;

const MapContainer = styled.div`
    width: "60vw",
    height: "30vw",
`;

const Kakao = ({ onPharmacyInfoChange }) => {
    const [map, setMap] = useState(null);
    const [pharmacyInfo, setPharmacyInfo] = useState([]);

    useEffect(() => {
        const geoOptions = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: Infinity,
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const container = document.getElementById('map');
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
                    const message = '<div style="padding:5px;">내 위치</div>';
                    displayMarker(kakaoMap, locPosition, message);
                    searchPharmacies(kakaoMap, locPosition);
                },
                function (error) {
                    console.error('Error getting Location:', error);
                },
                geoOptions
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

function displayMarker(map, locPosition, message) {
    const marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
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
        radius: 10000, // 10km
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