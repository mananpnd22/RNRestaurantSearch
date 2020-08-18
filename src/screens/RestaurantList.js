import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

import Config from 'react-native-config';

import ListCard from '../components/ListCard';

const BASE_URL = "https://uk.api.just-eat.io/restaurants/bypostcode/";

class RestaurantList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Restaurants',
    };
  };

  state = {
    restaurants: [],
    cuisines: [],
    query: '',
  };

  // async componentDidMount() {
  //   try {
  //     const {query} = "ec4m";
  //     const restaurants_response = await axios.get(`${BASE_URL}${query}`)
  //     console.log('err11: ', restaurants_response.data.Restaurants);
  //     this.setState({
  //       restaurants: restaurants_response.data.Restaurants,
  //     });
  //   } catch (err) {
  //     console.log('err1: ', err);
  //   }
  // }

  onChangeQuery = text => {
    this.setState({
      query: text,
    });
  };

  render() {
    const {restaurants, query} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeQuery}
              value={query}
              placeholder={'Search here by outcode'}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={
                () => this.filterList() }
              style={styles.buttonStyle}
              title="Search"
            />
          </View>
        </View>

        <FlatList
          data={restaurants}
          renderItem={this.renderRestaurants}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  }

  filterList = async () => {
    try {
      const {query} = this.state;
      const restaurants_response = await axios.get(`${BASE_URL}${query}`);
    
      this.setState({
        restaurants: restaurants_response.data.Restaurants,
        query: '',
      });
      
    } catch (err) {
      console.log('err2: ', err);
    }
  };

  renderRestaurants = ({item}) => {
    return <ListCard item={item} viewItem={this.viewItem} />;
  };

}


const styles = StyleSheet.create({
  headerButtonContainer: {
    marginRight: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  topWrapper: {
    flexDirection: 'row',
  },
  textInputWrapper: {
    flex: 4,
  },
  textInput: {
    height: 45,
    borderColor: '#5d5d5d',
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 1,
    paddingLeft:3,
    paddingTop: 4
  },
  buttonStyle: {
    color: "#62D2EB",
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  list: {
    marginTop: 20,
  },
});

export default RestaurantList;