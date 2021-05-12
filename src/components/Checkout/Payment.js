import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Payment = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View>
            <Text style={{marginBottom: 30}}>Payment Screen</Text>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
};

export default Payment;
