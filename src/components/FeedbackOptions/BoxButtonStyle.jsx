import styled from 'styled-components'

export const ListBtn = styled.ul`
display: flex;
margin-bottom: 20px;
`
export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  padding: 6px 14px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 0px #0072ff;
  transition: all 0.2s ease-in-out;

 &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 0px #0072ff;
  }
  
 &:active {
    transform: translateY(0px);
    box-shadow: none;
    background-image: linear-gradient(to bottom right, #0072ff, #00c6ff);
  }
  
 &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }
  
  &:before {
    top: -3px;
    left: -3px;
    border-radius: 40px;
    border-top: 3px solid #fff;
  border-left: 3px solid #fff;
}

&:after {
  bottom: -3px;
  right: -3px;
  border-radius: 40px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
}
`;
