import React from 'react';
import { View, Text } from 'react-native';

/**
 * @function Task add 
 * supposed to be filled 
 */

function TaskAdd() {
    return (
        <View>
            <Text>In Task Add</Text>
        </View>
    );
}

export default TaskAdd;



































// import React, { useState } from 'react';
// import { dateFix } from './util';
// import { View, Text, Switch, TextInput, Button } from 'react-native';


// function TaskAdd(props) {
//     let [name, setName] = useState('');
//     let [description, setDescription] = useState('');
//     let [priority, setPriority] = useState('');
//     let [date, setDate] = useState('');
//     let [isComplete, setIsComplete] = useState(false);


    
//     let h1 = {
//         fontSize: 60,
//         textAlign: 'center',
//     };

//     let label = {
//         fontSize: 30,
//         color: '#555',
//     };

//     return (
//         <View>
//             <Input
//                 id='add-task-form'
//                 onSubmit={e => {
//                     e.preventDefault();
//                     setName('');
//                     setDescription('');
//                     setPriority('');
//                     setDate('');
//                     setIsComplete(false);
//                 }}
//             >
//                 <Text>Add Task</Text>
//                 <label>
//                     Name:{' '}
//                     <TextInput
//                         type='text'
//                         value={name}
//                         onChange={e => {
//                             setName(e.target.value);
//                         }}
//                     />
//                 </label>

//                 <label>
//                     Description:
//                     <TextInput
//                         type='text'
//                         value={description}
//                         onChange={e => {
//                             setDescription(e.target.value);
//                         }}
//                     />
//                 </label>

//                 <label>
//                     Priority:
//                     <TextInput
//                         type='number'
//                         value={priority}
//                         onChange={e => {
//                             setPriority(e.target.value);
//                         }}
//                     />
//                 </label>

//                 <label>
//                     Date:
//                     <TextInput
//                         type='date'
//                         value={date}
//                         onChange={e => {
//                             setDate(e.target.value);
//                         }}
//                     />
//                 </label>

//                 <label>
//                     Is Complete?
//                     <TextInput
//                         type='checkbox'
//                         checked={isComplete}
//                         onChange={e => {
//                             setIsComplete(e.target.value);
//                         }}
//                     />
//                 </label>

//                 <button
//                     onPress={() => {
//                         let data = {
//                             name,
//                             description,
//                             priority,
//                             isComplete,
//                             date,
//                         };
//                         props.add(data);
//                     }}
//                 >
//                     Save Changes
//                 </button>
//                 <button>Clear</button>
//             </Input>
//         </View>
//     );
// }

// export default TaskAdd;