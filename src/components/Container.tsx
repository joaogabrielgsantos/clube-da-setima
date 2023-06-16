import { ReactNode } from "react";
import styled from "styled-components";

type ContainerProps = {
    children: ReactNode;
  };

export function Container({children}: ContainerProps) {
   
    return (
        <>
        <Wrapper>
           {children}
        </Wrapper>
        </>
    )
}


const Wrapper = styled.div<ContainerProps>`
width: 100%;
max-width: 1440px;
padding: 0 107px;

@media (max-width: 800px) {
    padding: 0 20px;
}
`;