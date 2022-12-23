import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #root{
        position: relative;
        box-sizing: border-box;
        padding: 20px;
        height: 98vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #EFF1F5;
    }

    body{
        background-color: #EFF1F5;
    }
`