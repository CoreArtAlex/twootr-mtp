import styled from 'styled-components';

export const StylePost = styled.div`
   font-family: 'Kanit', sans-serif;
   font-weight: 100;
   font-size: 16pt;
   color: #000;

   .twoot {
      border: 3px solid #000;
      margin 1rem;
      padding: 1rem;
      display; flex;
      flex-direction: column;
   }

   .twoot:hover {
      box-shadow: 5px 5px #888888;
   }

   .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
   }
   
   .user-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 1rem;
   }

   p {
      font-weight: 400;
      padding: 1rem;
      border-bottom: solid 3px #000;
   }

   img {
      width: 3rem;
   }


   i {
      font-weight: 100;
      font-size: 12pt;
      cursor: pointer;
   }

   .icons {
      display: flex;
      flex-direction: row;
      column-gap: 1rem;
   }

   .twoot-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
   }

`;