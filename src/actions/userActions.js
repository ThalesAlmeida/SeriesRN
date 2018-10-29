import firebase from 'firebase';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = user => ({
    type: USER_LOGOUT,
    user
});

export const tryLogin = ({email, password}) => dispatch => {

    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action);
        })
        // .catch(error => {
        //     if (error.code === 'auth/user-not-found') {
        //         Alert.alert('Usuário não encontrado',
        //             'Ciar cadastro para esse usuário?',
        //             [{
        //                 text: 'Não',
        //                 onPress: () => console.log('Usuário não quer criar'),
        //                 style: 'cancel' //IOS

        //             }, {
        //                 text: 'Sim',
        //                 onPress: () => {
        //                     firebase
        //                         .auth()
        //                         .createUserWithEmailAndPassword(email, password)
        //                         .then(this.loginUserSuccess)
        //                         .catch(this.loginUserFailed)
        //                 }
        //             }],

        //             { cancelable: false }
        //         )
        //         return;
        //     } 
        //     loginUserFailed(error)
        // })
        // .then(() => this.setState({ isLoading: false }))
}
