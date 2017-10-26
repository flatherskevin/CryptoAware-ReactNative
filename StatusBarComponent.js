import React from 'react';
import { View, StatusBar } from 'react-native';

export default class StatusBarComponent extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <View>
        <StatusBar
          hidden={true}
        />
      </View>
    );
  }
}
