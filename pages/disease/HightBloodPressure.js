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
    title: 'ความดันโลหิตสูง',
  };
  state = {
    up: '',
    down: '',
  };

  cal() {
    let up = parseInt(this.state.up)
    let down = parseInt(this.state.down)
    let rs = ''
    if (up >= 160 || down >= 100) {
      rs = 'อันตราย \n\nพบแพทย์ด่วน'
    }
    else if (up >= 140 || down >= 90) {
      rs = 'สูงมาก \n\nควรไปพบแพทย์'
    }
    else if (up >= 121 || down >= 81) {
      rs = 'ค่อนข้างสูง \n\nควรปรึกษาแพทย์'
    }
    else if (up <= 120 || down <= 80) {
      rs = 'ปกติ \n\nตรวจเช็คความดันโลหิตอย่างสม่ำเสมอ'
    }
    Alert.alert("ระดับความดันโลหิต", rs)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 30, marginTop: 20 }}>
            <Text style={styles.topic}>
              ระดับความดันโลหิตที่วัดได้ครั้งล่าสุด
            </Text>
            <View style={{ margin: 5 }}>
              <TextInput
                label="ความดันตัวบน"
                mode="outlined"
                onChangeText={up => this.setState({ up })}
                value={this.state.up}
              />
            </View>
            <View style={{ margin: 5 }}>
              <TextInput
                label="ความดันตัวล่าง"
                mode="outlined"
                onChangeText={down => this.setState({ down })}
                value={this.state.down}
              />
            </View>
          </View>

          <View style={styles.btn}>
            <Button
              icon=""
              mode="outlined"
              onPress={() => this.cal()}
            >
              คำนวนระดับความดันโลหิต
            </Button>
          </View>

          <View style={styles.btn}>
            <Button
              icon=""
              mode="outlined"
              onPress={() => navigate('HbpKnowledge')}
            >
              ความรู้เกี่ยวกับโรคความดันโลหิตสูง
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
    marginLeft: 20,
    marginRight: 20,
  },
});
