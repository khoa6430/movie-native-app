import * as React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useAppTheme } from "../../../theme/userTheme";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Cast } from "../../../types/cast.type";
import generateImageUrlBySize, {
  ImageSize,
} from "../../../constants/get-image-url";
import FallbackImages from "../../../constants/fall-back-image";
import { StackNavigation } from "../../../navigation/appNavigation";

export interface IMovieCastProps {
  cast?: Cast[];
}

export default function MovieCast(props: IMovieCastProps) {
  const { cast } = props;
  const theme = useAppTheme();
  const navigation = useNavigation<StackNavigation>();

  const handleNavigate = (castId?: number) => {
    navigation.navigate("Actor", { castId: `${castId}` });
  };

  return (
    <View style={{ marginVertical: 24 }}>
      <Text
        style={{
          color: theme.colors.white,
          marginHorizontal: 16,
          marginBottom: 20,
        }}
        variant="bodySmall"
      >
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person: Cast, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleNavigate(person?.id)}
                style={{ marginRight: 16, alignItems: "center" }}
              >
                <View
                  style={{
                    overflow: "hidden",
                    borderRadius: 999,
                    height: 80,
                    width: 80,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: theme.colors.neutral500,
                  }}
                >
                  <Image
                    source={{
                      uri: generateImageUrlBySize(
                        ImageSize.W185,
                        person?.profile_path,
                        FallbackImages.FallbackPersonImage
                      ),
                    }}
                    style={{
                      borderRadius: 24,
                      height: 96,
                      width: 80,
                    }}
                  />
                </View>

                <Text
                  style={{ color: theme.colors.white, marginTop: 4 }}
                  variant="labelSmall"
                >
                  {person?.character.length > 10
                    ? person?.character.slice(0, 10) + "..."
                    : person?.character}
                </Text>
                <Text
                  style={{ color: theme.colors.neutral400 }}
                  variant="labelSmall"
                >
                  {person?.original_name.length > 10
                    ? person?.original_name.slice(0, 10) + "..."
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
