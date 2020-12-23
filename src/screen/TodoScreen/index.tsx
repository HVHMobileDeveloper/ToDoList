import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {PRIORITY_TYPE} from '../../constant/variable';

import styles from './styles';

import {TodoObjectType} from '../../redux/todo/reducer';

const TodoScreen: FC = () => {
    const navigation = useNavigation();
    const todos = useSelector((state: any) => state.todo.todos);

    function handleAddTodoOnPress() {
        navigation.navigate('AddTodoScreen');
    }

    function renderItem({item} : {item: TodoObjectType}) {
        const {title, priority, dueTime} = item;
        const unixTime = Date.parse(dueTime);
        return (
            <View style={{
                width: '100%',
                borderBottomWidth: 0.5,
                paddingHorizontal: 6,
                marginBottom: 6,
            }}>
                <Text>{title}</Text>
                <Text>{Date(unixTime)}</Text>
                <Text>{PRIORITY_TYPE[priority]}</Text>
            </View>
        );
    }

    return <View style={styles.container}>
        <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
            onPress={handleAddTodoOnPress}
            style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                position: 'absolute',
                bottom: 16,
                right: 16,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 1,
                backgroundColor: '#FFFFFF',
                borderColor: 'grey',
            }}
        >
            <Text>+</Text>
        </TouchableOpacity>
    </View>
}

export default TodoScreen
