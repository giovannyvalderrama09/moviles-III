import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "./components/Header";
import { styles } from "./assets/styles/myStyiles";

export default function App() {
  //Hooks para estados con useState
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");

  let sumar = () => {
    setResultado(parseFloat(valor1) + parseFloat(valor2));
    // setResultado(parseFloat(valor1) - parseFloat(valor2));
    //  setResultado(parseFloat(valor1) * parseFloat(valor2));
    //   setResultado(parseFloat(valor1) / parseFloat(valor2));
    // console.log(resultado);
  };

  let calcular = (oper) => {
    let resul = 0;
    switch (oper) {
      case "+":
        resul = parseFloat(valor1) + parseFloat(valor2);
        break;
      case "-":
        resul = parseFloat(valor1) - parseFloat(valor2);
        break;
      case "*":
        resul = parseFloat(valor1) * parseFloat(valor2);
        break;
      case "/":
        resul = parseFloat(valor1) / parseFloat(valor2);
        break;
    }
    setResultado(resul);
  };

  let limpiar = () => {
    setValor1("");
    setValor2("");
    setResultado("");
  };

  return (
    <View style={[styles.container, styles.alignMain]}>
      <Header src="img3.png"></Header>
      <View style={[styles.main, styles.alignMain, { marginTop: 10 }]}>
        <Image
          source={{
            uri: "https://www.debt.com/wp-content/themes/Dcom/images/calculator-hero.png",
          }}
          style={{ height: 350, width: 300 }}
        />

        <Text>Valor 1:</Text>
        <TextInput
          style={styles.estiloInput}
          placeholder="ingrese valor uno"
          onChangeText={(valor1) => setValor1(valor1)}
          value={valor1}
        />
        <Text>Valor 2:</Text>
        <TextInput
          style={styles.estiloInput}
          placeholder="ingrese valor dos"
          onChangeText={(valor2) => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado:</Text>
        <Text>{resultado}</Text>
        <br></br>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={styles.estilosBoton}
            onPress={() => calcular("+")}
          >
            <Text>Sumar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.estilosBoton}
            onPress={() => calcular("-")}
          >
            <Text>Restar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.estilosBoton}
            onPress={() => calcular("*")}
          >
            <Text>Multiplicar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.estilosBoton}
            onPress={() => calcular("/")}
          >
            <Text>Dividir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.estilosBoton} onPress={limpiar}>
            <Text>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
