import styled from "styled-components";

type ButtonProps = {
    width?: string;
    widthResp?: string
    styling?: string 
    disabled?:boolean
  }

export const Button = styled.button<ButtonProps>`
width: ${(props) => props.width || "auto"};
font-family: Mulish;
height: 50px;
color: #ffffff;
background-color: ${(props) => props.styling === 'primary'? '#5E503F': 'secondary'? '#22333b': '#eae0d5'};
font-weight: 300;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
opacity: ${(props) => (props.disabled ? 0.7 : 1)};
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

:hover{
    background-color: ${(props) => props.styling === 'primary'? '#4e4437': 'secondary'? '#202d33': '#dbd4cc'};
    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.1), 0 5px 5px 0 rgba(0,0,0,0.1);
}
@media (max-width: 800px) {
    height: 30px;
    width: ${(props) => props.widthResp || "auto"};
    font-size: 12px;
} 
`;