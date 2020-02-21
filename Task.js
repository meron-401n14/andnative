import React from 'react';
import { Text, View, Switch, Button } from 'react-native';

const textBox = {
    fontSize: 50,
};

const complete = {
    color: 'blue',
};

const incomplete = {
    color: 'red',
};

/**
 * 
 * @param {object} props pass task props (textstyle and background) style to each
 * style background and text style of each task elemnt based of progress 
 * @return based of state each elemnt 
 * delete and edit button 
 */

function Task(props) {
    let taskStyle = {
        backgroundColor: props.isComplete ? '#dbf4ff' : '#ffdbe0',
    };
    let taskTextStyle = {
        color: props.isComplete ? 'blue' : 'red',
        fontSize: 30,
    };

    return (
        <View style={taskStyle}>
            {props.name ? (
                <Text style={taskTextStyle}>{props.name}</Text>
            ) : null}
            {props.description ? (
                <Text style={taskTextStyle}>{props.description}</Text>
            ) : null}
            {props.date ? (
                <Text style={taskTextStyle}>
                    {new Date(props.date).toLocaleDateString()}
                </Text>
            ) : null}
            {props.priority ? (
                <Text style={taskTextStyle}>Priority: {props.priority}</Text>
            ) : null}

            <Text style={taskTextStyle}>Is Complete?</Text>
            <Switch
                value={props.isComplete}
                onChange={e => {
                    props.toggle(props.id, props.isComplete);
                }}
            />

            <Button
                title='Edit'
                onPress={e => {
                    props.edit(props);
                }}
            />
            <Button
                title='Delete'
                onPress={e => {
                    props.delete(props.id);
                }}
            />
        </View>
    );
}

export default Task;