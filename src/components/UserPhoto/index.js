import React from 'react';

import { generatePhotoHash } from '../../utils/helpers';

import './UserPhoto.scss';

const UserPhoto = ({ user }) => {
    if (user.photo) {
        return <img className="photo" src={user.photo} alt={`${user.fullname}`} />;
    } else {
        const { color, colorLighten } = generatePhotoHash(user._id);
        const firstSymbolName = user.fullname[0].toUpperCase();
        return (
            <div 
                style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)` }} 
                className="avatar avatar--symbol"
            >
                {firstSymbolName}
            </div>
        )
    }
}

export default UserPhoto;