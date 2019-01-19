import React, { Component } from 'react';
import fire from '../fire';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
    this._onChangeText = this._onChangeText.bind(this);
    this._updateProfile = this._updateProfile.bind(this);
  }

  _onChangeText = (input_field) => (text) => {
    this.setState({ [input_field]: text });
  }

  _updateProfile = () => {
    // const id = uuid.v1();
    // fire.database().ref('users/').push({
    //   id: id,
    //   email: this.state.email,
    //   password: this.state.password,
    //   name: this.state.name
    // }, () => {
    //   Alert.alert('Registered!');
    //   console.log("test")
    // })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Complete Your Profile</Text>
        <TextInput
          value={this.state.name}
          onChangeText={this._onChangeText('name')}
          placeholder="Enter your full name here"
        />
        <Button title="Update" onPress={this._updateProfile} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;