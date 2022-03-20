import React from 'react';

import Task from '../Task/index';
import {archiveTask, pinTask} from "../lib/redux";
import {connect} from "react-redux";

export function PureTaskList({loading, tasks, onPinTask, onArchiveTask}){
    const events = {
        onPinTask,
        onArchiveTask,
    }

    if(loading) {
        return <div className={"list-items"}>loading</div>
    }

    if(tasks.length === 0) {
        return <div className={"list-items"}>empty</div>
    }

    return (
        <div className={"list-items"}>
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events}/>
            ))}
        </div>
    )
}

export default connect(
    ({ tasks }) => ({
        tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    }),
    dispatch => ({
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id)),
    })
)(PureTaskList);
