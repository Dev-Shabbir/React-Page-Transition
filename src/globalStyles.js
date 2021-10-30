/*
*Title: Global Style Handler
*Description: Handler function to set the default css with styled-components
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

// Dependencies
import { createGlobalStyle } from "styled-components";
 
//  Set default CSS
const GlobalStyle  = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

// Export default CSS
export default GlobalStyle;