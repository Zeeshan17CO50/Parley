import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import UserProfile from "./app/screen/UserProfile";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <AppText style={styles.text}>Hello from Zeeshan I am here</AppText>
    //   <AppButton title="Record" onPress={()=>console.log("Record starting...")} width={200} color="secondary"/>
    //   <StatusBar style="auto" />
    // </View>
    <UserProfile/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "blue",
    fontSize: 50,
    fontWeight: '700'
  }
});
