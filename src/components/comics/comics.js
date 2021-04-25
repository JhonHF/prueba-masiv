import React from "react";
import axios from "axios";
import ApiComics from "../../api/comics";

export const Comics = () => {
    
  const apiComics = new ApiComics(axios);
  const handleRandomComic = async () => {
    const res = await apiComics.getOneComic(100)
  };
  return (
    <div>
      <button onClick={() => handleRandomComic()}>
        obtener un comic random
      </button>
    </div>
  );
};
