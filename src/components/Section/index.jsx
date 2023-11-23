//import React from "react";
import {Container, Title} from './SectionStyle'
const Section = ({ title, children }) => {
    return <Container><Title>{title}</Title>
    {children}
</Container>
}
export default Section