import { useMemo } from "react";
import { Text, View, Dimensions } from "react-native";

export const ResponeRerender = ({ respone }: any) => {
  // console.log(scale);
  const {height, width} = Dimensions.get("window")
  return (
    <View>
      {respone.blocks.map((block: any) => {
        // console.log("block: ",block.lines[0].elements[0]);
        
        // block.lines[0].elements[0].map((line: any) => {
        //   return <Block block={line} scale={width / line.frame?.width}/>
        // }
        // )
        return <Block block={block} scale={width / block.frame?.width}/>
      })}
    </View>
  )
}

export const Block = ({block, scale}: any) => {
  console.log("block: 222",block);
  
  const rect = useMemo(() => {
    return {
      left: block.frame?.left,
      top: block.frame?.top,
      height: block.frame?.height * scale,
      width: block.frame?.width * scale
    }
  }, [block, scale])  
  return (
    <View
      style={{
        position: "absolute",
        ...rect
      }}

    >
      <Text>{block.text}</Text>
    </View>
  )
}