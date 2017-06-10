import React from 'react';
import { Button, View, Image } from 'react-native';
import { createTransition } from 'react-native-transition';

import colors from '../config/colors';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.switch = this.switch.bind(this);
    this.Transition = createTransition();
  }

  componentDidMount() {
    setTimeout(this.switch, 2000);
  }

  switch() {
    this.Transition.show(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Signup')}
          title="Sign Up"
        />
      </View>
    );
  }

  render() {
    return (
      <this.Transition>
        <View>
          <Image
            source={require('../assets/friendslogo.png')}
            style={{width: 400, height: 400}}
          />
        </View>
      </this.Transition>
    );
  }
}

export default Splash;
