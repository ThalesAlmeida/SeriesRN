import { createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';

export default createStackNavigator({
  'Login': {
      screen: LoginPage,
      navigationOptions:{
        title: 'App',
        flex: 1,

      }
  }
}, {
    navigationOptions: {
      title: "Séries",
      //Setinha
      headerTintColor: 'white',
      headerStyle: {
        //Cor de fundo
        backgroundColor: '#778899',
        //Largura da navigation
        borderBottomWidth: 1,
        //Cor da parte inferior
        borderBottomColor: 'white'
      },

      headeTitleStyle:{
        color:'white',
        fontSize: 30,
      }
    }
})