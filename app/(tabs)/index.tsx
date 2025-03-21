import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import {
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "../components/MovieCard";

export default function index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies(""));

  return (
    <View className="flex-1 bg-primary">
      <StatusBar backgroundColor="#0F0D23" />
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto " />
        {moviesLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>{moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />
            <>
              <Text className="text-lg font-bold mt-5 mb-3 text-white">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  marginBottom: 10,
                  gap: 20,
                  paddingRight: 5,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
