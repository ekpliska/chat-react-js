import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Empty } from "antd";

import { Messages as BaseMessages } from '../components';

import { messagesActions } from '../redux/actions';

import { socket } from '../core';

const Messages = ({ currentDialogId, fetchMessages, addMessage, items, isLoading, user, removeMessageId, attachments }) => {

    const messagesRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [chatInputHeight, setChatInputHeight] = useState(135);

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

    useEffect(() => {
        if (attachments.length) {
            setChatInputHeight(245);
        } else {
            setChatInputHeight(135);
        }
    }, [attachments])

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
            chatInputHeight={chatInputHeight}
        />
    )
}

export default connect(
    ({ dialogs, messages, user, attachments }) => ({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items,
        isLoading: messages.isLoading,
        user: user.data,
        attachments: attachments.items
    }),
    messagesActions)(Messages);