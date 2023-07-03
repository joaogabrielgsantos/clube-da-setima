import { ReactNode } from "react";
import styled from "styled-components";

type InputsProps = {
    children: ReactNode;
};
export default function Inputs ({children}: InputsProps){
    return (
        <InputsWrapper>
            {children}
        </InputsWrapper>

    )
}

const InputsWrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input {
    width: 326px;
    height: 50px;
    border: 1px solid #757575;
    border-radius: 12px;
    padding-left: 15px;
    margin-bottom: 13px;
    &::placeholder {
        font-size: 12px;
        font-family: Mulish;
        color: #000000;
   }
}



`;