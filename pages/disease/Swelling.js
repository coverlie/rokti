import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Constants, SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

export default class Swelling extends React.Component {
  static navigationOptions = {
    title: 'ติดตามอาการบวม',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textEdit: '',
      items: [],
      id: null,
      modalEdit:false,
    };
    this.update = this.update.bind(this);
  }
  componentWillMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null,' +
        ' date int, value text, str_date text);'
      );
    });
    this.update()
  }

  add(text) {
    // is text empty?
    if (text === null || text === '') {
      return false;
    }
    let d = new Date();
    let dd = Math.floor((d.getTime() / 1000) / 86400)
    let strDate = d.toLocaleDateString()
    db.transaction(
      tx => {
        tx.executeSql('insert into items (value,date,str_date) values (?,?,?)', [text, dd, strDate]);
        tx.executeSql('select * from items', [],
          (_, { rows }) => console.log(JSON.stringify(rows))
        );
      },
      null,
    );
  }
  update() {
    db.transaction(tx => {
      tx.executeSql(
        `select * from items;`, [],
        (_, { rows: { _array } }) => this.setState({ items: _array })
      );
    });
  }
  edit(id) {
    var txt = this.state.textEdit;
    db.transaction(tx => {
      tx.executeSql(
        `update items set value=? where id=?;`, [txt, id]
      );
    },
      () => Alert.alert("Error")
    );
  }
  delete(id) {
    db.transaction(tx => {
      tx.executeSql(`delete from items where id = ?;`, [id]);
    },
      () => Alert.alert("Error")
    );
  }

  render() {
    const { items } = this.state;
    const { navigate } = this.props.navigation;
    var d = new Date();
    var dd = Math.floor((d.getTime() / 1000) / 86400)
    var ddd = d.toLocaleDateString()
    return (
      <View style={styles.container}>
        <View style={styles.groupRow}>
          <View style={{ flex: 8 }}>
            <TextInput
              onChangeText={text => this.setState({ text })}
              onSubmitEditing={() => {
                this.add(this.state.text)
                this.setState({ text: null })
                this.update()
              }}
              placeholder="  น้ำหนัก กิโลกรัม"
              style={styles.input}
              value={this.state.text}
            />
          </View>

          <View style={{ flex: 3, }}>
            <Button
              mode="contained"
              onPress={() => {
                this.add(this.state.text)
                this.setState({ text: null })
                this.update()
              }}
            >
              บันทึก
            </Button>
          </View>
        </View>

        <ScrollView style={{ backgroundColor: 'skyblue' }}>
          {items.map(({ id, value, str_date }) => (
            <TouchableOpacity
              key={id}
              onPress={() => this.setState({ textEdit: null, text: null })}
              style={styles.list}
            >
              <View style={styles.row}>
                <View style={{ flex: 4, backgroundColor: 'skyblue' }}>
                  <Text style={styles.paragraph}>{value} กิโลกรัม </Text>
                  <Text style={styles.paragraph}>วันที่ {str_date}</Text>
                </View>
                <View style={{ flex: 2 }}>
                  <Button
                    mode="text"
                    onPress={() => {
                      this.setState({ textEdit: value, id: id });
                      this.setState({ modalEdit: !this.state.modalEdit })
                    }}
                  >
                    แก้ไข
                  </Button>
                </View>
                <View style={{ flex: 1 }}>
                  <Button
                    mode="text"
                    onPress={() => {
                      this.delete(id)
                      this.update()
                    }}
                  >
                    ลบ
                  </Button>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal
          animationType="slide"
          visible={this.state.modalEdit}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <View style={{ margin: 25, fontSize: 14 }}>
            <TextInput
              onChangeText={textEdit => this.setState({ textEdit })}
              placeholder="Edit value"
              style={styles.input}
              value={this.state.textEdit}
            />
          </View>

          <View style={{ margin: 5 }}>
            <Button
              mode='outlined'
              onPress={() => {
                this.edit(this.state.id);
                this.setState({ textEdit: null });
                this.update();
                this.setState({ modalEdit: !this.state.modalEdit })
              }}
              color="#4630eb"
            >
              แก้ไขข้อมูล
            </Button>
          </View>

        </Modal>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10
  },
  paragraph: {
    fontSize: 20,
    paddingLeft: 20,
  },
  list: {
    borderColor: '#000',
    padding: 5,
    borderWidth: 1
  },
  input: {
    borderColor: '#4630eb',
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginRight: 5,
  },
  groupRow: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  }
});


