import React, { useState } from "react";
import { Button } from "../UI/button/Button";
import { styled } from "styled-components";
import { EditModal } from "../modal/EditModal";

export const MainContent = ({ setMovie, updateMovie, movie, el }) => {
  const [isModal, setIsModal] = useState(false);

  const deleteHandelr = () => {
    const del = movie.filter((movie) => movie.id !== el.id);
    setMovie(del);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const handlerClose = () => {
    setIsModal(false);
  };

  return (
    <Container>
      {isModal && (
        <EditModal
          handlerClose={handlerClose}
          updateMovie={updateMovie}
          el={el}
        />
      )}

      <MiniContainer>
        <img src={el.img} alt="" />
        <Title>{el.title}</Title>
        <ButtonContainer>
          <Rating>{el.rating}/5 stars</Rating>
          <Button onClick={deleteHandelr} bgColor={"red"}>
            Delete
          </Button>
          <Button onClick={openModal} bgColor={"blue"}>
            Edit
          </Button>
        </ButtonContainer>
      </MiniContainer>
    </Container>
  );
};
const Rating = styled.h3`
  background-color: #f8e223;
  color: #fff;
  border-radius: 12px;
`;
const Title = styled.p`
  margin-bottom: 100px;
`;
const MiniContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: -6px -4px 29px 13px rgba(34, 60, 80, 0.2);
  width: 600px;
  height: 190px;
  img {
    width: 150px;
    height: 150px;
    margin-left: 2rem;
    border-radius: 10px;
  }
  button {
    border-radius: 12px;
    height: 30px;
    color: #fff;
    border: none;
    width: 80px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
