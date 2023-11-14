import { createGlobalStyle } from 'styled-components';
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    
    @media screen and (max-width:1799px) {
        /* 데스크탑 */
        html{
            font-size: 50%;
        }
    }
    @media screen and (max-width:1199px) {
        /* 데스크탑 */
        html{
            font-size: 45%;
        }
    }

    @media screen and (max-width:991px) {
        /* 타블렛 */
        html{
            font-size: 40%;
        }
    }
    @media screen and (max-width:767px) {
        /* 모바일 */
        html{
            font-size: 30%;
        }
    }

    body {
        display:flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Pretendard';
        background-color: ${colors.bgColor};
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
        white-space: nowrap;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
