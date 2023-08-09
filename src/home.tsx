import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DocumentScanner from 'react-native-document-scanner-plugin'
import ImagePicker from 'react-native-image-crop-picker';


export default function HomeScreen() {
  // const [respone, setRespone] = useState(undefined)
  const navigation = useNavigation()

  navigation.setOptions({
    headerTitle: () => (
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>Scan</Text>
      </View>
    )
  })
  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument()

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      navigation.navigate("Filter", scannedImages[0])

    }
  }

  const fromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
      compressImageQuality: 1
    }).then(async (image) => {
      navigation.navigate("Filter", image.path)

    })
  }
  return (
    <View>
      <View style={{ flexDirection: 'row', alignContent: "center" }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          scanDocument()
          // loop()
        }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>From Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          fromGallery()
          // loop()
        }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>From Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
