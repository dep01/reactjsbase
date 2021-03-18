import { store } from "@risingstack/react-easy-state";

// class Store {
export const state = store({
  username: "",
  password: "",
  isLoading: false,
});
export async function initialized() {
  state.isLoading = true;
  setTimeout(() => {
    state.isLoading = false;
  }, 3000);
}
export async function cleanUp() {
  state.isLoading = false;
  state.password = "";
  state.username = "";
}
export async function doLogin({ values, history }) {
  console.log(values);
  state.isLoading = true;
  if (state.username == "indosat" && state.password == "indosat") {
  } else if (state.username == "favicon" && state.password == "favicon") {
  } else {
  }
  history.push("/Dashboard");
  setTimeout(() => {
    state.isLoading = false;
  }, 3000);
}
// }

// export default Store;
