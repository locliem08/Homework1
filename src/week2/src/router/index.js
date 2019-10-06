

import ListStatus from '../screen/ListStatus';
import Profiles from '../screen/Profiles';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



const AppStack = createStackNavigator({
    sc_List: {
        screen: ListStatus,
        navigationOptions: {
            header: null
        }
    },
    sc_Profiles: {
        screen: Profiles,
        navigationOptions: {
            header: null
        }
    }
})


export const AppContainer = createAppContainer(AppStack);