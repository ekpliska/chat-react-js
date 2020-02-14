import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Dialogs, Messages, ChatInput, Status, SideBar } from '../../containers';

import { dialogsActions } from '../../redux/actions';

import './Chat.scss';

const Chat = (props) => {

    const { user, setCurrentDialogId } = props;

    useEffect(() => {
        const { pathname } = props.location;
        const dialogId = pathname.split('/').pop();
        setCurrentDialogId(dialogId);
    }, [props.location.pathname]);

    return (
        <section className="chat-page">
            <div className="chat">
                <div className="chat__sidebar">
                    <SideBar />
                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={user && user._id} />
                    </div>
                </div>
                {user && (
                    <div className="chat__dialog">
                        <div className="chat__dialog-header"><div />
                            <Status />
                        </div>
                        <Messages />
                        <ChatInput />
                    </div>
                )}
            </div>
        </section>
    )
}

export default withRouter(connect(
    ({ user }) => ({
        user: user.data
    }),
    dialogsActions
)(Chat));