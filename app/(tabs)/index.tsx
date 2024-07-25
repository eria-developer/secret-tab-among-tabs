import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const home = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <View>
        <Text>
          In this simple app, we explore how to add a file tab within the tabs
          directory but you dont want it to be displayed among the tabs
        </Text>
        <Text>
          Forexample we have added the just page among tabs, but it is not being
          displayed.
        </Text>
        <Text>
          We just have to added a href option and set it to null, in the layout
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Link href="just" style={{ color: "blue", fontWeight: "600" }}>
          Go to Just tab
        </Link>
      </View>
    </View>
  );
};

export default home;
