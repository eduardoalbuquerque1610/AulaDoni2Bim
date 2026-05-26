import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
;



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
<Text Style={styles.mainText}> Em Cartaz</Text>
<Image
style={styles.Image}
source= {require('./assets/cidade-de-deus-cartaz.jpg')}/>
<text Style={styles.tituloFilme}>Cidade de Deus </text>
      






    </View>
  );
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#5925FF',
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
      input:{
marginTop: 20,
width:"90%",
backgroundColor: 'white',
borderRadius: 5,
padding: 8,
flexDirection:'row',
justifyContent:'space-between',
alignItems: 'center'
      },

      inputSearch: {
        height: 40,
        padding:4,
        width: '100%',
      },

      //BANNER

      imageBanner:{
        width:'90%',
        height:200,
        
      }
      






    }




);