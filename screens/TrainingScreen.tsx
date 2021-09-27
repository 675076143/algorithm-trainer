import * as React from "react";
import { Button, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BubbleSort from "../components/Sort/BubbleSort";
import { GLView } from "expo-gl";
import Expo2DContext from "expo-2d-context";

const Stack = createNativeStackNavigator();

const data = [
  {
    title: "Sort",
    chapter: 1,
  },
  {
    title: "Queue",
    chapter: 2,
  },
];

export default function TrainingScreen({
  navigation,
}: RootTabScreenProps<"Training">) {
  const ref = React.useRef(null)
  const  _onGLContextCreate = (gl) => {
    const ctx = new Expo2DContext(gl);
    ref.current = ctx
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 100, 100);
    ctx.flush()
  };

  const handleMoveBlock = () => {
    const ctx = ref.current
    let x = 0
    const timer = setInterval(()=>{
      x+=4
      if(x>200){
        clearInterval(timer)
      }else{
        ctx.clearRect(x-4, 0, 100, 100)
        ctx.fillRect(x, 0, 100, 100);
        ctx.flush()
      }
    },1)
  }
  return (
    <View style={styles.container}>
      {/* {data.map((i) => (
        <CourseCard key={i.title} title={i.title} navigation={navigation} />
      ))} */}
      <GLView style={{ flex: 1 }} onContextCreate={_onGLContextCreate} />
      <Button title="Press Me" onPress={handleMoveBlock} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
