import * as React from "react";
import {
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
        source={require("../../../../assets/images/moviePoster1.png")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 24,
        }}
      />
    </TouchableWithoutFeedback>
  );
}
