import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { socket } from '../core';

import { Dialogs as BaseDialogs } from '../components';

import { dialogsActions } from '../redux/actions';

const Dialogs = ({ fetchDialogs, currentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFilteredItems] = useState(Array.from(items));

    const onChangeInput = (value = '') => {
        setFilteredItems(items.filter(dialog => {
            return dialog.author.fullname.toLowerCase().indexOf(value.toLocaleLowerCase()) >= 0;
        }));
        setValue(value);
    };

    useEffect(() => {
        if (items.length) {
            onChangeInput();
        }
    }, [items]);

    useEffect(() => {

        fetchDialogs();

        socket.on('SERVER:DIALOG_CREATED', fetchDialogs);
        socket.on('SERVER:MESSAGES_CREATED', fetchDialogs);

        return () => {
            socket.removeListener("SERVER:DIALOG_CREATED", fetchDialogs);
            socket.removeListener("SERVER:MESSAGES_CREATED", fetchDialogs);
        }
    }, []);

    return (
        <BaseDialogs 
            items={ filtred } 
            userId={ userId }
            inputValue={ inputValue }
            onSearch={ onChangeInput }
            currentDialogId={ currentDialogId }
        />
    )
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);