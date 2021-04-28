export const LOGIN = "LOGIN";

export const userLogin = (id, status) => ({
  type: LOGIN,
  payload: { id: id, status: status },
});
