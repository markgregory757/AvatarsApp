import http from "../http-common";
class UserDataService {
  getAll() {
    return http.get("/user");
  }
  get() {
    return http.get(`/user`);
  }
  create(data) {
    return http.post("/user", data);
  }
  update(id, data) {
    return http.put(`/user/${id}`, data);
  }
  delete(id) {
    return http.delete(`/user/${id}`);
  }
  deleteAll() {
    return http.delete(`/user`);
  }
  findByName(name) {
    return http.get(`/user?name=${name}`);
  }
}
export default new UserDataService();
