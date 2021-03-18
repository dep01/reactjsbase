import { store } from "@risingstack/react-easy-state";

class GlobalStore {
  static state = store({
    isLoading: false,
    setLoading(val) {
      GlobalStore.state.isLoading = val;
    },
  });
}

export default GlobalStore;
