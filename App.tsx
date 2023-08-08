/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';

import DocumentScanner from 'react-native-document-scanner-plugin'
import ImagePicker from 'react-native-image-crop-picker';
import TextRecognition, { TextBlock } from '@react-native-ml-kit/text-recognition';
import { ResponeRerender } from './src/respon';
// import Jimp from 'jimp/browser/lib/jimp.js'
// var Jimp = require("jimp")
function App(): JSX.Element {
  const [respone, setRespone] = useState(undefined)
  // var Jimp = require("jimp")
  const scanDocument = async () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    //   freeStyleCropEnabled: true
    // }).then(async(image) => {
    //   // loop(image.path)
    //   getColors(image.path, {
    //     fallback: '#228B22',
    //     cache: true,
    //     key: image.path,
    //   }).then((color: any) => {
    //     console.log(color);

    //   })
    // });

  }
  const loop = async (image: any) => {
    // const images = require('./images/menu.jpg')
    const result = await TextRecognition.recognize(`${image}`)
    if (result.blocks.length > 0) {
      setRespone(result)
    }

  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => {
        scanDocument()
        // loop()
      }}>
        <Text>Open</Text>
      </TouchableOpacity>
      {!!respone && (
        <ResponeRerender respone={respone} />
      )}
    </SafeAreaView>
  );
}

export default App;
