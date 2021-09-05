import React from 'react';
import {StyleSheet, View} from 'react-native';
import PagerView from 'react-native-pager-view'

import FirstView from '../components/FirstView'
import SecondView from '../components/SecondView'
import ThirdView from '../components/ThirdView'

import {IFirstViewText, ISecondViewText, IThirdViewText} from '../interfaces/Interfaces'

const firstViewText: IFirstViewText[] = [
    {
        transparentText: 'You have',
        mainText: 'millions of questions...'
    },
    {
        transparentText: 'We have',
        mainText: 'answers in the stars!'
    },
]

const secondViewText: ISecondViewText[] = [
    {
        transparentText: 'Love',
        mainTextFirst: 'When will i meet my soulmate?',
        mainTextSecond: 'When will i get married?'
    },
    {
        transparentText: 'Self',
        mainTextFirst: 'What i am here to learn in life?',
        mainTextSecond: 'Am I in the right path?'
    },
    {
        transparentText: 'Daily life',
        mainTextFirst: 'What is going to happen next?',
        mainTextSecond: 'Any insight for today?'
    },
]

const thirdViewText: IThirdViewText[] = [
    {
        transparentText: 'How it works',
        mainText: ['Share birth details', 'Ask a question', 'An astrologer will make a prediction', 'Get your answer']
    }
]

const PagerViewContainer: React.FC = () => {
    return (
        <PagerView style={styles.container} initialPage={0}>
            <View key='1'>
                <FirstView text={firstViewText}/>
            </View>
            <View key='2'>
                <SecondView text={secondViewText}/>
            </View>
            <View key='3'>
                <ThirdView text={thirdViewText}/>
            </View>
        </PagerView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    }
});

export default PagerViewContainer
