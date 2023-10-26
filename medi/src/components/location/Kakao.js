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
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap);
    },[])

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