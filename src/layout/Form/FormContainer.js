import React from 'react';
import {ScrollView, StyleSheet, Dimensions, Text} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

const FormContainer = props => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{fontSize: 30}}>{props.title}</Text>
            {props.children}
        </ScrollView>
    );
};

export default FormContainer;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
