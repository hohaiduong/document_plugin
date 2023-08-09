import React, { useCallback, useRef, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
import {
  Grayscale,
} from 'react-native-color-matrix-image-filters';

export default function FilterScreen({ route }: any) {
  const ref = useRef();
  const navigation = useNavigation()

  navigation.setOptions({
    headerTitle: () => (
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Filter</Text>
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 20 }} onPress={() => {
          ref.current.capture().then((uri: any) => {
            console.log("11223: ", uri);
            navigation.navigate("PDF", { uri: uri, path: route.params })
          })
        }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>NEXT</Text>
      </TouchableOpacity>
    )
  })
  return (
    <ScrollView>
      <ViewShot ref={ref}>
        <Grayscale>
          <Image
            width={Dimensions.get("window").width}
            height={Dimensions.get("window").height / 1.5}
            resizeMode='contain'
            source={{ uri: route.params }}
          />
        </Grayscale>
      </ViewShot>
    </ScrollView>
  );
}
