import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import headerStyles from '../styles/header.style';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  const [selectedItems, setSelectedItems] = useState([]); 

  const getTitleStyle = () => {
    if (title.length >= 3) {
      return [headerStyles.headerTitle, { left: '47%' }];
    }
    return [headerStyles.headerTitle, { left: '52%' }];
  };

  const removeItem = (item) => {
    Alert.alert(
      '항목 제거',
      `${item}을(를) 제거하시겠습니까?`,
      [
        { text: '취소', style: 'cancel' },
        {
          text: '확인',
          onPress: () => {
            setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={headerStyles.header}>
      <View style={headerStyles.headerTop}>
        <TouchableOpacity onPress={() => navigation.navigate('HeartScreen')}>
          <Ionicons name="heart-outline" size={22} color="green" />
        </TouchableOpacity>
        <Text style={getTitleStyle()}>{title}</Text>
        <View style={headerStyles.headerRight}>
          <TouchableOpacity onPress={() => navigation.navigate('AlarmScreen')}>
            <Ionicons name="notifications-outline" size={22} color="green" style={headerStyles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('IfmScreen')}>
            <Ionicons name="person-outline" size={22} color="green" />
          </TouchableOpacity>
        </View>
      </View>

      {title === '홈' || title === '동네 지도' ? (
        <>
          <View style={headerStyles.headerBottom}>
            <TouchableOpacity style={headerStyles.locationDropdown}>
              <Text style={headerStyles.locationText}>거주지</Text>
              <Ionicons name="chevron-down-outline" size={16} color="green" />
            </TouchableOpacity>

            <View style={headerStyles.searchBar}>
              <Ionicons name="search-outline" size={16} color="gray" />
              <TextInput
                placeholder="검색"
                placeholderTextColor="gray"
                style={headerStyles.searchInput}
              />
            </View>
          </View>

          <View style={headerStyles.categoryContainer}>
            <TouchableOpacity
              style={headerStyles.categoryIcon}
              onPress={() =>
                navigation.navigate('CategoryScreen', { setSelectedItems })
              }
            >
              <Ionicons name="grid-outline" size={24} color="green" />
            </TouchableOpacity>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={headerStyles.selectedItemsContainer} 
            >
              {selectedItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => removeItem(item)} 
                  style={headerStyles.selectedItemTouchable}
                >
                  <Text style={headerStyles.selectedItem}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </>
      ) : null}
    </SafeAreaView>
  );
};

export default CustomHeader;
