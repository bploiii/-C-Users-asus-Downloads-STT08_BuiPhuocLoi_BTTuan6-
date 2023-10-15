import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Change_Color from "../Form/Change_Color"
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <Image
            source={require("../assets/vs_blue.png")}
            style={[styles.Image, { width: 301, height: 361 }]}
          />
      <StatusBar style="auto" />
      <view style={styles.containerOneText}>
        <Text style={styles.OneText}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </view >
      <View style={styles.star}>
          <Image source={require("../assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("../assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("../assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("../assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <Image source={require("../assets/star.png")}style={[styles.Image, { width: 23, height: 25 }]}/>
          <text style={styles.text}>(Xem 828 đánh giá)</text>
      </View>
      <View style={{flexDirection: 'row',}}>
            <Text>1.790.000 đ</Text>
            <Text style={{marginLeft: '20px'}}>1.790.000 đ</Text>  
      </View>
               
      <view>
        <text style={{color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</text>
        <image source></image>
      </view>
    
      <View>
      <Pressable
         onPress={()=>{
          navigation.navigate('Change_Color')
         }}
          style={{
            width: 332,
            height: 34,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 400, marginTop: -5 }}>
            4 MÀU-CHỌN MÀU
          </Text>
          <Image
            source={require("../assets/Vector.png")}
            style={{ width: 12, height: 14, marginLeft: 280, marginTop: -35 }}
          />
        </Pressable>
      </View>
      <View>
      <Pressable
        
        style={{
          width: 332,
          height: 34,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "space-around",
          marginTop:'20px',
          backgroundColor: 'red'
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: 400, marginTop: -5,  color: 'blue'}}>
          Chọn Mua
        </Text>
        
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star:{
    flexDirection:'row',
    marginLeft: '280px'
    
  },
  text:{
    width: 400,
    fontSize: '15px',
    lineHeight: '17.58px',
    fontFamily: 'Roboto',
    marginLeft: '30px',
    marginTop: '5px'
    
  }, 
  button:{
    width: '331px',
    height: '54px',
    borderWidth: '20px',
    borderRadius:'1px',
    backgroundColor:'red',  
  },
  
});