import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

import {IThirdViewText} from "../interfaces/Interfaces";

interface IProps {
    text: IThirdViewText[]
}

const ThirdView: React.FC<IProps> = ({text}) => {
    return (
        <ScrollView style={style.container}>
            {text.map((item, id) => (
                <View style={style.textContainer} key={id}>
                    <Text style={style.transparentText}>
                        {item.transparentText}
                    </Text>
                    {item.mainText.map((element, id) => (
                        <Text style={style.mainText} key={id}>
                            {element}
                        </Text>
                    ))}
                </View>
            ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {},
    textContainer: {
        width: '100%',
    },
    transparentText: {
        fontFamily: 'Roboto',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 44,
        fontWeight: '700',
        marginBottom: 30
    },
    mainText: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 44,
        fontWeight: '700',
        marginBottom: 30
    }
})

export default ThirdView
