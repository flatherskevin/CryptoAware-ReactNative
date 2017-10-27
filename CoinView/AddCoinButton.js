import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Dimensions from 'Dimensions';

export default class AddCoinButton extends React.Component{

  openDialog(){
    return 0;
  }

  render(){
    return(
      <View style={[styles.container]}>
        <Button
          onPress = {()=>{return 1}}
          title = {"+"}
          style = {[styles.button]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
  }
});
