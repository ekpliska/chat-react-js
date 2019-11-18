import React from 'react';
import { Message } from '../../components';

const Chat = () => {
    return (
        <section className="chat">
            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                text="__text"
                date={new Date(2019, 9, 30)}
                incoming={true}
                attachments={[
                    {
                        url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                        filename: "File name",
                    },
                    {
                        url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                        filename: "File name",
                    }
                ]} />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                text="__text 2"
                date={new Date(2019, 9, 30)}
                incoming={false}
                isReaded={false} />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                incoming={true} isTyping />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                incoming={true}
                attachments={[
                    {
                        url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                        filename: "File name",
                    },
                ]} />

        </section>
    )
}

export default Chat;