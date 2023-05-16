import React from 'react'
import { TouchableOpacity, Text, TextInput, View } from 'react-native'
import ResultImc from './ResultImc'
import styles from './styles'

export default function Form() {

  const [altura, setAltura] = React.useState(null)
  const [peso, setPeso] = React.useState(null)
  const [imc, setImc] = React.useState(null)
  const [messageImc, setMessageImc] = React.useState('Preencha o peso e a altura')
  const [imcFeedback, setImcFeedback] = React.useState(null)
  const [showFeedback, setShowFeedback] = React.useState(false)
  const [textButton, setTextButton] = React.useState('Calcular IMC')

  const calculateImc = () => {
    return setImc((peso / (altura * altura)).toFixed(2));
  }

  const validateFields = () => {
    if (altura !== null && peso !== null) {
      calculateImc()
      setMessageImc('Seu IMC é:')
      setTextButton('Calcular novamente')
      setShowFeedback(true)
      return
    }
    
    setMessageImc('Preencha o peso e a altura')
    setTextButton('Calcular IMC')
  }
  
  React.useEffect(() => {
    if (imc < 18.5) {
      setImcFeedback('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 25) {
      setImcFeedback('Peso normal')
    } else if (imc >= 25 && imc < 30) {
      setImcFeedback('Sobrepeso')
    } else if (imc >= 30 && imc < 35) {
      setImcFeedback('Obesidade grau 1')
    } else if (imc >= 35 && imc < 40) {
      setImcFeedback('Obesidade grau 2')
    } else if (imc >= 40) {
      setImcFeedback('Obesidade grau 3')
    }
  }, [imc])
  
  return (
    <View style={ styles.formContext}>
      <View style={ styles.form}>
        <Text
          style={ styles.formLabel }
        >Altura</Text>
        <TextInput
        style={ styles.formInput }
        placeholder='Ex: 1.75'
        keyboardType='numeric'
        onChangeText={setAltura}
        value={altura}
        />

        <Text style={ styles.formLabel }>Peso</Text>
        <TextInput
        style={ styles.formInput }
        placeholder='Ex: 70.5'
        keyboardType='numeric'
        onChangeText={setPeso}
        value={peso}
        />
        <TouchableOpacity
          style={ styles.formButton }
          onPress={() => validateFields()}
        >
          <Text
            style={ styles.formButtonText }
            >
              {textButton}
          </Text>
        </TouchableOpacity>
      </View>
      <ResultImc
        resultImc={imc}
        messageImc={messageImc}
        imcFeedback={imcFeedback}
        showFeedback={showFeedback}
      />
    </View>
  )
}

