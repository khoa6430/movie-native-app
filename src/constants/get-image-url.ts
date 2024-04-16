// Define an enum for image sizes
export enum ImageSize {
  W500 = "w500",
  W342 = "w342",
  W185 = "w185",
}

// Function to generate image URLs based on size and path
const generateImageUrlBySize = (
  size: ImageSize,
  path: string | undefined,
  fallBackImage: string
): string => {
  if (!path) {
    return fallBackImage;
  }

  return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export default generateImageUrlBySize;
