import  {React,useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const {width, height} = Dimensions.get('screen');
export default function App() {
 const [data,setdata]= useState([]);
  var url = 'https://api.tvmaze.com/shows';
  fetch(url)
    .then((response) => response.json())
    .then((resjson) => setdata(resjson));
  
  return( 
    <View style={styles.container}>
    <Text style={styles.titulo}>Series de television</Text>
    {
    data.map((show,i)=>(
      <>
      <Text key={i} style={styles.parrafo}>{show.name}</Text>
      <Text style={styles.texto}>{show.genres}</Text>
      <Image source={{uri: show.image.original}} style={styles.ima}/>
      </>
    ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  ima:{width:width/8,
      height:height/3,
      borderRadius:'25px',
      marginLeft:'60px',
      marginBottom:'10px',
      },
  titulo:{ 
    fontSize:'30px',
    textAlign:'center',
    marginTop:'20px',
    marginBottom:'50px',
    fontWeight:'bold',
  },
  parrafo:{
    fontSize:'20px',
    textAlign:'center',
    marginBottom:'10px',
  },
  texto:{
    fontSize:'15px',
    textAlign:'center',
    marginBottom:'10px',
  },
});
