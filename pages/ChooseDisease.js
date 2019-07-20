import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ChooseDisease extends Component {
  static navigationOptions = {
    title: 'เลือกโรคร่วมที่ผู้ป่วยเป็น',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.btn}>
          <Button
            style={styles.btn}
            title="ความดันโลหิตสูง"
            onPress={() => navigate('BasicInfo',{next:'HightBloodPressure'})}
          />
        </View>
        <View style={styles.btn}>
          <Button title="เบาหวาน" onPress={() => navigate('BasicInfo',{next:'Diabetes'})} />
        </View>
        <View style={styles.btn}>
          <Button
            title="ความดันโลหิตสูง และ เบาหวาน"
            onPress={() => navigate('BasicInfo',{next:'Both'})}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="ไม่มีโรคร่วม"
            onPress={() => navigate('BasicInfo',{next:'GFR'})}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59F2F9',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  btn: {
    margin: 5,
    padding: 5,
  },
});
