import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default class HightBloodPressure extends Component {
  static navigationOptions = {
    title: 'เบาหวาน',
  };
  state = {
    FBS: '',
    HbA1C: '',
  };

  cal() {
    let FBS = parseInt(this.state.FBS)
    let HbA1C = parseInt(this.state.HbA1C)
    let rs = 'ไม่ปกติ'
    let rs2 = 'ไม่ปกติ'
    if (FBS > 79 && FBS < 131) {
      rs = 'ปกติ'
    }
    if (HbA1C <= 7) {
      rs2 = 'ปกติ'
    }
    Alert.alert("ระดับน้ำตาลในเลือด", "ระดับน้ำตาลในเลือด : " + rs + "\n\nระดับน้ำตาลสะสมในเลือด : " + rs2)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 30, marginTop: 20 }}>
            <Text style={styles.topic}>
              ระดับน้ำตาลในเลือดครั้งล่าสุด
            </Text>
            <View style={{ margin: 5 }}>
              <TextInput
                label="ระดับน้ำตาลในเลือด (FBS)"
                mode="outlined"
                onChangeText={FBS => this.setState({ FBS })}
                value={this.state.FBS}
              />
            </View>
            <View style={{ margin: 5 }}>
              <TextInput
                label="ระดับน้ำตาลสะสมในเลือด (HbA1C)"
                mode="outlined"
                onChangeText={HbA1C => this.setState({ HbA1C })}
                value={this.state.HbA1C}
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Button
              icon=""
              mode="outlined"
              onPress={() => this.cal()}
            >
              คำนวนระดับน้ำตาลในเลือด
            </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon=""
              mode="outlined"
              onPress={() => navigate('DiabetesKnowledge')}
            >
              ความรู้เกี่ยวกับโรคเบาหวาน
            </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon=""
              mode="outlined"
              onPress={() => navigate('HomeScreen')}
            >
              กลับสู่หน้าหลัก
            </Button>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 5,
    marginRight: 15,
    marginLeft: 15,
  },
  pickerView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 5,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: 100,
    flex: 1,
  },
  inputView: {
    backgroundColor: 'white',
  },
  topic: {
    color: 'blue',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  btn: {
    margin: 10,
  },
});
