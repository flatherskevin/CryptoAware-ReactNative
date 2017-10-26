import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinContainer from './CoinView/CoinContainer';
import StatusBarComponent from './StatusBarComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarComponent/>
        <CoinContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EAEAEA',
    alignItems: 'flex-start',
  },
});
