import { Dimensions, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";
import Carousel from "react-native-snap-carousel";
import MovieCard from "../../shared/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../navigation/appNavigation";
import { useGetTrendingMovie } from "../../../hooks/movies/useGetTrendingMovie";
import { useEffect } from "react";
import axios from "axios";
import { axiosWithTimeout } from "../../../utils/fetchWithTimeout";
import { image500 } from "../../../constants/imageEndPoints";
import { Movie } from "../../../types/movie.type";

export interface ITrendingMovieProps {
  // data: number[];
}
let { width, height } = Dimensions.get("window");
export default function TrendingMovie(props: ITrendingMovieProps) {
  // const { data } = props;
  const theme = useAppTheme();
  const { data } = useGetTrendingMovie();
  console.log("data:", data);
  // console.log("data:", data?.results[0].title);
  // console.log(
  //   "useGetTrendingMovie:",
  //   data?.results.map((item) => {
  //     console.log("item", item.poster_path);
  //     console.log("item:", item);
  //     return item;
  //   })
  // );

  const { navigate } = useNavigation<StackNavigation>();
  const handleClick = () => {
    navigate("Movie");
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
          data={data?.results || []}
          renderItem={({ item }: { item: Movie }) => (
            <MovieCard url={item.poster_path} handleClick={handleClick} />
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
