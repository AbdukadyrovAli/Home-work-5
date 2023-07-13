import React, { useState } from "react";
import { Input } from "../UI/Input/Input";
import { styled } from "styled-components";
import { Button } from "../UI/button/Button";

export const EditModal = ({ handlerClose, updateMovie, el }) => {
  const [title, setTitle] = useState(el.title);
  const [img, setImg] = useState(el.img);
  const [rating, setRating] = useState(el.rating);

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
    const update = {
      title,
      img,
      rating,
      id: el.id,
    };
    setImg("");
    setRating("");
    setTitle("");

    updateMovie(update);
    handlerClose();
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
        placeholder={"nunber"}
      />
      <ContainerButton>
        <Button bgColor={"#ff7200"} onClick={handlerClose}>
          Cancel
        </Button>
        <Button bgColor={"pink"} onClick={addMovieHandler}>
          Add
        </Button>
      </ContainerButton>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #515050;
  padding: 20px;
  height: 230px;
  border-radius: 12px;
  color: black;
  input {
    width: 600px;
    height: 30px;
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
    color: #fff;
    border: none;
  }
`;
