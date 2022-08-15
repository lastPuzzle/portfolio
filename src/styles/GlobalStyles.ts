import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    ${reset}
    body {
        font-family:'Noto Sans KR';
        width: 100%;
        height: 100%;
    }
    
    .ant-layout-header{
        background: #fff;
    }

    @media screen and (max-width: 768px) {
        .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover:after{
            border-bottom: 0;
        }
        .ant-menu-horizontal>.ant-menu-item a:hover{
            color:#000;
        }
        .ant-menu-horizontal>.ant-menu-item-selected a{
            color:#1890ff !important;
        }
        .ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected:after{
            border-bottom: 2px solid #1890ff !important;
        }
    }
`;

export default GlobalStyles;
