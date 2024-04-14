// imageUtils.ts

export const image500 = (path: string | undefined): string => {
  if (!path) {
    return "";
  }

  return `https://image.tmdb.org/t/p/w500/${path}`;
};
