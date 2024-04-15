import * as React from "react";
import {
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import generateImageUrlBySize, {
  ImageSize,
} from "../../../constants/get-image-url";
import FallbackImages from "../../../constants/fall-back-image";

export interface IMovieCardProps {
  url: string;
  handleClick: () => void;
}

let { width, height } = Dimensions.get("window");
export default function MovieCard(props: IMovieCardProps) {
  const { url, handleClick } = props;
  return (
    <TouchableWithoutFeedback onPress={() => handleClick()}>
      <Image
        source={{
          uri: generateImageUrlBySize(
            ImageSize.W500,
            url || FallbackImages.FallbackMoviePoster
          ),
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 24,
        }}
      />
    </TouchableWithoutFeedback>
  );
}
