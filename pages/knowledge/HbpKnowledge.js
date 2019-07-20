import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class HbpKnowledge extends Component {
  static navigationOptions = {
    title: 'ความรู้เกี่ยวกับโรคความดันสูง',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.topic}>ความรู้ทั่วไปในการควบคุมระดับความดันโลหิต</Text>
          <Text style={styles.as}>1. ผู้ป่วยโรคไตเรื้อรังที่มีโรคความดันโลหิตสูงร่วมด้วย ควรควบคุมระดับความดันโลหิตให้อยู่ในเกณฑ์ปกติ คือ ค่าความดันตัวบนไม่เกิน 130 mm.Hg ค่าความดันตัวล่างไม่เกิน 90 mm.Hg</Text>
          <Text style={styles.as}>2. ควรรับประทานอาหารที่มีส่วนประกอบของโซเดียมน้อยกว่า 2,000 mg ต่อวัน</Text>
          <Text style={styles.as}>3. ควรควบคุมน้ำหนักให้ดัชนีมวลกายอยู่ระหว่าง 20-25 kg/m2 </Text>
          <Text style={styles.as}>4. การออกกำลังกายควรออกกำลังกายสัปดาห์ละ 150-300 นาที หรือ 30-60 นาทีต่อครั้ง 5 ครั้งต่อสัปดาห์</Text>
          <Text style={styles.as}>5. งดสูบบุหรี่ และงดดื่มสุรา</Text>
          <Text style={styles.as}>6. ทำจิตใจให้สบาย ผ่อนคลายความเครียด</Text>

          <Text style={styles.topic}>การจัดการอาหารโซเดียมในผู้ป่วยความดันโลหิตสูง</Text>
          <Text style={styles.as}>1. ให้ผู้ป่วยสามารถใส่เมนูอาหารในแต่ละวันโดยฐานข้อมูลเป็นเมนูอาหารที่ระบุปริมาณโซเดียมในอาหารไว้แล้ว  </Text>
          <Text style={styles.as}>2. อาหารที่ผู้ป่วยรับประทานในแต่ละวันไม่ควรมีปริมาณโซเดียมเกิน 2,000 mg</Text>
          <Text style={styles.as}>3. ดังนั้นเมื่อผู้ป่วยใส่เมนูอาหารมื้อแรกของแต่ละวันแล้วให้คำนวณปริมาณโซเดียมที่เหลือแสดงเป็นเมนูอาหารที่สามารถรับประทานในมื้อถัดไปได้</Text>

          <Text style={styles.topic}>การจัดการเรื่องกายออกกำลังกายในผู้ป่วยความดันโลหิตสูง</Text>
          <Text style={styles.as}>1. สามารถจับชีพจรหรือนับก้าวในการเดินได้ เพื่อคำนวณจำนวนนาทีของการมีactivity ที่เพิ่มขึ้นของคนไข้ในแต่ละวันและประมวลผลเป็นรายสัปดาห์ สามารถแสดงระยะเวลาที่เหลือเพื่อให้ครบ 150-300 นาทีต่อสัปดาห์</Text>
          <Text style={styles.as}>2. สามารถคำนวณความหนักในการออกกำลังกายเป็นชีพจรจากสูตร อายุ-220*(60-80/100) ซึ่งเป็นการออกกำลังกายระดับปานกลาง</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 10
  },
  topic: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 8,
    color: 'blue',
  },
  as: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
  }

});
