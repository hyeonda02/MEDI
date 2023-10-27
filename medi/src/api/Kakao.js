/* global kakao */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const MapContainer = styled.div`
width: 140rem;
height: 65rem;
`;

const Kakao = () => {
    const [map,setMap] = useState(null);
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( function (position) {
                const container = document.getElementById('map');
                const options = { 
                    center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude) 
                };
                const kakaoMap = new kakao.maps.Map(container, options);
                setMap(kakaoMap);

                const locPostion = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
                const message = '<div style="padding:5px;">내위치</div>';
                displayMarker(kakaoMap, locPostion, message);
            });
        }
    },[]);

    function displayMarker(map, locPostion, message) {
        const marker = new kakao.maps.Marker({
            map: map,
            position: locPostion
        });
        const iwContent = message, 
            iwRemoveable = true;    
        const infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });
        infowindow.open(map,marker);
        map.setCenter(locPostion);
    }

    return (
        <MapContainer>
        <div id="map" style={{ 
            width: '140rem', 
            height: '65rem',
            marginTop: '10rem',
            }}>
        </div>
        </MapContainer>

    );
};

export default Kakao;