import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Messages as BaseMessages } from '../components';

import { messagesActions } from '../redux/actions';

import { socket } from '../core';

const Messages = ({ currentDialogId, fetchMessages, addMessage, items, isLoading, user }) => {

    const messagesRef = useRef(null);

    const onNewMessage = (data) => {
        addMessage(data);
    }
    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
        socket.on('SERVER:MESSAGES_CREATED', onNewMessage);

        return () => {
            socket.removeListener("SERVER:MESSAGES_CREATED", onNewMessage);
        }
    }, [currentDialogId]);

    useEffect(() => {
        messagesRef.current.scrollTo(0, 9999);
    }, [items]);

    

    return (
        <BaseMessages
            user={ user }
            blockRef={ messagesRef }
            items={ items }
            isLoading={ isLoading }
        />
    )
}

export default connect(
    ({ dialogs, messages, user }) => ({ 
        currentDialogId: dialogs.currentDialogId, 
        items: messages.items,
        isLoading: messages.isLoading,
        user: user.data,
    }), 
    messagesActions)(Messages);