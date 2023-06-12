import {css} from 'styled-components';


export const mobile = (props) => {
    return css `
    @media (min-width : 280px) and (max-width : 767px) {
        ${props}
        
    }

    `;
};