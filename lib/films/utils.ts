import { getFilmById } from "./fetch";

export const numberWithDot = (x: number): string => {
  return Intl.NumberFormat("en-US").format(x);
};
