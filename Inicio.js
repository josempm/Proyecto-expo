import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View,Image } from 'react-native';
import { List, ListItem, Text, Card, Button } from 'react-native-elements';
import firebase from '../firebasedb';

class Inicio extends Component {
  
  
  render() {
   
    return (
     
         <View>
     
      <Image source={{uri:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8mbz3r-0bcb5c81-64dc-4d58-b565-357ec4010449.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTQ5OTg3MWQtYjY5My00NWY2LWFlOTAtZjk0NTFmZmYwMGRhXC9kOG1iejNyLTBiY2I1YzgxLTY0ZGMtNGQ1OC1iNTY1LTM1N2VjNDAxMDQ0OS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.n6jeXw-PKLE_V10Xcy8T8qcy9yNFTqDqacgoiv8ywoY'}}
        style={{width: 400, height: 400}} 
       />
      <Button title="SIGUENTE"
              onPress={() => {
                this.props.navigation.navigate('Board');
              }} />
      </View>
    );
  }
}




export default Inicio;