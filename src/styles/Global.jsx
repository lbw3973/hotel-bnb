import React from 'react'
import { Global, css } from '@emotion/react'

const reset = css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button,
  img,
  strong,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  footer,
  header,
  menu,
  nav,
  section,
  summary {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  ol,
  ul {
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
  }
`

const style = css`
  :root {

    /**Common */
   --center-align: display: flex; align-items: center; justify-content: center;
    --box-shadow: 0 0 10px #DDD;

    /** Font */
    --font-semi-blod: 600; 
    --font-blod: 800;

    /** Color */
    --color-main: #FF385C;
    --color-footer-grey: #F7F7F7;
    --color-light-grey: #DDD;
    --color-white: #FFF;
    --color-black: #000;
 

    /** Border */
    --border-button-radius: 26px;
    --border-container-radius: 12px;
    --border : 1px solid #DDD

  }

  button {
    cursor: pointer;
  }
`

const GlobalStyle = () => {
  return (
    <>
      <Global styles={style} />
      <Global styles={reset} />
    </>
  )
}

export default GlobalStyle
