import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import FormContainer from '../../layout/Form/FormContainer';
import Input from '../../layout/Form/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {countries} from '../../constants/data';

const Checkout = props => {
    const [orderItems, setOrderItems] = useState([]);
    const [country, setCountry] = useState();
    const {control, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    useEffect(() => {
        setOrderItems(props.cartItems);

        return () => {
            setOrderItems([]);
        };
    }, []);

    return (
        <View>
            <KeyboardAwareScrollView
                viewIsInsideTabBar={true}
                extraHeight={200}
                enableOnAndroid={true}>
                <FormContainer title="Checkout">
                    <Input placeholder="Name" name="Name" control={control} />
                    <Input placeholder="Name" name="d" control={control} />
                    <Input placeholder="Name" name="w" control={control} />

                    <Picker
                        mode="dropdown"
                        style={{width: 200, height: 40}}
                        selectedValue={country}
                        onValueChange={e => setCountry(e)}>
                        {countries.map(c => (
                            <Picker.Item
                                label={c.name}
                                value={c.name}
                                key={c.code}
                            />
                        ))}
                    </Picker>

                    <Button title="ddd" onPress={handleSubmit(onSubmit)} />
                </FormContainer>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default Checkout;
