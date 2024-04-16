import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { RootStackParamList } from "../../../navigation/appNavigation";
import { useAppTheme } from "../../../theme/userTheme";
import generateImageUrlBySize, {
  ImageSize,
} from "../../../constants/get-image-url";
import FallbackImages from "../../../constants/fall-back-image";

interface Movie {
  title: string;
  url: string;
}

export interface IMovieListProps {
  titleList: string;
  data?: Movie[];
  hideSeeAll?: boolean;
}

let { width, height } = Dimensions.get("window");

export default function MovieList(props: IMovieListProps) {
  const { titleList, data, hideSeeAll = false } = props;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const theme = useAppTheme();

  return (
    <View
      style={{
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          marginTop: 16,
        }}
      >
        <Text variant="bodyMedium" style={{ color: theme.colors.white }}>
          {titleList}
        </Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text
              style={{
                color: theme.colors.textPrimary,
              }}
              variant="bodySmall"
            >
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* MOVIE ROW */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              // onPress={() => navigation.push("Movie")}
            >
              <View style={{ marginVertical: 16, marginRight: 16 }}>
                <Image
                  source={{
                    uri: generateImageUrlBySize(
                      ImageSize.W185,
                      item?.url,
                      FallbackImages.FallbackMoviePoster
                    ),
                  }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 24,
                  }}
                />
                <Text
                  style={{
                    color: theme.colors.textNeutral,
                    marginLeft: 4,
                    marginTop: 6,
                  }}
                >
                  {item?.title?.length > 19
                    ? item?.title.slice(0, 19) + "..."
                    : item?.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
