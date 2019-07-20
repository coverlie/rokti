import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

export default class ChooseKnowledge extends Component {
  static navigationOptions = {
    title: 'ความรู้เกี่ยวกับโรค',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewImg}>
            <TouchableOpacity onPress={() => navigate('HbpKnowledge')}>
              <Image
                style={styles.img}
                source={require('../assets/hbp.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewImg}>
            <TouchableOpacity onPress={() => navigate('DiabetesKnowledge')}>
              <Image
                style={styles.img}
                source={require('../assets/dia.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewImg}>
            <TouchableOpacity onPress={() => navigate('KidneyKnowledge')}>
              <Image
                style={styles.img}
                source={require('../assets/ti.png')}
              />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    alignItems: 'center'
  },
  btn: {
    margin: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },
  viewImg: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
  }
});