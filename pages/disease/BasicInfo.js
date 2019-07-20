import React, { Component } from 'react';
import { Text, View, Picker, StyleSheet, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default class BasicInfo extends Component {
  static navigationOptions = {
    title: 'ค่าดัชนีมวลกาย',
  }

  state = {
    sex: 'm',
    age: '',
    weight: '',
    height: '',
    bmi: 0,
  };
  bmiCal() {
    let weight = parseInt(this.state.weight)
    let height = parseInt(this.state.height) / 100
    let bmi = weight / Math.pow(height, 2)
    bmi = bmi.toFixed(1)
    let rs = '';
    this.setState({ bmi: bmi })
    if (bmi < 18.5) {
      rs = 'น้ำหนักน้อยเกินไป'
    }
    else if (bmi >= 18.5 && bmi < 23) {
      rs = 'น้ำหนักปกติ'
    }
    else if (bmi >= 23 && bmi < 25) {
      rs = 'น้ำหนักเกิน'
    }
    else if (bmi >= 25 && bmi < 30) {
      rs = 'อ้วนระดับ 1'
    }
    else if (bmi >= 30) {
      rs = 'อ้วนระดับ 2'
    }
    Alert.alert("ค่าดัชนีมวลกาย", "BMI : " + bmi + "\n\n" + rs)

    // let next = this.props.navigation.getParam('next')
    // this.props.navigation.navigate(next,)
  }

  render() {
    const agePicker = [...Array(100).keys()];
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.topic}>ข้อมูลพื้นฐาน</Text>

        <View style={styles.pickerView}>
          <Picker
            prompt="เลือกเพศ"
            style={styles.picker}
            selectedValue={this.state.sex}
            onValueChange={itemValue => this.setState({ sex: itemValue })}>
            <Picker.Item label="ชาย" value="m" />
            <Picker.Item label="หญิง" value="f" />
          </Picker>
        </View>

        <View style={styles.inputView}>
          <View style={styles.pickerView}>
            <Picker
              prompt="เลือกอายุ"
              style={styles.picker}
              selectedValue={this.state.age}
              onValueChange={itemValue => this.setState({ age: itemValue })}>
              {agePicker.map(v => {
                v += 1;
                let lb = '  ' + v + '  ปี';
                return <Picker.Item label={lb} value={v.toString()} key={v} />;
              })}
            </Picker>
          </View>

          <TextInput
            label="ความสูง เซนติเมตร"
            mode="outlined"
            onChangeText={height => this.setState({ height })}
            value={this.state.height}
            style={styles.TextInput}
          />
          <TextInput
            label="น้ำหนัก กิโลกรัม"
            mode="outlined"
            onChangeText={weight => this.setState({ weight })}
            value={this.state.weight}
            style={styles.TextInput}
          />
          <View style={styles.btn}>
            <Button
            icon=""
            mode="outlined"
            onPress={this.bmiCal.bind(this)}
          >
            คำนวนค่าดัชนีมวลกาย
          </Button>
          </View>

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

      </View>
    )
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
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: 100,
    flex: 1,
  },
  inputView: {
    backgroundColor: 'white',
    marginBottom: 10
  },
  topic: {
    color: 'blue',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  btn: {
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  TextInput: {
    marginBottom: 10
  },
});