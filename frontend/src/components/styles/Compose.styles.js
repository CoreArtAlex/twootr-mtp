import styled from 'styled-components';

export const StyleCompose = styled.div`
font-family: 'Kanit', sans-serif;
font-weight: 100;
font-size: 16pt;
color: #000;

div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin: 0;
}

.compose-label{
    font-size: 12pt;
    font-weight: 400;
}

.input{
    width: 100%;
}

.submitBtn{
    font-family: 'Permanent Marker', cursive;
    color: #fff;
    background-color: #711a75;
}

.focusBtn{
    position: absolute;
    top: 0;
    right: 0;
    margin: 3.5rem;
    padding: 0;
    color: RGB(209, 52, 138);
    font-size: 12pt;
    cursor: pointer;
}

.counter{
    font-family: 'Permanent Marker', cursive;
    font-size: 8pt;
    font-weight: 50;
    display:flex;
    justify-content: flex-end;
}
}


`;