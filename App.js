//Define Dependency
import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    //Define State
    this.state = {
      isEnabled: false,
    };
  }
  render() {
    return (
      // Switch Button

      <View style={styles.container}>
        <View style={{ alignItems: 'center', height:100 }}>
          
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => {
              this.setState({
                isEnabled: value,
              });
            }}
            value={this.state.isEnabled}
          />
          <View style={{ flex: 0.5 }}>
            {this.state.isEnabled ? (
              <Text> This will be hidden when we turn on the switch</Text>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
//Define Styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
