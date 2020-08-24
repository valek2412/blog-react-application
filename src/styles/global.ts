import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

export default createGlobalStyle`
  ${normalize}
  
  * { 
    box-sizing: border-box;
  }
  
  html, body, body > div {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
