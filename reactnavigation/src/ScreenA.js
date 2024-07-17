import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';

export class ScreenA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>이것은 ScreenA라고 합니다.</Text>

        <Button
          title="B스크린으로 이동하기"
          onPress={() => {
            console.log('B스크린으로 이동하기');
          }}
        />
      </View>
    );
  }
}
