import { useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";
import { DetailsMovie } from "../../../types/movie.type";

export interface IMovieDetailProps {
  dataDetailsMovie?: DetailsMovie;
}

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
  const { dataDetailsMovie } = props;
  const theme = useAppTheme();

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
          {dataDetailsMovie?.title}
        </Text>
        {/* Status, Release , Runtime */}
        {dataDetailsMovie?.id ? (
          <Text
            style={{
              color: theme.colors.neutral400,
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
            }}
          >
            {dataDetailsMovie?.status} •{" "}
            {dataDetailsMovie?.release_date?.split("-")[0] || "N/A"} •{" "}
            {dataDetailsMovie?.runtime}
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
          {dataDetailsMovie?.genres?.map((genre: any, index: number) => {
            let showDot = index + 1 != dataDetailsMovie?.genres.length;
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
                {genre?.name} {showDot ? " • " : null}
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
          {dataDetailsMovie?.overview}
        </Text>
      </View>
    </>
  );
}
