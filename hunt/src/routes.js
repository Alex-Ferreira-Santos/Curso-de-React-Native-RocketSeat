import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Main from './pages/main'

const stack = createStackNavigator({
    Main
})

const Routes = createAppContainer(stack)

export default Routes