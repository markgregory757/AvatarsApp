import http from "../http-common";
class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }
  get() {
    return http.get(`/tutorials`);
  }
  create(data) {
    return http.post("/tutorials", data);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new TutorialDataService();
