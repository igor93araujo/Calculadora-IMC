import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default function ResultImc(props) {
  const { resultImc, messageImc, imcFeedback, showFeedback} = props

  return (
    <View style={ styles.resultImc}>
      <Text
        style={ styles.information }
      >
        {messageImc}
      </Text>

      <Text
        style={ styles.resultImcValue }
      >
        {resultImc}
      </Text>
      {
        showFeedback &&
        <Text
          style={ styles.feedback }
        >
          {imcFeedback}
        </Text>
      }
    </View>
  )
}
