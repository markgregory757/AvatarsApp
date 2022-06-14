import http from "../http-common";
class AvtrDataService {
  getAll() {
    return http.get("/avtr");
  }
  get() {
    return http.get(`/avtr`);
  }
  create(data) {
    return http.post("/avtr", data);
  }
  update(id, data) {
    return http.put(`/avtr/${id}`, data);
  }
  delete(id) {
    return http.delete(`/avtr/${id}`);
  }
  deleteAll() {
    return http.delete(`/avtr`);
  }
  findByName(name) {
    return http.get(`/avtr?name=${name}`);
  }
}
export default new AvtrDataService();
