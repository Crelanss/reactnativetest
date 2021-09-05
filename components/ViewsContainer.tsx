import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import SvgUri from 'react-native-svg-uri'

import PagerViewContainer from "./PagerView";

const logo = require('../assets/logo.svg')

const ViewsContainer: React.FC = () => {
    const [buttonText, setButtonText] = useState('Cool!')
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <View style={style.container}>
            <LinearGradient colors={['rgba(107, 115, 255, 1)', 'rgba(0, 13, 255, 1)']} style={style.linearGradient}>
                <View style={style.logo}>
                    <SvgUri
                        source={logo}
                    />
                    <Text style={style.logoText}>
                        Calm
                    </Text>
                </View>
                <View style={style.content}>
                    <PagerViewContainer currentPage={currentPage}/>
                </View>
                <View style={style.pagination}>
                </View>
                <View style={style.button}>
                    <Text style={style.buttonText}>
                        {buttonText}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {},
    linearGradient: {
        height: '100%',
        paddingTop: 54,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center'
    },
    logo: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoText: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 30,
        color: 'white',
        marginLeft: 10
    },
    content: {
        width: '100%',
        height: '65%',
        marginTop: 40,
        overflow: 'scroll',
    },
    pagination: {
        width: '100%',
        height: '3%',
        marginTop: 50
    },
    button: {
        height: '7%',
        width: '100%',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: 'rgba(5, 111, 221, 1)'
    }
})

export default ViewsContainer
