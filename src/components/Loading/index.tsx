import { View, Dimensions } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { useAppTheme } from "../../theme/userTheme";

const { width, height } = Dimensions.get("window");

export default function Loading() {
  const theme = useAppTheme();
  return (
    <View
      style={{
        height,
        width,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.colors.honeyGold}
      />
    </View>
  );
}
