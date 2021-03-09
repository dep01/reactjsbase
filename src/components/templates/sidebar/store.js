import React from "react";
import { store } from "@risingstack/react-easy-state";
import { FaDashcube, FaInfo } from "react-icons/fa";

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
      icon: <FaDashcube size={20} color="blue" />,
    },
    {
      id: 2,
      title: "About",
      icon: <FaDashcube size={20} color="blue" />,

      children: [
        {
          id: 3,
          title: "About",
          route: "about",
          icon: <FaDashcube size={20} color="blue" />,
        },
      ],
    },
  ];
}
export function GoTo(page) {
  const history = useHistory();
  history.push(`/${page}`);
}
