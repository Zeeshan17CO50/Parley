import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import AppScreen from "../components/AppScreen";

function EditScreen(props) {
  return (
    <AppScreen>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/abdul.jpg")} />
        <Icon
          backgroundColor={colors.black}
          name="reply"
          size={30}
          style={styles.icon}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    overflow: "hidden",
  },
  icon: {
    margin: 20,
    position: "absolute",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});

export default EditScreen;
