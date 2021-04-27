import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiComics from "../../api/comics";
import { Container, LogoContainer } from "./styles";
import { Rating } from "./rating";

export const Comics = () => {
  const [comicInfo, setComic] = useState(null);
  const apiComics = new ApiComics(axios);
  useEffect(() => {
    handleRandomComic();
  }, []);
  const handleRandomComic = async () => {
    const comicInfo = await apiComics.getRandomComic();
    setComic(comicInfo);
  };

  return (
    <Container>
      <LogoContainer
        src="https://masiv.com/wp-content/uploads/2020/10/V6Logo-Masiv-Blanco.png"
        alt="logo masiv"
      />
      {comicInfo && (
        <>
          <p>{comicInfo.title}</p>
          <img src={comicInfo.image} alt="imagen del comic" />
        </>
      )}
      <Rating />
      <button onClick={() => handleRandomComic()}>Comic aleatorio</button>
    </Container>
  );
};
