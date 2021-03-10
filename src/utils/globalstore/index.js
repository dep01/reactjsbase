import { store } from "@risingstack/react-easy-state";

export const GlobalState = store({
  isLoading: false,
  setLoading(val) {
    GlobalState.isLoading = val;
  },
});
