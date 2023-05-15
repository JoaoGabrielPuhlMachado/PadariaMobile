import axios from "axios";

export default class ItensApi {
  async getItens() {
    try {
      const { data } = await axios.get("http://191.52.55.226:19003/itens");
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
