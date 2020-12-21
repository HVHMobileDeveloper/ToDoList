import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import TextInput from './TextInput';

import styles from './styles';

const TodoScreen: FC = () => {
    const todos = useSelector((state: any) => state.todo.todos);

    function handleAddTodoOnPress(value: string) {
        alert(value)
    }

    return <View style={styles.container}>
        <TextInput onPress={handleAddTodoOnPress}/>
    </View>
}

export default TodoScreen
