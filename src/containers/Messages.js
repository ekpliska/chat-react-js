import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Empty } from "antd";

import { Messages as BaseMessages } from '../components';

import { messagesActions } from '../redux/actions';

import { socket } from '../core';

const Messages = ({ currentDialogId, fetchMessages, addMessage, items, isLoading, user, removeMessageId }) => {

    const messagesRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null);

    const onClosePreviewModal = () => {
        setPreviewImage(null);
    }

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
        currentDialogId && messagesRef.current.scrollTo(0, 9999);
    }, [items]);

    if (!currentDialogId) {
        return <Empty description="Выберите диалог" />;
    }

    return (
        <BaseMessages
            user={user}
            blockRef={messagesRef}
            items={items}
            isLoading={isLoading}
            onRemoveMessage={removeMessageId}
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            onClosePreviewModal={onClosePreviewModal}
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