import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    body{
        font-family: 'Pretendard', 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #222222;
    }
    p{
        margin: 0;
    }
    .ko{
        font-family: 'Pretendard', sans-serif;
        letter-spacing: 0.05em;
    }
    .en{
        font-family: 'Montserrat', 'Pretendard', sans-serif;
        font-weight: 500;
        letter-spacing: -0.01em;
    }
`