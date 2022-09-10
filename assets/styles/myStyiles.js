import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    flex: 5,
    backgroundColor: "lightseagreen",
    width: "80%",
  },
  alignMain: {
    justifyContent: "center",
    alignItems: "center",
  },
  estiloInput: {
    borderWidth: 1,
    borderStyle: "solid",
    padding: 5,
    borderRadius: 7,
    marginTop: 7,
    marginBottom: 50,
  },
  estilosBoton: {
    backgroundColor: "#90C8AC",
    borderRadius: 10,
    padding: 5,
    margin: 5,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
});


const estilo = StyleSheet.create({
    viewHeader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        width: "80%",
    },
});

export  {styles,estilo}