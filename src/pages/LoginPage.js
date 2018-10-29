import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';
import firebase from 'firebase'

import { connect } from 'react-redux';
import { tryLogin } from '../actions';

import FormRow from '../components/FormRow';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message: '',
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAz33SrWntUud03MR-xnn73n6KkG17shMA",
            authDomain: "fidelidade-75813.firebaseapp.com",
            databaseURL: "https://fidelidade-75813.firebaseio.com",
            projectId: "fidelidade-75813",
            storageBucket: "fidelidade-75813.appspot.com",
            messagingSenderId: "453357548933"
        };
        firebase.initializeApp(config);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { email, password } = this.state;

        this.props.tryLogin({ email, password })
            .then(() => {
                this.setState({message: "Sucesso"});
                this.props.navigation.replace('Main');
            })
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
                break;
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />;
        return (
            <Button title="Login"
                onPress={() => this.tryLogin()} />
        )
    }



    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput style={styles.input}
                        placeholder='user@mail.com'
                        value={this.state.email}
                        onChangeText={value => this.onChangeHandler('email', value)} />
                </FormRow>
                <FormRow last>
                    <TextInput style={styles.input}
                        placeholder='******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)} />
                </FormRow>
                {this.renderButton()}
                {this.renderMessage()}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    },
});

export default connect(null, { tryLogin })(LoginPage)