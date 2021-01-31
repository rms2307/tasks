import React, { Component } from 'react'
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    TouchableOpacity,
    TextInput,
    TouchableOpacityBase
} from 'react-native'

import commonStyles from '../commonStyles'

const initialState = { desc: '' }

export default class AssTask extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background} ></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input}
                        placeholder='Nova Tarefa...'
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc })} />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background} ></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#FFF'
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 24,
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        margin: 20,
        marginLeft: 0,
        color: commonStyles.colors.today,
        fontSize: 20,
        backgroundColor: '#E7E7E7',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    }
})