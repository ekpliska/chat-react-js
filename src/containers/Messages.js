import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

import { Empty } from "antd";

import { Messages as BaseMessages } from '../components';

import { messagesActions } from '../redux/actions';

import { socket } from '../core';

const Messages = ({ currentDialog, fetchMessages, addMessage, items, isLoading, user, removeMessageId, attachments }) => {

    const messagesRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [chatInputHeight, setChatInputHeight] = useState(135);
    const [isTyping, setIsTyping] = useState(false);

    let typingTimeoutId = null;

    const onClosePreviewModal = () => {
        setPreviewImage(null);
    }

    const onNewMessage = (data) => {
        addMessage(data);
    }

    const toggleIsTyping = () => {
        setIsTyping(true);
        clearInterval(typingTimeoutId);
        typingTimeoutId = setTimeout(() => {
            setIsTyping(false);
        }, 3000);
    };

    useEffect(() => {
        socket.on('DIALOGS:TYPING', toggleIsTyping);
    }, []);

    useEffect(() => {
        if (currentDialog) {
            fetchMessages(currentDialog._id);
        }
        socket.on('SERVER:MESSAGES_CREATED', onNewMessage);

        return () => {
            socket.removeListener("SERVER:MESSAGES_CREATED", onNewMessage);
        }
    }, [currentDialog]);

    useEffect(() => {
        currentDialog && messagesRef.current.scrollTo(0, 9999);
    }, [items, isTyping]);

    useEffect(() => {
        if (attachments.length) {
            setChatInputHeight(245);
        } else {
            setChatInputHeight(135);
        }
    }, [attachments])

    if (!currentDialog) {
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
            isTyping={isTyping}
            partner={user._id !== currentDialog.partner._id ? currentDialog.author : currentDialog.partner}
        />
    )
}

export default connect(
    ({ dialogs, messages, user, attachments }) => ({
        currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }),
        items: messages.items,
        isLoading: messages.isLoading,
        user: user.data,
        attachments: attachments.items
    }),
    messagesActions)(Messages);