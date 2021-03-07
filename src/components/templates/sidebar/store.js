import React from "react";
import { store } from "@risingstack/react-easy-state";
import { FontAwesome } from "react-web-vector-icons";

import { useHistory } from "react-router-dom";
export const state = store({
  menu: [],
  role_id: "",
  isLoading: false,
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
      route: "dashboard",
      icon: <FontAwesome name="bell" color="white" size={30} />,
    },
    {
      id: 2,
      title: "About",
      icon: <FontAwesome name="bell" color="white" size={30} />,
      children: [
        {
          id: 3,
          title: "About",
          route: "about",
          icon: <FontAwesome name="bell" color="white" size={30} />,
        },
      ],
    },
  ];
}
export function GoTo(page) {
  const history = useHistory();
  history.push(`/${page}`);
}
