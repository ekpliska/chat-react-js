import React from 'react';
import { connect } from 'react-redux';

import { SideBar as SideBarBase } from '../components';

import { messagesActions } from '../redux/actions';

const SideBar = ({ fetchSendMessage, currentDialogId }) => {
    return (
        <SideBarBase
            onSendMessage={fetchSendMessage}
            currentDialogId={currentDialogId}
        />
    )
}

export default connect(
    ({ dialogs }) => ({
        currentDialogId: dialogs.currentDialogId
    }),
    messagesActions
)(SideBar);