import React, { useState } from "react";
import { Button } from "../UI/button/Button";
import { styled } from "styled-components";
import { Modal } from "../modal/Modal";

export const Headers = ({ newMovie }) => {
  const [modal, setModal] = useState(false);

  const cliCkHandler = () => {
    setModal((prevState) => !prevState);
  };

  const closeHandler = () => {
    setModal(false);
  };

  return (
    <Container>
      {modal ? <Modal newMovie={newMovie} closeHandler={closeHandler} /> : null}
      <h1>Favorite Movies</h1>
      <Button onClick={cliCkHandler} bgColor={"#ff7200"}>
        ADD Movie
      </Button>
    </Container>
  );
};
const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border-radius: 12px;
    height: 30px;
    color: #fff;
    border: none;
  }
  h1 {
    color: #fff;
  }
`;
