import React, { Component } from 'react';
import { Text, View, Button, Picker, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class BasicInfo extends Component {
  state = {
    sex: '',
    age: '',
    weight: '55',
    height: '177',
    bmi: 0,
  };
  bmiCal() {
    let weight = parseInt(this.state.weight)
    let height = parseInt(this.state.height) / 100
    let bmi = Math.round(weight / Math.pow(height, 2))
    this.setState({ bmi: bmi })
    Alert.alert("ค่าดัชนีมวลกาย", "ค่าดัชนีมวลกาย : " + bmi + this.props.nextPage)
    
  }

  render() {
    const agePicker = [...Array(100).keys()];

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
                return <Picker.Item label={lb} value={v.toString()} key={v}/>;
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
              title="OK" c
              olor="#841584"
              onPress={this.bmiCal.bind(this)}
            />
          </View>
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
    margin: 10,
  },
  TextInput: {
    marginBottom: 10
  },
});