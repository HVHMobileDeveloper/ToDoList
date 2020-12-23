import React, {FC, useState} from 'react';
import {Text, TextInput as RNTextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';

interface textInputProps {
    placeholder?: string,
    onPress: (value: string) => void,
}

const TextInput: FC<textInputProps> = ({onPress, placeholder = ''}) => {
    const [value, setValue] = useState<string>('');

    function handleOnPress() : void {
        onPress(value);
    }

    return (
        <View style={styles.parent}>
            <View style={styles.space} />
            <RNTextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
            />

            <TouchableOpacity onPress={handleOnPress} style={styles.button}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TextInput;
