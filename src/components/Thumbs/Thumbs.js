import React from 'react';
import './Thumbs.css';


export const Thumbs = React.memo(({ thumbsUp, thumbsDown, message, texts }) => {
    return (
        <div className='thumbs'>
            {message === texts.lostMessage ? thumbsDown : thumbsUp}
        </div>
    );
});

