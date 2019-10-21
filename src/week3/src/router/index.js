

import ListStatus from '../screen/ListStatus';
import Profiles from '../screen/Profiles';
import Game3 from '../screen/Game3';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



const AppStack = createStackNavigator({
    sc_Game3: {
        screen: Game3,
        navigationOptions: {
            header: null
        }
    },
    //----
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