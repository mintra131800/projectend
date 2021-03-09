import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Expense/Components/Homescreen';
import AddTransaction from '../../Expense/Components/AddTransaction';
import store from '../../Expense/store'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Expense tracker App',
            }}
          />
          <Stack.Screen
            name="Add"
            component={AddTransaction}
            options={{title: 'Add expense'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;