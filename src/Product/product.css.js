import styled from "styled-components";

export const root = styled.div`
  margin-top: 15vh;
  min-height: 100vh;

  // background: #e6e6e6;
  // background: #e6e6e6;

  // height:
  display: flex;
  justify-content: center;
`;

export const categories = styled.div`
  // background-color: red;

  width: 16rem;
  padding-left: 2rem;
  padding-right: 2rem;
  // position: fixed;
`;

export const CategoryHeading = styled.div`
  // background-color:#d65c5c;

  background-color: #62b347;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  padding-left: 1rem;
`;

export const categoriesSection = styled.div`

p{
    background-color:white;
    padding-top:0.5rem;
    padding-bottom: 0.5rem;   
    padding-left: 1rem;
    margin:auto; 
    // border-style: outset;
    position: relative;
    transition: all 1s ease;
    
    &:hover {
        // border-style: inset;
        background-color:rgb(94, 94, 94);
        color:white;
        padding-left: 5rem;
        margin-left: 20px;
        
      },

}

`;

export const filterHeading = styled.div`
  // background-color:#d65c5c;
  background-color: #62b347;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  padding-left: 1rem;
`;

export const filterSection = styled.div`
  margin-left: 0rem;
  p {
    margin-left: 1rem;
  }
`;

export const input = styled.div`

display: flex;
// justify-content:space-evenly;
align-items:center;
margin-left: -0rem;

  .iconSearch{
    height:2rem;
    width: 2rem;
    color: #121212;
    &:hover{
      color: rgb(94, 94, 94);

    }

  }

input[type=text]    {
    width: 20%;
},
`;

export const productSection = styled.div`
  justify-content: center;
`;

export const upload = styled.div`
  width: 60%;
  // display:flex;
  justify-content: space-around;
  // padding-top:2rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0.5rem 0.5rem 0.5rem;
  // width: 35rem;
  // height: 55rem;
  background-color: white;

  border-radius: 5px;

  img {
    max-width: 15rem;
    height: 100%;
  }
  name {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }

  price {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    // color: #AA1111;
    color: #d65c5c;
    // color: #A51010;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
`;

export const Itemsub = styled.div`
  // width: 55rem;
  // height: 20rem;
  background-color: blue;
  border-style: solid;
  border-width: 0.1px;
  border-color: #cccccc;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .PopDiv {
    display: flex;
    justify-content: flex-end;
    margin-right: 0.3rem;
    margin-top: 0.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const subGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
