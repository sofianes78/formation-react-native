import { View, Text, StyleSheet } from "react-native";

/*export default function App() {
  return (
    <View
      style={{ 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black",

      }}
    >
      <Text>
        👾 <Text style={styles.react}>GAME OVER </Text> 👾</Text>

    </View>
  );
}
const myStyle = {
  
}
const styles = StyleSheet.create({
  react: {
    color: 'red',
  }

})*/

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.viewWhite}></View>
     <View style={styles.viewRed}>
      <Text>bonjour</Text>
      <Text>bonsoir</Text>

     </View>

    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'purple',
},
viewWhite:{
  flex:1,
  backgroundColor:'white'
},
viewRed:{
  flex:2,
  backgroundColor:'red',
  flexDirection:'row',
  gap: 19 
}

});