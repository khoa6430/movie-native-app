import { useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";

export interface IMovieDetailProps {}

interface Genre {
  name: string;
}
interface Movie {
  id: string;
  title: string;
  status: string;
  genres: Genre[];
  overview: string;
}

let { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function MovieInfor(props: IMovieDetailProps) {
  const theme = useAppTheme();

  const [movie, setMovie] = useState<Movie | null>({
    id: "1",
    title: "Ant-Man and the Wasp: Quantumania",
    status: "",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Thrill",
      },
      {
        name: "Comedy",
      },
    ],
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex nec urna euismod interdum ut id eros. Sed sed mauris justo. Nulla in velit in elit tincidunt gravida id eu sem. Quisque nulla elit, pellentesque non ultricies sit amet, posuere at purus. Nam bibendum ipsum eleifend justo finibus posuere. Fusce quis molestie erat. Fusce lectus dolor, tempor in dolor sit amet, accumsan egestas tortor. Sed sollicitudin suscipit elit ut varius. Sed nec turpis scelerisque, ultricies dolor quis, fringilla erat",
  });

  return (
    <>
      {/* Movie details */}
      <View style={{ marginTop: -(height * 0.09), marginVertical: 12 }}>
        <Text
          style={{
            color: theme.colors.white,
            textAlign: "center",
            fontWeight: "700",
            //   letterSpacing: 0.4,
          }}
          variant="bodyLarge"
        >
          {movie?.title}
        </Text>
        {/* Status, Release , Runtime */}
        {movie?.id ? (
          <Text
            style={{
              color: theme.colors.neutral400,
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
            }}
          >
            {/* {movie?.status} • {movie?.release_date?.split("-")[0] || "N/A"} •{" "}
              {movie?.runtime} min */}
            Realeased 2020 170 min
          </Text>
        ) : null}

        {/* Genres  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 16,
            marginVertical: 8,
          }}
        >
          {movie?.genres?.map((genre: any, index: number) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text
                key={index}
                style={{
                  color: theme.colors.neutral400,
                  fontWeight: "600",
                  fontSize: 16,
                  lineHeight: 24,
                  textAlign: "center",
                }}
              >
                {genre?.name} {showDot ? "•" : null}
              </Text>
            );
          })}
        </View>

        {/* Description */}
        <Text
          style={{
            color: theme.colors.neutral400,
            marginHorizontal: 16,
            //   letterSpacing: 0.4,
          }}
        >
          {movie?.overview}
        </Text>
      </View>
    </>
  );
}
