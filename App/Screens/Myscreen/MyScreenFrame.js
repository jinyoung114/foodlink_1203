import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from "../Myscreen/MyScreenFrame.style";
import CustomHeader from "../../components/CustomHeader";
import TabNavigator from "../../components/TabNavigator";
import MyScreen from "./MyScreen";

const MyScreenFrame = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 상단 */}
        <CustomHeader title="내 게시판" />

        {/* MyScreen */}
        <View style={styles.content}>
          <MyScreen />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default MyScreenFrame;
