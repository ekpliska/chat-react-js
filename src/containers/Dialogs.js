import React, { useState } from 'react';
import { Dialogs as BaseDialogs } from '../components';

const Dialogs = ({ items, userId }) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFilteredItems] = useState(Array.from(items));

    const onChangeInput = (value = '') => {
        setFilteredItems(items.filter(dialog => {
            return dialog.user.fullname.toLowerCase().indexOf(value.toLocaleLowerCase()) >= 0;
        }));
        setValue(value);
    }

    return (
        <BaseDialogs 
            items={ filtred } 
            userId={ userId }
            inputValue={ inputValue }
            onSearch={ onChangeInput }
        />
    )
}

export default Dialogs;