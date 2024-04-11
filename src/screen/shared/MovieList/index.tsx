import * as React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useAppTheme } from "../../../theme/userTheme";
import { Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../navigation/appNavigation";
export interface IMovieListProps {
  titleList: string;
  data: number[];
}

let { width, height } = Dimensions.get("window");

export default function MovieList(props: IMovieListProps) {
  const { titleList, data } = props;
  const { navigate } = useNavigation<StackNavigation>();
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
      </View>
      {/* MOVIE ROW */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigate("Movie")}
            >
              <View style={{ marginVertical: 16, marginRight: 16 }}>
                <Image
                  source={require("../../../../assets/images/moviePoster2.png")}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 24,
                  }}
                />
                <Text
                  style={{ color: theme.colors.textNeutral, marginLeft: 4 }}
                >
                  Movie name {item}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
