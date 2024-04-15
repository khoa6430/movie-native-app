import { Dimensions, Image, Platform, StyleSheet, View } from "react-native";
import Loading from "../../../components/loading";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";
import MovieList from "../../shared/MovieList";
import { useState } from "react";
import { DetailsCast } from "../../../types/cast.type";
import generateImageUrlBySize, {
  ImageSize,
} from "../../../constants/get-image-url";
import FallbackImages from "../../../constants/fall-back-image";
import { useGetMoviesByCast } from "../../../hooks/movies/useGetMoviesByCast";

export interface IActorDetailProps {
  dataDetailsCast?: DetailsCast;
  loading: boolean;
}
let { width, height } = Dimensions.get("window");
export default function ActorDetail(props: IActorDetailProps) {
  const { dataDetailsCast, loading } = props;
  const theme = useAppTheme();

  const { data: dataMovieByCast } = useGetMoviesByCast(
    `${dataDetailsCast?.id}`
  );

  const InformationActor = ({
    title = "",
    detail = "",
  }: {
    title: string;
    detail?: string;
  }) => {
    return (
      <>
        <View
          style={{
            borderRightWidth: 2,
            borderRightColor: theme.colors.neutral400,
            paddingHorizontal: 8,
            alignItems: "center",
            padding: 8,
          }}
        >
          <Text style={{ color: theme.colors.white, fontWeight: "600" }}>
            {title}
          </Text>
          <Text
            style={{ color: theme.colors.neutral300 }}
            variant="labelMedium"
          >
            {detail}
          </Text>
        </View>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <View
              style={{
                alignItems: "center",
                borderRadius: 999,
                overflow: "hidden",
                height: 288,
                width: 288,
                borderColor: theme.colors.neutral500,
                borderWidth: 2,
                ...styles.shadow,
              }}
            >
              <Image
                source={{
                  uri: generateImageUrlBySize(
                    ImageSize.W342,
                    dataDetailsCast?.profile_path ||
                      FallbackImages.FallbackPersonImage
                  ),
                }}
                style={{ height: height * 0.43, width: width * 0.74 }}
              />
            </View>
          </View>

          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: "700",
                textAlign: "center",
              }}
              variant="labelLarge"
            >
              {dataDetailsCast?.name}
            </Text>
            <Text
              style={{
                color: theme.colors.neutral500,
                fontWeight: "700",
                textAlign: "center",
              }}
              variant="labelLarge"
            >
              {dataDetailsCast?.place_of_birth}
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 12,
              padding: 16,
              marginTop: 24,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.colors.neutral700,
              borderRadius: 999,
            }}
          >
            <InformationActor
              title="Gender"
              detail={dataDetailsCast?.gender == 1 ? "Female" : "Male"}
            />
            <InformationActor
              title="Birthday"
              detail={dataDetailsCast?.birthday}
            />
            <InformationActor
              title="Known for"
              detail={dataDetailsCast?.known_for_department}
            />

            <View
              style={{
                paddingHorizontal: 8,
                flex: 1,
                // alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Popularity
              </Text>
              <Text
                style={{
                  color: theme.colors.neutral300,
                  fontWeight: "600",
                  textAlign: "center",
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {dataDetailsCast?.popularity?.toFixed(2)} %
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical: 24,
              marginHorizontal: 16,
            }}
          >
            <Text style={{ color: theme.colors.white }} variant="bodySmall">
              Biography
            </Text>
            <Text
              style={{ color: theme.colors.neutral400 }}
              variant="bodySmall"
            >
              {dataDetailsCast?.biography || "N/A"}
            </Text>
          </View>

          {/* Actor movies */}
          <MovieList
            titleList="Movies"
            data={dataMovieByCast?.cast?.map((item) => {
              return {
                title: item?.title || "",
                url: item?.poster_path,
              };
            })}
            hideSeeAll
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "gray",
        shadowRadius: 40,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
      },
      android: {
        shadowColor: "gray",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 15,
      },
    }),
  },
});
