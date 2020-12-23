import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import TextInput from './TextInput';

import {PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_TYPE} from '../../constant/variable';

import styles from './styles';

import {addTodo} from '../../redux/todo/action';

const AddTodoScreen: FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [priority, setPriority] = useState<number>(PRIORITY_HIGH);

    function navGoBack() {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    function handleAddTodoOnPress(value: string) {
        if (value) {
            dispatch(addTodo({
                title: value,
                priority,
                dueTime: new Date(),
            }));
            navGoBack();
        }
    }

    return(
        <View style={styles.container}>
            <View style={{padding: 12,}}>
                <Text
                    style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    }}
                >
                    Priority: {PRIORITY_TYPE[priority]}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 12,}} />
                    <TouchableOpacity style={{padding: 12, borderWidth: 1, borderColor: 'grey'}} onPress={() => setPriority(PRIORITY_HIGH)}>
                        <Text>{'HIGH'}</Text>
                    </TouchableOpacity>
                    <View style={{width: 12,}} />
                    <TouchableOpacity style={{padding: 12, borderWidth: 1, borderColor: 'grey'}} onPress={() => setPriority(PRIORITY_MEDIUM)}>
                        <Text>{'MEDIUM'}</Text>
                    </TouchableOpacity>
                    <View style={{width: 12,}} />
                    <TouchableOpacity style={{padding: 12, borderWidth: 1, borderColor: 'grey'}} onPress={() => setPriority(PRIORITY_LOW)}>
                        <Text>{'LOW'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput onPress={handleAddTodoOnPress}/>
        </View>
    );
}

export default AddTodoScreen
