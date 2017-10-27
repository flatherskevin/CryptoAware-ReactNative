import Read from 'react';
import {
  Modal,
  View,
  ScrollView,
  Text,
  Button
} from 'react-native';

export default class SelectionModal extends React.Component{
  constructor(){
    super();
    state = {modalVisibile: false,}
  }

  setModalVisibile(visible){
    this.setState({modalVisibile: visible});
  }

  render(){
    return(
      
    );
  }
}
