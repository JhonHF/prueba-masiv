const comicMapper = (body) => {
  const { num, img, title } = body;
  if (num && img && title) {
    return {
      id: body.num,
      image: body.img,
      title: body.title,
    };
  }

  return null;
};

export default comicMapper;
