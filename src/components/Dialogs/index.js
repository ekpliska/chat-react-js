import React from 'react';

import orderBy from 'lodash/orderBy';

import './Dialogs.scss';
import { DialogItem } from '../';

const Dialogs = ({ items, userId }) => {
    return (
        <div className="dialogs">
            {
                orderBy(items, ['created_at'], ['desc']).map(item => (
                    <DialogItem
                        key={item._id}
                        user={item.user}
                        message={item}
                        unreaded={item.unreaded}
                        incoming={item.user._id === userId ? false : true} />
                ))
        }
        </div>
    )
}

export default Dialogs;