import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    color: #333;
    padding: 10px;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .container {
    margin: 10px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

`
