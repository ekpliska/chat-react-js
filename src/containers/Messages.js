import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Messages as BaseMessages } from '../components';

import { messagesActions } from '../redux/actions';

const Messages = ({ currentDialogId, fetchMessages, items }) => {

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId]);

    return (
        <BaseMessages 
            items={ items }
        />
    )
}

export default connect(
    ({ dialogs, messages }) => ({ currentDialogId: dialogs.currentDialogId, items: messages.items  }), messagesActions)(Messages);