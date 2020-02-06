import React from 'react';
import { connect } from 'react-redux';

import { Status as StatusBase } from '../components';

const Status = ({ dialogs, currentDialogId, items, user }) => {
    
    if (!dialogs.items.length || !currentDialogId) {
        return null;
    }

    const currentDialog = items.filter(dialog => dialog._id === currentDialogId)[0];

    let partner;
    if (currentDialog.author._id === user._id) {
        partner = currentDialog.partner;
    } else {
        partner = currentDialog.author;
    }

    return (
        <StatusBase {...partner} />
    )
}

export default connect(
    ({ dialogs, user }) => ({
        dialogs: dialogs,
        currentDialogId: dialogs.currentDialogId,
        items: dialogs.items,
        user: user.data
    })
)(Status);