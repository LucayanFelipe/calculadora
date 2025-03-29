import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, Image} from 'react-native';

const CalculatorApp = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSum = () => {
    // Fechar o teclado virtual
    Keyboard.dismiss();
    setError(''); // Limpar erros anteriores

    // Verificar se os campos estão preenchidos
    if (number1.trim() === '' || number2.trim() === '') {
      setError('Por favor, preencha ambos os campos');
      return;
    }

    // Converter para números e verificar se são válidos
    const num1 = parseFloat(number1.replace(',', '.'));
    const num2 = parseFloat(number2.replace(',', '.'));

    if (isNaN(num1) || isNaN(num2)) {
      setError('Por favor, insira números válidos');
      return;
    }

    // Calcular e exibir o resultado
    const sum = num1 + num2;
    setResult(`Resultado: ${sum}`);
  };

  const handleClear = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
    setError('');
  };

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('./image.png')} />
      <Text style={styles.title}>Calculadora de Soma</Text>
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={number1}
        onChangeText={(text) => {
          setNumber1(text);
          setError(''); // Limpar erro ao digitar
        }}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={number2}
        onChangeText={(text) => {
          setNumber2(text);
          setError(''); // Limpar erro ao digitar
        }}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.sumButton]} onPress={handleSum}>
          <Text style={styles.buttonText}>Somar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({

  image: { 
    border: "outset",
    borderRadius: "50%"
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'flex-start',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '48%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sumButton: {
    backgroundColor: '#00ff00',
  },
  clearButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#2196F3',
  },
});

export default CalculatorApp;