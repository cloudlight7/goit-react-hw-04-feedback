import styled, { keyframes } from 'styled-components'




const breatheAnimation = keyframes`
 0% { font-size: 14; }
 100% { font-size: 26px; opacity: 0.6; }
`
export const ContainerText = styled.p`
 animation-name: ${breatheAnimation};
 animation-duration: 5s;
 animation-iteration-count: infinite;
 `