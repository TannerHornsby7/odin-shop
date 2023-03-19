// create stylized components for the layout of the app
import styled from "styled-components";

// create a styled div for the layout of the app
export const Layout = styled.div`
    display: grid;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: black;
    color: white;
`;