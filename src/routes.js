import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

export default createAppContainer(
    createStackNavigator({
        'Login': {
            screen: Login,
            navigationOptions: {
              header: null
            },
          },
          'Home': {
            screen: Home,
            navigationOptions: {
              header: null
            },
          },
    })
)