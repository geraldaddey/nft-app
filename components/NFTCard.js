import { View, Image, Text } from "react-native";
import React, { Children } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const NFTCard = (data) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image source={data.image} />

        {console.log(data)}
      </View>
      <Text> Gerald's NFT CARD</Text>
    </View>
  );
};

export default NFTCard;
