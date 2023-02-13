import styled from "styled-components";

export const root = styled.div`
  margin-top: 13vh;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 5vh;
  }
`;

export const div = styled.div`
  margin-left: 13rem;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const NavMenu = styled.div`
  background-color: white;
  width: 15%;
  position: fixed;
  margin-top: 5rem;
  @media (max-width: 1024px) {
    width: 100%;
    position: static;
    margin-top: 0;
  }
  p {
    background-color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    margin: auto;
    position: relative;
    transition: all 1s ease;
    &:hover {
      background-color: rgb(94, 94, 94);
      color: white;
      padding-left: 5rem;
      margin-left: 20px;
    }
  }
`;

export const userName = styled.div`
  background-color: #62b347;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  padding-left: 1rem;
`;

export const addSellForm = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  height: auto;
  justify-content: space-around;
  padding-top: 2rem;
  margin-left: 20rem;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media (max-width: 1024px) {
    margin-left: 0;
    width: 100%;
  }
  p {
    display: flex;
    justify-content: center;
  }
`;
export const part = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1rem;
  align-items: center;

  .title {
    width: 100%;
    max-width: 30rem;
    margin-right: 3.7rem;
  }

  .Description {
    width: 100%;
    max-width: 30rem;
    height: 10rem;
    border-color: blue;
    z-index: -0;
    margin-right: 3.7rem;
  }
  .cropperDiv {
    // margin-left: 7.9rem;
    // margin-right: 7.9rem;
  }
  .category {
    width: 100%;
    max-width: 13.9rem;
    margin-right: 19.9rem;
  }
  .Price {
    width: 100%;
    margin-right: 19.9rem;
  }
  .UsedDuration {
    width: 100%;
    margin-right: 19.9rem;
  }
  .contactNumber {
    width: 100%;
    margin-right: 19.9rem;
  }
  .Email {
    width: 100%;
    margin-right: 19.9rem;
  }
  .location {
    width: 100%;
    margin-right: 19.9rem;
  }
  .addbutton {
    width: 100%;
    max-width: 7.9rem;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;
