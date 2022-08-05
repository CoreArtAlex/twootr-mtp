import styled from 'styled-components';

export const StyleHeader = styled.header`
    background-color: #711a75;
    color: #fff;
    font-family: 'Kanit', sans-serif;
    font-weight: 100;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 2rem;
        margin: 0;
    }

    .bold {
        font-weight: 400;
    }

    .title {
        font-family: 'Permanent Marker', cursive;
    }
`;