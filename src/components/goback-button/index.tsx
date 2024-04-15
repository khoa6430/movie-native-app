import * as React from "react";
import { TouchableOpacity } from "react-native";
import { useAppTheme } from "../../theme/userTheme";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/appNavigation";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

export interface IGoBackButtonProps {
  handleGoBack: () => void;
}

export default function GoBackButton(props: IGoBackButtonProps) {
  const { handleGoBack } = props;
  const theme = useAppTheme();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: theme.colors.honeyGold,
        borderRadius: 12,
        padding: 4,
      }}
      onPress={() => handleGoBack()}
    >
      <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
    </TouchableOpacity>
  );
}
