import { getFilmById } from "./fetch";

export const numberWithDot = (x: number): string => {
  return Intl.NumberFormat("en-US").format(x);
};

export const calculateCollectionRevenue = async (collection: any) => {
  let totalRevenue = 0;
  const films = collection.map((film: any) => film.id);
  const f = await Promise.all(
    films.map(async (f: any) => {
      const { revenue } = await getFilmById(f);
      totalRevenue += revenue;
      return totalRevenue;
    })
  );
  return totalRevenue;
};
