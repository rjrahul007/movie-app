import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const movieDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>movieDetails {id}</Text>
    </View>
  );
};

export default movieDetails;
