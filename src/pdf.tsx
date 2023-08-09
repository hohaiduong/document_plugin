import TextRecognition from '@react-native-ml-kit/text-recognition';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { ResponeRerender } from './respon';

export default function PDFScreen({navigation, route}: any) {
  const [respone, setRespone] = useState(undefined)
  console.log(route.params.uri);
  
  useEffect(() => {
    loop()
  },[route])
  
  const loop = async () => {
    const result = await TextRecognition.recognize(`${route.params.uri}`)
    if (result.blocks.length > 0) {
      setRespone(result)
    }
  }
  return (
    <ScrollView style={{backgroundColor: "white", height: "100%"}}>
      {!!respone && (
        <ResponeRerender respone={respone} />
      )}
    </ScrollView>
  );
}
