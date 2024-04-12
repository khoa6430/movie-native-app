import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../../components/loading";
import { useAppTheme } from "../../theme/userTheme";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useCallback, useState } from "react";
import { debounce } from "lodash";

export interface ISearchScreenProps {}

export default function SearchScreen(props: ISearchScreenProps) {
  const theme = useAppTheme();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const movieName = "Ant-Man and the Wasp: Quantumania";

  //   const handleSearch = (value) => {
  //     if (value && value.length > 2) {
  //       setLoading(true);
  //       //   searchMovies({
  //       //     query: value,
  //       //     include_adult: "false",
  //       //     language: "en-US",
  //       //     page: "1",
  //       //   }).then((data) => {
  //       //     if (data && data.results) setResults(data.results);
  //       //     setLoading(false);
  //       //   });
  //     } else {
  //       setLoading(false);
  //       setResults([]);
  //     }
  //   };
  // now everytime our api not be called , api will be called after the delay of 400 ms
  //   const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.neutral800, flex: 1 }}>
      {/* <View
        style={{
          marginHorizontal: 16,
          marginBottom: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: theme.colors.neutral500,
          borderRadius: 999,
        }}
      >
        <TextInput
        //   onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View> */}

      {/* results */}
      {/* {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results ({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View className="space-y-2 mb-4">
                    <Image
                      source={{
                        uri: image185(item.poster_path) || fallbackMoviePoster,
                      }}
                      // source={require('../assets/images/moviePoster2.png')}
                      className="rounded-3xl"
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />
                    <Text className="text-gray-300 ml-1">
                      {item?.title.length > 22
                        ? item?.title.slice(0, 22) + "..."
                        : item?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-col justify-center items-center">
          <Image
            source={require("../assets/images/movieTime.png")}
            className="h-96 w-96"
          />
          <Text className="text-neutral-400 text-xl">
            Explore the world of cinema!
          </Text>
        </View>
      )} */}
    </SafeAreaView>
  );
}
