import { store } from "@risingstack/react-easy-state";
import { GlobalStore } from "../../utils";

export const state = store({
  isLoadingPie: false,
  isLoadingLine: false,
  isLoadingThreeLine: false,
  isLoadingRadarData: false,
  endOfPage: false,
  isRefresh: false,
  line_data: [],
  line_three_data: [],
  pie_data: [],
  radar_data: [],
});

export function cleanUp() {
  state.isLoading = false;
  state.isRefresh = false;
  state.endOfPage = false;
  state.line_data = [];
  state.line_three_data = [];
  state.pie_data = [];
}
export async function initialized() {
  GlobalStore.state.isLoading = true;
  state.isLoadingLine = true;
  state.isLoadingThreeLine = true;
  state.isLoadingPie = true;
  setTimeout(function () {
    GlobalStore.state.isLoading = false;
  }, 3000);
  setTimeout(() => {
    state.line_data = [
      { year: "1991", value: 3 },
      { year: "1992", value: 4 },
      { year: "1993", value: 3.5 },
      { year: "1994", value: 5 },
      { year: "1995", value: 4.9 },
      { year: "1996", value: 6 },
      { year: "1997", value: 7 },
      { year: "1998", value: 9 },
      { year: "1999", value: 13 },
    ];
    state.isLoadingLine = false;
  }, 5000);
  setTimeout(() => {
    state.pie_data = [
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
    ];
    state.radar_data = [
      [
        { item: "Design", a: 70, b: 30 },
        { item: "Development", a: 60, b: 70 },
        { item: "Marketing", a: 50, b: 60 },
        { item: "Users", a: 40, b: 50 },
        { item: "Test", a: 60, b: 70 },
        { item: "Language", a: 70, b: 50 },
        { item: "Technology", a: 50, b: 40 },
        { item: "Support", a: 30, b: 40 },
        { item: "Sales", a: 60, b: 40 },
        { item: "UX", a: 50, b: 60 },
      ],
    ];
    state.isLoadingPie = false;
  }, 8000);
  setTimeout(() => {
    state.line_three_data = [
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
    ];
    state.isLoadingThreeLine = false;
  }, 3000);
}
