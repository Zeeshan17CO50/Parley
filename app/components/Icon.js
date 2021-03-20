import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({
  name,
  size = 40,
  style,
  backgroundColor = colors.light_gray,
  iconColor = colors.white,
}) {
  return (
    <View
      style={[
        {
          alignItems: "center",
          height: size,
          width: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
        },
        style,
      ]}
    >
      <MaterialIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}

export default Icon;
