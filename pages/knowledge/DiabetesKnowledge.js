import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class DiabetesKnowledge extends Component {
  static navigationOptions = {
    title: 'ความรู้เกี่ยวกับโรคเบาหวาน',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.topic}>ความรู้ทั่วไปในการควบคุมระดับน้ำตาลในเลือด</Text>
          <Text style={styles.subTopic}>เป้าหมายของการควบคุมระดับน้ำตาลในเลือดมีดังนี้</Text>
          <Text style={styles.as}>1. ระดับน้ำตาลในเลือดก่อนรับประทานอาหาร ควรอยู่ที่ 80-130 mg/dL</Text>
          <Text style={styles.as}>2. ระดับน้ำตาลในเลือดสูงสุดหลังอาหาร ควรน้อยกว่า 180 mg/dL</Text>
          <Text style={styles.as}>3. ระดับน้ำตาลสะสมในเลือด ควรอยู่ประมาณร้อยละ 7.0 </Text>
          <Text style={styles.as}>4. ผู้ป่วยควรควบคุมอาหารที่มีน้ำตาลสูง และรับประทานอาหารให้ตรงเวลา</Text>
          <Text style={styles.as}>5. ผู้ป่วยควรรับประทานยาสม่ำเสมอ</Text>
          <Text style={styles.as}>6. ผู้ป่วยควรออกกำลังกาย มากกว่า 250 นาทีต่อสัปดาห์ หรือ 50 นาทีต่อครั้ง 5 ครั้งต่อสัปดาห์</Text>
          <Text style={styles.as}>7. งดสูบบุหรี่ ซึ่งจะทำให้มีความเสี่ยงต่อการเกิดโรคหัวใจและหลอดเลือด และงดดื่มสุรา</Text>

          <Text style={styles.topic}>การจัดการอาหารในผู้ป่วยเบาหวาน</Text>
          <Text style={styles.as}>1. ให้ผู้ป่วยสามารถใส่เมนูอาหารในแต่ละวันโดยฐานข้อมูลเป็นเมนูอาหารที่ระบุปริมาณน้ำตาลในอาหารไว้แล้ว </Text>
          <Text style={styles.as}>2. อาหารที่ผู้ป่วยรับประทานในแต่ละวันไม่ควรมีปริมาณน้ำตาลเกิน ดังนั้นเมื่อผู้ป่วยใส่เมนูอาหารมื้อแรกของแต่ละวันแล้วให้คำนวณปริมาณน้ำตาล 6 ช้อนชา หรือ 4 กรัมต่อวัน ที่เหลือแสดงเป็นเมนูอาหารที่สามารถรับประทานในมื้อถัดไปได้</Text>

          <Text style={styles.topic}>การจัดการเรื่องกายออกกำลังกาย</Text>
          <Text style={styles.topic}>ในผู้ป่วยเบาหวาน</Text>
          <Text style={styles.as}>1. สามารถจับชีพจรหรือนับก้าวในการเดินได้ เพื่อคำนวณจำนวนนาทีของการมีactivity ที่เพิ่มขึ้นของคนไข้ในแต่ละวันและประมวลผลเป็นรายสัปดาห์ สามารถแสดงระยะเวลาที่เหลือเพื่อให้มากกว่า 250 นาทีต่อสัปดาห์ </Text>
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
    margin: 5,
    padding: 10,
  },
  topic: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 8,
    color: 'blue'
  },
  as: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
  },
  subTopic: {
    fontSize: 17,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
