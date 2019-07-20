import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default class GFR extends Component {
    static navigationOptions = {
        title: 'ระยะของโรคไตเรื้อรัง',
    };
    state = {
        gfr: '',
    };
    cal() {
        let gfr = parseInt(this.state.gfr)
        let rs = ''
        if (gfr > 90) {
            rs = 'ระยะที่ 1   ปกติ หรือ สูง'
        }
        else if (gfr > 59) {
            rs = 'ระยะที่ 2   ลดลงเล็กน้อย'
        }
        else if (gfr > 44) {
            rs = 'ระยะที่ 3A   ลดลงเล็กน้อย ถึง ปานกลาง'
        }
        else if (gfr > 29) {
            rs = 'ระยะที่ 3B   ลดลงปานกลาง ถึง มาก'
        }
        else if (gfr >= 15) {
            rs = 'ระยะที่ 4    ลดลงมาก'
        }
        else {
            rs = 'ระยะที่ 5    ไตวายระยะสุดท้าย'
        }
        Alert.alert("ระยะของโรคไตเรื้อรัง", " " + rs)

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 30, marginTop: 30 }}>
                    <Text style={styles.topic}>ระยะของโรคไตเรื้อรัง จากค่า GFR</Text>
                    <TextInput
                        label="ค่า GFR"
                        mode="outlined"
                        onChangeText={gfr => this.setState({ gfr })}
                        value={this.state.gfr}
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        icon=""
                        mode="outlined"
                        onPress={() => this.cal()}
                    >
                        คำนวนค่า GFR
                    </Button>
                </View>

                <View style={styles.btn}>
                    <Button
                        icon=""
                        mode="outlined"
                        onPress={() => navigate('KidneyKnowledge')}
                    >
                        ความรู้เกี่ยวกับโรคไต
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
        marginLeft: 30,
        marginRight: 30,
    },
});
