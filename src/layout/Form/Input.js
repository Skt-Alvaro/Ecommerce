import React from 'react';
import styled from 'styled-components/native';
import {useController} from 'react-hook-form';

const Input = props => {
    const {control, name} = props;
    const {field} = useController({
        control,
        defaultValue: '',
        name,
    });

    return (
        <TextInput
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            value={field.value}
            autoCorrect={props.autoCorrect}
            onChangeText={field.onChange}
            onFocus={props.onFocus}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            control={props.control}
        />
    );
};

export default Input;

const TextInput = styled.TextInput`
    width: 80%;
    height: 60px;
    background-color: white;
    margin: 10px;
    border-radius: 20px;
    padding: 10px;
    border-width: 2px;
    border-color: orange;
`;
