const comicMapper = (body) => {
  return {
    id: body.num,
    image: body.img,
    title: body.title,
  };
};

export default comicMapper;
