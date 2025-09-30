import React from 'react';
import { View } from 'react-native';
import { ButtonOne } from './src/components/ButtonMain';
import { Colors } from './src/styles/colors';

export default function App() {
  return (
    <View>
      <ButtonOne 
        title="Start" 
        backgroundcolor={Colors.spotifyGreen} 
        textColor={Colors.white} 
        onPress={() => console.log("Button start press")} 
      />
    </View>
  );
}
