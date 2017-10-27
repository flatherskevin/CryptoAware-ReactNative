import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinContainer from './CoinView/CoinContainer';
import AddCoinButton from './CoinView/AddCoinButton';
import StatusBarComponent from './StatusBarComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarComponent/>
        <CoinContainer style={[styles.CoinContainer]}/>
        <AddCoinButton style={[styles.AddCoinButton]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EAEAEA',
  },
});
