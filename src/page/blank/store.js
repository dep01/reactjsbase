import { store } from "@risingstack/react-easy-state";

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
  state.isLoading = true;
  setTimeout(function () {
    state.isLoading = false;
  }, 3000);
}
