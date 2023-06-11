import styled from 'styled-components';


type StyledDivProps = {
  text: string;
  width: string;
  type?: string
};

export default styled.div<StyledDivProps>`
  height: 60px;
  width: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 50px;
  background-color: ${props => props.type === 'primary' ? '#5E503F' : props.type === 'secondary' ? '#22333B' : 'blue'};
  border-radius: 12px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  ::before {
    content: '${props => props.text}' ;
    color: #EAE0D5;
    font-weight: 300;
    font-size: 20px;
  }
`;