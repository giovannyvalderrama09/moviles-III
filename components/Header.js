import { StyleSheet, Text, View, Image } from "react-native";
import {estilo} from "../assets/styles/myStyiles";

export default function Header(propts) {    
  return (
    <View style={estilo.viewHeader}>
     {/* < <Text>{propts.titulo}</Text>> */}

     <Image source={require(`../assets/images/${propts.src}`)}
     style={{width: '100%', height: '100%', resizeMode: 'stretch'}}  />

    </View>
  );
}


