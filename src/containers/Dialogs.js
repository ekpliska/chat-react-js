import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Dialogs as BaseDialogs } from '../components';

import { dialogsActions } from '../redux/actions';

const Dialogs = ({ ref, fetchDialogs, setCurrentDialogId, items, userId }) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFilteredItems] = useState(Array.from(items));

    const onChangeInput = (value = '') => {
        setFilteredItems(items.filter(dialog => {
            return dialog.user.fullname.toLowerCase().indexOf(value.toLocaleLowerCase()) >= 0;
        }));
        setValue(value);
    };

    useEffect(() => {
        if (!items.length) {
            fetchDialogs();
        } else {
            setFilteredItems(items);
        }
    }, [items]);

    return (
        <BaseDialogs 
            ref={ ref }
            items={ filtred } 
            userId={ userId }
            inputValue={ inputValue }
            onSearch={ onChangeInput }
            onSelectDialog={ setCurrentDialogId }
        />
    )
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);