import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {IFirstViewText} from '../interfaces/Interfaces'

interface IProps {
    text: IFirstViewText[]
}

const FirstView: React.FC<IProps> = ({text}) => {
    return (
        <ScrollView style={style.container}>
            {text.map((item, id) => (
                <View style={style.textContainer} key={id}>
                    <Text style={style.transparentText}>
                        {item.transparentText}
                    </Text>
                    <Text style={style.mainText}>
                        {item.mainText}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        height: '100%'
    },
    textContainer: {
        width: '100%',
        marginBottom: 70
    },
    transparentText: {
        fontFamily: 'Roboto',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 44,
        fontWeight: '700'
    },
    mainText: {
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: 44,
        fontWeight: '700'
    }

})

export default FirstView
