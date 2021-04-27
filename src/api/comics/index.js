import comicMapper from "./mapper";

class ApiComics {
  constructor(client) {
    this.client = client;
  }

  getRandomComic = async () => {
    const random = Math.floor(Math.random() * (2455 - 1)) + 1;
    try {
      const { data } = await this.client.get(`/${random}/info.0.json`);
      return comicMapper(data);
    } catch (error) {
      alert("Error al obtener un comic random");
    }
  };
}

export default ApiComics;
