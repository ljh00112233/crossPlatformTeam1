import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Home from "./Home";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const Quiz1 = () => {
    return (
            <Container>
                <Home/>
            </Container>
    );
};

export default Quiz1;