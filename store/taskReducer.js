/**
 * a reducer fetch data from the API 'https://to-donew.herokuapp.com'
 * and access all end points and dispatch actions 
 */


import { api } from '../util';

/**
 * initialize state variables  of task 
 * name, id, description, priority, isCompleted 
 */

const initialState = {
    tasks: [
        {
            _id: 0,
            name: 'test',
            description: 'test description',
            priority: 2,
            isCompleted: true,
        },
    ],
};


/**
 * @function getAllTask which fetch end point all-tasks
 * pass dispatch and getState functions Asynchronously 
 * use method GET and request with header 
 * @ return dispatch  GET-ALL-TASKS action and return 200 and json data for success 
 * dispatch API-FAIL action  otherwise 
 */

const getAllTasks = () => {
    return async (dispatch, getState) => {
        let req = api + '/all-tasks';
        let state = getState();

        let response = await fetch(req, {
            method: 'GET',
            headers: {
                Authorization: state.auth.token,
            },
        });

        if (response.status === 200) {
            let json = await response.json();
            dispatch({ type: 'GET_ALL_TASKS', data: json });
        } else dispatch({ type: 'API_FAIL', data: response });
    };
};


/**
 * @function toggle function with id and current state param 
 * @param {object} id 
 * @param {object} currentState 
 * @return dispatch action sucess and fail 
 * 200 success 
 * /PATCH  by id  to end point /mark-done 
 * based of authonticated user 
 */

const toggleTaskComplete = (id, currentState) => {
    return async (dispatch, getState) => {
        let req = api;
        let state = getState();

        if (currentState) req += '/mark-undone';
        else req += '/mark-done';

        req += '/' + id;

        let response = await fetch(req, {
            method: 'PATCH',
            headers: {
                Authorization: state.auth.token,
            },
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};

/**
 * /PATCH method update or edit task 
 * @param {object} task state and dispatch action 
 * getstate of endpoint update-task by passing header of authorized user and 
 * body of the object name, description ....
 * dispatch action API-FAIL if it fails and dispatch getAllTasks action when success 
 */

const editTask = task => {
    return async (dispatch, getState) => {
        let req = api + '/update-task/' + task.id;
        let state = getState();

        let response = await fetch(req, {
            method: 'PATCH',
            headers: {
                Authorization: state.auth.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: task.name,
                description: task.description,
                dateDue: task.date,
                isCompleted: task.isComplete,
                priority: task.priority,
            }),
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};

/**
 * /POST method request based of headers auth and body 
 * update state when success 
 * @param {object} task  getState and dispatch action 
 * dispatch action getAllTasks for success and 
 * dispatch API-FAIL 
 */

const addTask = task => {
    return async (dispatch, getState) => {
        let req = api + '/add-task';
        let state = getState();

        if (!task.name) {
            dispatch({ type: 'API_FAIL', data: 'Missing required Fields' });
            return;
        }

        let response = await fetch(req, {
            method: 'POST',
            headers: {
                Authorization: state.auth.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: task.name,
                description: task.description,
                dateDue: task.date,
                isCompleted: task.isComplete,
                priority: task.priority,
            }),
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};


/**
 * /DELETE method 
 * @param {object} taskID 
 * dispatch actions API-FAIL and getAllTasks based of success and fail 
 * request by passing headers auth 
 * fetch task by ID and delete 
 */

const deleteTask = taskID => {
    return async (dispatch, getState) => {
        let req = api + '/delete-task/' + taskID;
        let state = getState();

        let response = await fetch(req, {
            method: 'DELETE',
            headers: {
                Authorization: state.auth.token,
            },
        });

        if (response.status === 200) dispatch(getAllTasks());
        else dispatch({ type: 'API_FAIL', data: response });
    };
};

/**
 *@function  taskReducer initializeState state variables and pass actions 
 * @param {object} state 
 * @param {object} action 
 */

const taskReducer = (state = initialState, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'GET_ALL_TASKS':
            newState.tasks = action.data.tasks;
            break;
        case 'API_FAIL':
            console.error('API Failed with response: ', action.data);
            break;
        case 'LOGOUT':
            newState.tasks = [];
            break;
        default:
            break;
    }

    return newState;
};

export { getAllTasks, toggleTaskComplete, editTask, addTask, deleteTask };
export default taskReducer;