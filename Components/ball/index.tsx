import { View} from "react-native";
import { styles } from "./styles";
import React from "react";

type Props ={
    posY: number,
    bg: string
}

export const Ball =({posY,bg}:Props)=>{

    return(
        <View style={[styles.container,{bottom:posY, backgroundColor:bg}]}>

        </View>
    )
}