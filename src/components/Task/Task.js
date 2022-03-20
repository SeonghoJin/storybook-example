import * as React from 'react';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className="title">
            <input
                type="text"
                value={title}
                readOnly={true}
                placeholder="Input title"
                style={{ background: 'red' }}
            />
        </div>
    );
}
