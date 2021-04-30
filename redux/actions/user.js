import axios from "axios";

export const LOGIN = "LOGIN";

export const userLogin = (id, name, token, status) => ({
  type: LOGIN,
  payload: { id: id, name: name, token: token, status: status },
});

export const tokenFetch = (token) => (dispatch) => {
  axios({
    url: `http://localhost:8000/api/user/tokenCheck`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((res) => {
    dispatch({
      type: LOGIN,
      payload: {
        id: res.data.id,
        name: res.data.name,
        token: token,
        status: true,
      },
    });
  });
};
