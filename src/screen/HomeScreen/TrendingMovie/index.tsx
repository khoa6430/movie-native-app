import * as React from "react";
import { Dimensions, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";
import Carousel from "react-native-snap-carousel";
import MovieCard from "../../shared/MovieCard";

export interface ITrendingMovieProps {
  data: number[];
}
let { width, height } = Dimensions.get("window");
export default function TrendingMovie(props: ITrendingMovieProps) {
  const { data } = props;
  const theme = useAppTheme();
  const handleClick = () => {
    console.log("click item");
  };
  return (
    <>
      <View style={{ marginTop: 32 }}>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.white,
            marginHorizontal: 16,
            marginBottom: 20,
          }}
        >
          Trending
        </Text>
        <Carousel
          data={data}
          renderItem={({ item }: { item: any }) => (
            <MovieCard url={""} handleClick={handleClick} />
          )}
          firstItem={1}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.62}
          slideStyle={{ display: "flex", alignItems: "center" }}
          vertical={false}
        />
      </View>
    </>
  );
}
