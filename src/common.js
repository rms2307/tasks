import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' : 'http://192.168.0.29:3000'

function showError(err) {
    Alert.alert('Ocorreu um erro', `Erro: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }

