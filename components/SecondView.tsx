import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {ISecondViewText} from '../interfaces/Interfaces'

interface IProps {
    text: ISecondViewText[]
}

const SecondView: React.FC<IProps> = ({text}) => {
    return (
        <ScrollView style={style.container}>
            {text.map((item, id) => (
                <View style={style.textContainer} key={id}>
                    <Text style={style.transparentText}>
                        {item.transparentText}
                    </Text>
                    <Text style={style.mainText}>
                        {item.mainTextFirst}
                    </Text>
                    <Text style={style.mainText}>
                        {item.mainTextSecond}
                    </Text>
                    <Text style={style.othersText}>
                        and others...
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {},
    textContainer: {
        width: '100%',
        marginBottom: 40
    },
    transparentText: {
        fontFamily: 'Roboto',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 34,
        fontWeight: '700'
    },
    mainText: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 24,
        fontWeight: '700'
    },
    othersText: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 24,
        fontWeight: '400'
    }
})

export default SecondView
