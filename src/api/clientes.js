import axios from "axios";

export default class ClientesApi {
  async getClientes() {
    try {
      const { data } = await axios.get("http://191.52.55.226:19003/clientes");
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}
