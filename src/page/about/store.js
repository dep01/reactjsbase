import { store } from "@risingstack/react-easy-state";
import { GlobalStore } from "../../utils";

export const state = store({
  isLoading: false,
  endOfPage: false,
  isRefresh: false,
});

export function cleanUp() {
  state.isLoading = false;
  state.isRefresh = false;
  state.endOfPage = false;
}
export async function initialized() {
  console.log("kesini");
  GlobalStore.state.isLoading = true;
  setTimeout(function () {
    GlobalStore.state.isLoading = false;
  }, 3000);
}
