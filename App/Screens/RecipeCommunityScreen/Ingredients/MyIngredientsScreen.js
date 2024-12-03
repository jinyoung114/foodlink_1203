import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import styles from "./MyIngredientsScreen.style"; // 스타일 분리
import NavigateBefore from "../../../components/NavigateBefore"; // NavigateBefore 컴포넌트 가져오기

const MyIngredientsScreen = ({ navigation }) => {
  const [imageUrls, setImageUrls] = useState([]); // 이미지 URL 상태

  // 이미지 선택 및 업로드
  const handleCameraPress = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("사진 라이브러리 접근 권한이 필요합니다.");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });
  
      if (!result.canceled) {
        const newImage = { id: Date.now().toString(), url: result.assets[0].uri };
  
        // 로컬 상태에 추가
        setImageUrls((prev) => [...prev, newImage]);
  
        Alert.alert("업로드 성공", "이미지가 성공적으로 추가되었습니다!", [
          {
            text: "확인",
            onPress: () => {
              // MyFoodWrite 화면으로 이동하며 업로드한 이미지 전달
              navigation.navigate("MyFoodWrite", { image: newImage });
            },
          },
        ]);
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      Alert.alert("오류", "이미지 업로드 중 문제가 발생했습니다.");
    }
  };
  

  // 이미지 삭제
  const handleDeleteImage = (imageId) => {
    Alert.alert(
      "이미지 삭제",
      "이 이미지를 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          style: "destructive",
          onPress: () => {
            setImageUrls((prev) => prev.filter((item) => item.id !== imageId));
            Alert.alert("삭제 성공", "이미지가 성공적으로 삭제되었습니다.");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 헤더 */}
        <View style={styles.header}>
          <NavigateBefore onPress={() => navigation.goBack()} /> {/* navigation 사용 */}
          <Text style={styles.title}>내 레시피</Text>
          <View style={styles.emptySpace} />
        </View>

        {/* Profile Section */}
        <View style={styles.profileCard}>
          {/* 카메라 버튼 */}
          <TouchableOpacity style={styles.cameraButton} onPress={handleCameraPress}>
            <MaterialIcons name="camera-alt" size={40} color="#2D754E" />
          </TouchableOpacity>
          <Text style={styles.profileText}>
            <Text style={styles.highlightText}>동길님</Text>
            <Text> 냉장고에{"\n"} 식자재를 추가해보세요.</Text>
          </Text>
        </View>

        {/* 업로드된 이미지 그리드 */}
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {imageUrls.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridItem}
              onPress={() => navigation.navigate("IngredientDetailScreen", { item })} // 상세 페이지로 이동
            >
              <Image source={{ uri: item.url }} style={styles.gridImage} />
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => handleDeleteImage(item.id)}
              >
                <Text style={styles.deleteIconText}>×</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}

          {/* 빈 네모 박스 추가 */}
          {Array.from({ length: 12 - imageUrls.length }).map((_, index) => (
            <View key={`empty-${index}`} style={styles.emptyGridItem} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyIngredientsScreen;
