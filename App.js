import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>




      {/* INICIO DA HEADER */}


      <View style = {styles.viewHeader}>
        <Feather name="menu" size={24} color="white" />
        <Text style = {styles.titulo}> Pelé Filmes </Text>
        <TouchableOpacity>

        </TouchableOpacity>

      </View>




       {/* INICIO DA BARRA DE PESQUISA */}

      <View style = {styles.input}>
      <TextInput
      placeholder='Digite o filme que deseja buscar'
      ></TextInput>
     
      </View>

     




       {/* INICIO DO BANNER */}

      






    </View>
  );
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#98fff6',
    alignItems: 'center',  },
    viewHeader: {

      //HEADER
      
      flexDirection : 'row',
      width:"90%",
      alignItems:'center',
      marginTop:10,
      justifyContent: 'space-between'
    
    
    
    },
    // SEARCH BAR
    input : {
      marginTop: 20,
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 8

    },
    titulo : {
      fontSize:25,
      color:'Red',
      fontWeight:'bold'
    }




});