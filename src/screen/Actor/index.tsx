import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { useAppTheme } from "../../theme/userTheme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  RootRouteProps,
  RootStackParamList,
} from "../../navigation/appNavigation";
import GoBackButton from "../../components/goback-button";
import FavouriteButton from "../../components/favourite-button";
import ActorDetail from "./ActorDetail";
import { useGetDetailsCast } from "../../hooks/casts/useGetDetailsCast";

export interface IActorScreenProps {}

const ios = Platform.OS == "ios";
export default function ActorScreen(props: IActorScreenProps) {
  const theme = useAppTheme();
  const route = useRoute<RootRouteProps<"Actor">>();

  const [isFavourite, toggleFavourite] = useState(false);

  const { data: dataCasts } = useGetDetailsCast(route?.params?.castId);

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleGoback = () => {
    navigation.goBack();
  };
  const handleClickFavourite = () => {
    toggleFavourite(!isFavourite);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.neutral900,
      }}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          zIndex: 10,
          marginVertical: ios ? 0 : 12,
        }}
      >
        <GoBackButton handleGoBack={handleGoback} />
        <FavouriteButton
          isFavourite={isFavourite}
          handleClickFavourite={handleClickFavourite}
        />
      </SafeAreaView>
      <ActorDetail loading={false} dataDetailsCast={dataCasts} />
    </ScrollView>
  );
}
