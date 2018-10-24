import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import firebase from 'firebase'

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
        }
    }

    componentDidMount(){
        const config = {
            apiKey: "AIzaSyAz33SrWntUud03MR-xnn73n6KkG17shMA",
            authDomain: "fidelidade-75813.firebaseapp.com",
            databaseURL: "https://fidelidade-75813.firebaseio.com",
            projectId: "fidelidade-75813",
            storageBucket: "fidelidade-75813.appspot.com",
            messagingSenderId: "453357548933"
          };
          firebase.initializeApp(config);

          firebase.auth().signInWithEmailAndPassword('thalesalves44@gmail.com', '123456')
          .then(user => {
              console.log('Usuário autenticado', user);
          })
          .catch(error =>{
              console.log('usuário não encontrado', error);
          })
    }

    onChangeHandler(field, value) {
            this.setState({
            [field]: value
        })
    }

    tryLogin(){
        console.log(this.state);
    }
    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput style={styles.input}
                        placeholder='user@mail.com'
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)} />
                </FormRow>
                <FormRow last>
                    <TextInput style={styles.input}
                        placeholder='******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)} />
                </FormRow>
                <Button title="Login"
                onPress={() => this.tryLogin()} />
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
    }
})