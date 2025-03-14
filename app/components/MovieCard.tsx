import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} className="flex-1 w-[33.3333%] p-2" asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${images.noposter.png}`,
          }}
        />
        <Text className="text-white text-sm mt-2 font-bold" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-white text-sm font-bold uppercase">
            {vote_average.toFixed(2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between gap-x-1">
          <Text className="text-xs text-lime-50 font-medium mt-1 ">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-xs text-lime-50 font-medium mt-1 ">Action</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
