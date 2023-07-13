import React, { useState } from "react";
import { Input } from "../UI/Input/Input";
import { styled } from "styled-components";
import { Button } from "../UI/button/Button";

export const Modal = ({ newMovie, closeHandler }) => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeImage = (e) => {
    setImg(e.target.value);
  };
  const changeRating = (e) => {
    setRating(e.target.value);
  };

  const addMovieHandler = () => {
    const data = {
      title,
      img,
      rating,
      id: Math.random(),
    };
    setImg("");
    setRating("");
    setTitle("");

    newMovie(data);
  };

  return (
    <Container>
      <Input
        onChange={changeTitle}
        label={"text"}
        type="text"
        value={title}
        placeholder={"text"}
      />
      <Input
        placeholder={"url"}
        onChange={changeImage}
        label={"url"}
        type="text"
        value={img}
      />
      <Input
        onChange={changeRating}
        label={"number"}
        type="number"
        value={rating}
        placeholder={"number"}
      />
      <ContainerButton>
        <Button bgColor={"green"} onClick={closeHandler}>
          Cancel
        </Button>
        <Button bgColor={"red"} onClick={addMovieHandler}>
          Add
        </Button>
      </ContainerButton>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  width: 570px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #302020;
  padding: 20px;
  height: 230px;
  border-radius: 12px;
  color: black;
  input {
    height: 30px;
    width: 380px;
    display: flex;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-left: 25rem;
  button {
    border-radius: 12px;
    height: 30px;
    border: none;
  }
`;
