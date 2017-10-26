import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import Coin from './Coin'

export default class CoinContainer extends React.Component{
  constructor(){
    super();
    this.pctChange = 24;
    this.pctChangeCalc();
    this.powow = [];

    //TODO: use live here instead of a dummy loop
    for(var i = 0; i < 7; i++){
      this.powow.push(
        <Coin
          key = {i}
          coin = {"COIN " + i}
          pctChangeSymbol = {this.pctChangeSymbol}
          pctChange = {this.pctChange}
          wallet = {100}
          price = {.0021}
          lastMarket = "YoBit"
          profit = {"+" + .01 + "\u0243"}
        />
      );
    }

  }

  pctChangeCalc(){
    this.pctChangeSymbol = (this.pctChange >= 0) ? "\u25B3" : "\u25BD";
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        {this.powow}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
