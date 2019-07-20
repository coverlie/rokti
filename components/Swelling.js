import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  Button
} from 'react-native';
import { Constants, SQLite } from 'expo';

const db = SQLite.openDatabase('db.db');

export default class App extends React.Component {
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
    };
    this.update = this.update.bind(this);
  }
  componentWillMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null,' +
        ' done int, value text);'
      );
    });
    this.update()
  }

  add(text) {
    // is text empty?
    if (text === null || text === '') {
      return false;
    }
    db.transaction(
      tx => {
        tx.executeSql('insert into items (value) values (?)', [text]);
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

          <View style={{ flex: 2, }}>
            <Button
              title='บันทึก'
              onPress={() => {
                this.add(this.state.text)
                this.setState({ text: null })
                this.update()
              }}
              color='#4630eb'
            />
          </View>
        </View>

        <ScrollView style={{ backgroundColor: 'skyblue' }}>
          {items.map(({ id, value }) => (
            <TouchableOpacity
              key={id}
              onPress={() => this.setState({ textEdit: null, text: null })}
              style={styles.list}
            >
              <View style={styles.row}>
                <View style={{ flex: 4, backgroundColor: 'skyblue' }}>
                  <Text style={styles.paragraph}>{value} กิโลกรัม     dd/mm/yy</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                  <Button
                    title='ลบ'
                    onPress={() => {
                      this.delete(id)
                      this.update()
                    }}
                    color='red'
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

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


