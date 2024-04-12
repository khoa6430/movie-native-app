import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";
import { useAppTheme } from "../../theme/userTheme";

export interface IFavouriteButtonProps {
  isFavourite: boolean;
  handleClickFavourite: () => void;
}

export default function FavouriteButton(props: IFavouriteButtonProps) {
  const { isFavourite, handleClickFavourite } = props;
  const theme = useAppTheme();

  return (
    <TouchableOpacity onPress={handleClickFavourite}>
      <HeartIcon
        size={35}
        color={isFavourite ? theme.colors.honeyGold : theme.colors.white}
      />
    </TouchableOpacity>
  );
}
