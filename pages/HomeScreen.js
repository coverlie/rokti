import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, } from 'react-native-paper';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'KIDNEY CARE APPLICATION',
    headerStyle: {
      backgroundColor: 'green',
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View >
            <Text style={styles.topic}>แอพลิเคชั่น</Text>
            <Text style={styles.topic}>สำหรับการจัดการตนเอง</Text>
            <Text style={styles.topic}>ในผู้ป่วยโรคไตเรื้อรัง</Text>
          </View>

          <View style={styles.btn}>
            <Button
              icon="input"
              mode="outlined"
              onPress={() => navigate('BasicInfo')}
            >
              ค่าดัชนีมวลกาย
          </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon="input"
              mode="outlined"
              onPress={() => navigate('GFR')}
            >
              โรคไต
          </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon="input"
              mode="outlined"
              onPress={() => navigate('HightBloodPressure')}
            >
              ความดันโลหิตสูง
          </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon="input"
              mode="outlined"
              onPress={() => navigate('Diabetes')}
            >
              เบาหวาน
          </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon="book"
              mode="outlined"
              onPress={() => navigate('ChooseKnowledge')}
            >
              ความรู้เกี่ยวกับโรค
          </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon="alarm"
              mode="outlined"
              onPress={() => navigate('Swelling')}
            >
              ติดตามอาการบวม
          </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59F2F9',
  },
  topic: {
    color: 'blue',
    fontSize: 20,
    padding: 5,
    textAlign: 'center'
  },
  btn: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
});