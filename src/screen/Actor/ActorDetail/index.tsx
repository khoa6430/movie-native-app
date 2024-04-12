import { Dimensions, Image, Platform, StyleSheet, View } from "react-native";
import Loading from "../../../components/loading";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";
import MovieList from "../../shared/MovieList";
import { useState } from "react";

export interface IActorDetailProps {
  loading: boolean;
}
let { width, height } = Dimensions.get("window");
export default function ActorDetail(props: IActorDetailProps) {
  const { loading } = props;
  const theme = useAppTheme();
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);

  const InformationActor = ({
    title,
    detail,
  }: {
    title: string;
    detail: string;
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
                source={require("../../../../assets/images/castImage2.png")}
                // source={{
                //   uri: image342(person?.profile_path) || fallbackPersonImage,
                // }}
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
              Keanu Reeves
              {/* {person?.name} */}
            </Text>
            <Text
              style={{
                color: theme.colors.neutral500,
                fontWeight: "700",
                textAlign: "center",
              }}
              variant="labelLarge"
            >
              {/* {person?.place_of_birth} */}
              Beirut, Lebanon
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
            <InformationActor title="Gender" detail="Male" />
            <InformationActor title="Birthday" detail="1964-09-02" />
            <InformationActor title="Known for" detail="Acting" />

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
                style={{ color: theme.colors.neutral300, fontWeight: "600" }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                aliquam, quam aspernatur ut debitis corporis et harum quisquam
                illum facilis iusto totam, accusamus ex praesentium enim facere
                eaque ab voluptate?
                {/* {person?.popularity?.toFixed(2)} % */}
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
              {/* {person?.biography || "N/A"} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              praesentium hic accusantium et laboriosam soluta obcaecati
              provident natus! Qui, saepe. Saepe quo eveniet placeat accusantium
              animi soluta facilis libero illo aperiam ex atque itaque aut, quam
              distinctio excepturi, molestias veniam optio! Vero aliquid
              necessitatibus, rem officiis consequuntur veniam et iste.
            </Text>
          </View>

          {/* person movies */}
          <MovieList titleList={"Movies"} hideSeeAll data={personMovies} />
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
