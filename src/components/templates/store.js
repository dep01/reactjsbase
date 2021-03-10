import { store } from "@risingstack/react-easy-state";
export const state = store({
  menu: [],
  role_id: "",
  isLoading: false,
  isCollapse: false,
});

export function cleanUp() {
  state.menu = [];
  state.role_id = "";
  state.isLoading = false;
}

export async function initialized() {
  state.menu = [
    {
      id: 1,
      title: "Dashboard",
      route: "",
      icon: "FaChessKing",
    },
    {
      id: 2,
      title: "Component",
      icon: "FaChessQueen",
      children: [
        {
          id: 3,
          title: "Modal",
          route: "about",
          icon: "FaChessPawn",
        },
        {
          id: 4,
          title: "Card",
          route: "about",
          icon: "FaChessPawn",
        },
        {
          id: 5,
          title: "Button",
          route: "about",
          icon: "FaChessPawn",
        },
        {
          id: 6,
          title: "Loading",
          route: "about",
          icon: "FaChessPawn",
        },
      ],
    },
  ];
}
export function GoTo({ route = "", history }) {
  history.push(`/${route}`);
}

export function toggleCollapsed() {
  state.isCollapse = !state.isCollapse;
}
