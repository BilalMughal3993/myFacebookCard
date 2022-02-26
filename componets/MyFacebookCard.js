import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking ,TouchableOpacity} from "react-native";

const MyFacebookCard = () => {
  return (
    <View style={styles.container2}>
        <View style={{backgroundColor:"black",
      marginBottom: 0,
      paddingHorizontal:29,
      marginBottom:5,
      borderWidth:3,
      borderTopLeftRadius:40,borderTopRightRadius:40

      }}>
      <Text style={styles.header}> My Profile Card </Text>
      </View>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={require("../assets/bilal.jpg")}
        />

        <View style={styles.poster__info}>
          <Text style={styles.poster__title}> Intoduction </Text>
          <Text style={styles.poster__text}>
            My name is Muhammad Bilal , I am React-native developer and also have experience in ReactJs,JS,PHP,C++ etc. You can check my Facebook and Github profile.
          </Text>
        </View>
        <TouchableOpacity 
        
          title="Go to my Github Profile"
          onPress={() => Linking.openURL("https://www.facebook.com/bilal.mughal.2000")}>
        <View style={{marginBottom:10,borderWidth:2,borderRadius:40,paddingVertical:5,paddingHorizontal:10,backgroundColor:"black"}}>
            <Text style={{fontSize:17,color:"white",textAlign:"center"}}>Go to my Facebook Profile</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity 
        
          title="Go to my Github Profile"
          onPress={() => Linking.openURL("https://github.com/BilalMughal3993")}>
        <View style={{marginBottom:10,borderWidth:2,borderRadius:40,paddingVertical:5,paddingHorizontal:20,backgroundColor:"black"}}>
            <Text style={{fontSize:17,color:"white",textAlign:"center"}}>Go to my Github Profile</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex:1,
    paddingVertical:50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
      
       color:'white',
       fontWeight:"bold",
       fontSize: 30,
       
  },
  poster: {
      borderWidth:3,
      borderRadius:40,
      borderTopLeftRadius:0,
      borderTopRightRadius:0,
    width: 300,
    alignItems: "center",
  },
  poster__info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster__title: {
      color:"#dbe89b",
    fontSize: 20,
    marginBottom: 10,
  },
  poster__text: {
    color: "white",
    textAlign:"center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
  
    borderWidth: 0,
    borderRadius: 40,
    
    
    
   
  },
});

export default MyFacebookCard; 
 
