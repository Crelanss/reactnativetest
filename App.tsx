import React from 'react';
import {StyleSheet, View} from 'react-native';

import ViewsContainer from "./components/ViewsContainer";

const App = () => {
    return (
        <View style={styles.container}>
            <ViewsContainer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default App


