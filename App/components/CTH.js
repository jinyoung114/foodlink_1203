import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const CTH = ({ title }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      {/* 상단바 왼쪽: 하트 아이콘 */}
      <View style={styles.left}>
        <TouchableOpacity onPress={() => navigation.navigate("HeartScreen")}>
          <Ionicons name="heart-outline"  size={22} color="#2D754E" />
        </TouchableOpacity>
      </View>

      {/* 중앙: 타이틀 */}
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* 상단바 오른쪽: 알림 및 사용자 아이콘 */}
      <View style={styles.right}>
        
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => navigation.navigate("IfmScreen")}
        >
          <Ionicons name="person-outline" size={22} color="#2D754E" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
  },
  left: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  center: {
    flex: 2,
    alignItems: "center",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  iconWrapper: {
    marginLeft: 10,
  },
});

export default CTH;
