import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600&display=swap");

    body {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a,
    button, li, a, span, small, label {
    margin: 0;
    font-family: "Prompt";
    }

    a {
    color: #000;
    text-decoration: none;
    }

    button .gm-ui-hover-effect {
    margin: 5px !important;
    }

    textarea::placeholder {
    color: #aab5be;
    padding-bottom: 10px;
    }

    hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
    }
`;

export const Field = styled.div`
  margin-bottom: 20px;
  & label {
    display: block;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }
`;
