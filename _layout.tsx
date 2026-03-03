import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    const [resultado, setResultado] = useState(0);
    const [recebedor, setRecebedor] = useState(0);
    const [somador, setSomador] = useState(0);

    function variavel(numero: any){
      let resultado = `${recebedor}${numero}`
      setResultado
    }

    function soma(soma2: any){
        setSomador()
    }

  return (
      <SafeAreaView style={styles.content}>
        <View style={styles.line}>
            <Text onPress={() => variavel(7)}>7</Text>  <Text onPress={() => variavel(8)}>8</Text>  <Text onPress={() => variavel(9)}>9</Text>  <Text onPress={() => soma()}>+</Text>
        </View>
        <View style={styles.line}>
            <Text onPress={() => variavel(4)}>4</Text>  <Text onPress={() => variavel(5)}>5</Text>  <Text onPress={() => variavel(6)}>6</Text>  <Text>-</Text>
        </View>
        <View style={styles.line}>
            <Text onPress={() => variavel(1)}>1</Text>  <Text onPress={() => variavel(2)}>2</Text>  <Text onPress={() => variavel(3)}>3</Text>  <Text>÷</Text>
        </View>
        <View style={styles.line}>
            <Text>C</Text> <Text onPress={() => variavel(0)}>0</Text>   <Text>√</Text>  <Text>X</Text>
        </View>
        <View style={styles.line}>
            <Text>{resultado}</Text>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    display: 'flex',
    rowGap: 20
  },

  line: {
    flexDirection: 'row',
    gap: 40
  },

  }
)