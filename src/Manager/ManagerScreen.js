import React from "react";
import { View, Text, FlatList , StyleSheet} from "react-native";
import { useState } from "react";

export default function ManagerScreen({navigation}) {

  // - Danh sách cửa hàng, mỗi bản ghi cửa hàng gồm: id, tên, địa chỉ, Sđt, logo, trạng thái (1/0)
  const dataStore = [
    {id: 0, nameStore: 'Cua Hang 01', address: 'Ha Noi', phoneNumver: '0987654321', logo: 'hh', status: 1},
    {id: 1, nameStore: 'Cua Hang 02', address: 'Hai Phong', phoneNumber: '0987654321', logo: 'ff', status: 0},
    {id: 2, nameStore: 'Cua Hang 03', address: 'Bac Giang', phoneNumver: '0987654321', logo: 'ff', status: 1},
    {id: 3, nameStore: 'Cua Hang 04', address: 'Nam Dinh', phoneNumver: '0987654321', logo: 'ff', status: 0},
    {id: 4, nameStore: 'Cua Hang 05', address: 'Ha Noi', phoneNumver: '0987654321', logo: 'ff', status: 1},
    {id: 5, nameStore: 'Cua Hang 06', address: 'Bac Giang', phoneNumver: '0987654321', logo: 'ff', status: 1},
    {id: 6, nameStore: 'Cua Hang 07', address: 'Ho Chi Minh', phoneNumver: '0987654321', logo: 'ff', status: 0},
  ];
  const [list, setList] = useState(dataStore);


  return (
    <View style={styles.container}>
      <Text>Trang danh sách</Text>
        <FlatList
          data={list}
          renderItem={({item}) => 
          <View>
            <Text>ID: {item.id}</Text>
            <Text>Tên cửa hàng: {item.nameStore}</Text>
            <Text>Địa chỉ: {item.address}</Text>
            <Text>SĐT: {item.phoneNumber}</Text>
            <Text>Ảnh: {item.logo}</Text>
            <Text>Trạng thái: {item.status}</Text>
          </View>}
          keyExtractor={(item) => item.id}
          />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
})