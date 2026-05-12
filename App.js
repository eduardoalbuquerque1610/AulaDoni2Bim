import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Feather from  '@expo/vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
      
   
      <View style={styles.viewHeader}>

      <Feather name="menu" size={24} color="black" />
      
      <Text>Pelé filmes!</Text> 

      <TouchableOpacity>

      </TouchableOpacity>

      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
 
  },
  viewHeader:{
    flexDirection:'row',
    width: "90%",
    alignItems: 'center',
    marginTop: 10,
    justifyContent:'space-between',
  },

  Textheader:{

    fontSize:25,
    color:'white',
    fontWeight:'bold'
  },

 
});
