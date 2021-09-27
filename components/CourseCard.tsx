import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function CourseCard({
  title,
  navigation,
}: {
  title: string;
  navigation: any;
}) {
  return (
    <Pressable onPress={()=>navigation.navigate('BubbleSort')}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    margin: 10,
    width: 180,
    height: 120,
  },
});
