import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class KidneyKnowledge extends Component {
  static navigationOptions = {
    title: 'ความรู้เกี่ยวกับโรคไต',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.topic}>ความรู้เกี่ยวกับการจัดการตนเองเกี่ยวกับโภชนาการในผู้ป่วยไตเรื้อรัง</Text>
          <Text style={styles.as}>1. ผู้ป่วยควรได้รับอาหารที่มีโปรตีนต่ำเพื่อชะลอความเสื่อมของไต แต่ควรได้รับอาหารโปรตีนที่มีคุณภาพสูง หรือโปรตีนที่มีกรดอะมิโนจำเป็นครบถ้วน ได้แก่โปรตีนจากเนื้อสัตว์ หรือไข่ขาว  </Text>
          <Text style={styles.as}>2. ผู้ป่วยควรมีระดับโปแตสเซียมในเลือดอยู่ในเกณฑ์ปกติ และแนะนำให้รับประทานอาหารที่มีโปแตสเซียมต่ำ (ตารางปริมาณอาหารที่มีโปแตสเซียม หรือวีดีโอการสอน) </Text>
          <View style={{ margin: 5 }}>
            <Button
              title="กลับสู่หน้าหลัก"
              onPress={() => navigate('HomeScreen')}
            />
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
    margin: 5,
    padding: 10,
  },
  topic: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 8,
    color: 'blue'
  },
  as: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,

  }
});
