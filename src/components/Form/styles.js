import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
      width: '100%',
      padding: 10,
      height: '100%',
      bottom: 0,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
  },
  form: {
        width: '100%',
        height: 'auto',
        padding: 10,
        marginTop: 30,
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        height: 40,
        backgroundColor: '#f2f2f2',
        borderRadius: 50,
        margin: 12,
        paddingLeft: 20,
    },
    formButton: {
        width: '90%',
        height: 40,
        backgroundColor: '#ff0043',
        borderRadius: 50,
        margin: 12,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 30,
    },
    formButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default styles