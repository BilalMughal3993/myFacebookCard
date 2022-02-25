import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import MyFacebookCard from './componets/MyFacebookCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={require("./assets/bg33.jpg")} style={{width:'100%',height:'100%'}}>
       <MyFacebookCard/>
     
      </ImageBackground> 
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
