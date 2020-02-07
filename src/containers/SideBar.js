import React, { useState }  from 'react';
import { connect } from 'react-redux';

import { SideBar as SideBarBase } from '../components';

import { messagesActions } from '../redux/actions';
import { userAPI, dialogsAPI } from '../utils/api';

const SideBar = ({ fetchSendMessage, currentDialogId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const onShowModal = () => {
        setIsOpen(true);
    }

    const onHideModal = () => {
        setIsOpen(false);
    }

    const handleChangeInput = (value) => {
        setInputValue(value);
    }

    const onChangeTextArea = (e) => {
        setMessageValue(e.target.value);
    }

    const onAddDialog = () => {
        setIsLoading(true);
        dialogsAPI
            .create({
                partner: selectedUserId,
                text: messageValue
            })
            .then(({ data }) => {
                setIsLoading(false);
                onHideModal();
            })
            .catch(() => {
                setIsLoading(false);
            });
    }

    const handleSearch = (value) => {
        setIsLoading(true);
        userAPI
            .searchUser(value)
            .then(({ data }) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }

    const onSelectUser = (userId) => {
        setSelectedUserId(userId);
    }

    return (
        <SideBarBase
            users={users}
            isOpen={isOpen}
            onShowModal={onShowModal}
            onHideModal={onHideModal}
            onCreateDialog={onAddDialog}
            inputValue={inputValue}
            handleChangeInput={handleChangeInput}
            handleSearch={handleSearch}
            selectedUserId={selectedUserId}
            onSelectUser={onSelectUser}
            isLoading={isLoading}
            onAddDialog={onAddDialog}
            messageValue={messageValue}
            onChangeTextArea={onChangeTextArea}
        />
    )
}

export default connect(
    ({ dialogs }) => ({
        currentDialogId: dialogs.currentDialogId
    }),
    messagesActions
)(SideBar);