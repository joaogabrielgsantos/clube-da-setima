import styled from "styled-components";

type ButtonProps = {
    width?: string;
    widthResp?: string
    styling?: string 
  }

export const Button = styled.div<ButtonProps>`
width: ${(props) => props.width || "auto"};
height: 50px;
color: #ffffff;
background-color: ${(props) => props.styling === 'primary'? '#5E503F': 'secondary'? '#eae0d5': '#22333b'};
font-weight: 300;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
:hover{
    background-color: ${(props) => props.styling === 'primary'? '#4e4437': 'secondary'? '#dbd4cc': '#202d33'};
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.1), 0 5px 5px 0 rgba(0,0,0,0.1);
}
@media (max-width: 800px) {
    height: 30px;
    width: ${(props) => props.widthResp || "auto"};
    font-size: 11px;
} 




`;