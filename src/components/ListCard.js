import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';

const ListCard = ({item, viewItem}) => {

  var itemList = [];

  for (var i = 0; i < item.Cuisines.length; i++) { 
    itemList.push(<Text style={styles.subtitle}>{item.Cuisines[i].Name}</Text>);
  }
  
  return (
    // <TouchableOpacity
    //   onPress={() => {
    //     viewItem(item);
    //   }}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{uri: `${item.LogoUrl}` }}
          />
        </View>
        <View>
          <Text style={styles.title}>{item.Name}</Text>
          <Text style={styles.subtitle}>{item.RatingStars}</Text>

          {itemList}
          
        </View>
      </View>
    // </TouchableOpacity>
  );
  //
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  imageWrapper: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#303540',
  },
});

export default ListCard;
