import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
	return <View />;
}

HomeScreen.navigationOptions = {
	// title: 'null',
	Header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#fff'
	}
});
