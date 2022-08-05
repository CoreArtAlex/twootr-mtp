import styled from 'styled-components';



export const StyleUser = styled.div`
   background-color: #413f42;
   color: #fff;
   font-family: 'Kanit', sans-serif;
   font-weight: 100;
   text-align: center;

   img {
      width: 10rem;
   }

   .name {
      display: flex;
      flex-direction: row;
      padding: 0;
      column-gap: 0.5rem;
      justify-content: center;
      align-items: center;
   }

   .bold {
      font-weight: 400;
   }

   button {
      background-color: #413f42;
      border: none;
      color: #fff;
      cursor: pointer;
      margin: 0;
   }

   .check {
      background-color: green;
      border-radius: 50%;
      color: #413f42
   }

   .hide {
      display: none;
   }
`;