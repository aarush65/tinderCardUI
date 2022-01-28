import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import AnimatedStack from './src/components/AnimatedStack';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedStack
        data={users}
        renderItem = {(({ item }) => <Card user = {item}/>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
