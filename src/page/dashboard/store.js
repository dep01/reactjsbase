import { store } from "@risingstack/react-easy-state";

export const state = store({
  isLoading: false,
  endOfPage: false,
  isRefresh: false,
  line_data: [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ],
  line_three_data: [
    { year: "1991", value: 3, series: "Bekasi" },
    { year: "1992", value: 3, series: "Bekasi" },
    { year: "1993", value: 3.5, series: "Bekasi" },
    { year: "1994", value: 2, series: "Bekasi" },
    { year: "1995", value: 8, series: "Bekasi" },
    { year: "1996", value: 6, series: "Bekasi" },
    { year: "1997", value: 7, series: "Bekasi" },
    { year: "1998", value: 6, series: "Bekasi" },
    { year: "1999", value: 13, series: "Bekasi" },
    { year: "1991", value: 5, series: "Jakarta" },
    { year: "1992", value: 4, series: "Jakarta" },
    { year: "1993", value: 3.5, series: "Jakarta" },
    { year: "1994", value: 5, series: "Jakarta" },
    { year: "1995", value: 5, series: "Jakarta" },
    { year: "1996", value: 5, series: "Jakarta" },
    { year: "1997", value: 8, series: "Jakarta" },
    { year: "1998", value: 17, series: "Jakarta" },
    { year: "1999", value: 15, series: "Jakarta" },
    { year: "1991", value: 3, series: "Bandung" },
    { year: "1992", value: 4, series: "Bandung" },
    { year: "1993", value: 3.5, series: "Bandung" },
    { year: "1994", value: 5, series: "Bandung" },
    { year: "1995", value: 4.9, series: "Bandung" },
    { year: "1996", value: 6, series: "Bandung" },
    { year: "1997", value: 7, series: "Bandung" },
    { year: "1998", value: 9, series: "Bandung" },
    { year: "1999", value: 13, series: "Bandung" },
  ],
  pie_data: [
    {
      type: "PHP",
      value: 27,
    },
    {
      type: "Phyton",
      value: 25,
    },
    {
      type: "Golang",
      value: 18,
    },
    {
      type: "Node",
      value: 15,
    },
    {
      type: "Ruby",
      value: 10,
    },
    {
      type: "Java",
      value: 5,
    },
  ],
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
