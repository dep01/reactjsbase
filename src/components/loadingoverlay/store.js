import { store } from "@risingstack/react-easy-state";
import { GlobalState } from "../../utils";

export const state = store({
  deg: 0,
});
export function cleanUp() {
  state.deg = 0;
}
export function initialized() {
  setInterval(function () {
    state.deg = state.deg + 10;
  }, 100);
}
