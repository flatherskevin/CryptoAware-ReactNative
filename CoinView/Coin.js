import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Dimensions from 'Dimensions';

export default class Coin extends React.Component{
  render(){
    return(
      <View style={[styles.container]} keyId={this.props.id}>
        <View style={[styles.col1]}>
          <View style={[styles.row1, styles.headerRow]}>
            <Text style={[styles.cell, styles.coin]}>{this.props.coin}</Text>
            <Text style={[styles.cell, styles.pctChange]}>{this.props.pctChangeSymbol}{this.props.pctChange}%</Text>
          </View>
          <View style={styles.row1}>
            <View style={[styles.col1]}>
              <Text style={[styles.cell, styles.descr]}>Wallet</Text>
              <Text style={[styles.cell, styles.data]}>{this.props.wallet}</Text>
            </View>
            <View style={[styles.col1]}>
              <Text style={[styles.cell, styles.descr]}>Profit</Text>
              <Text style={[styles.cell, styles.data]}>{this.props.profit}</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={[styles.col1]}>
              <Text style={[styles.cell, styles.descr]}>Price (&#579;)</Text>
              <Text style={[styles.cell, styles.data]}>{this.props.price}</Text>
            </View>
            <View style={[styles.col1]}>
              <Text style={[styles.cell, styles.descr]}>Last Market</Text>
              <Text style={[styles.cell, styles.data]}>{this.props.lastMarket}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.col2]}>
          <Button
            onPress = {()=>{return 1}}
            title = "Buy / Sell"
            style={[styles.button]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width,
    backgroundColor: '#FAFAFA',
    borderBottomColor: '#CCDDDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerRow: {
    flex: 1,
    alignItems: 'center',
  },
  col1: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  col2: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
  },
  coin: {
    color: '#A64AC9',
    fontSize: 28,
    textAlign: 'left',
    lineHeight: 28,
    textAlignVertical: 'center',
  },
  pctChange: {
    color: '#14A76C',
    //color: '#FF652F',
    fontSize: 24,
    textAlign: 'left',
    lineHeight: 28,
    textAlignVertical: 'center',
  },
  data: {
    color: '#86B3D1',
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 20,
    textAlignVertical: 'center',
  },
  descr: {
    color: '#5D5C61',
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 14,
    textAlignVertical: 'bottom',
  },
  button: {
    flex: 1,
  },
});
