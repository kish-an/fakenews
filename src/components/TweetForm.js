import React, { useState } from 'react';

const TweetForm = ({ handleSubmit, formTitle, user }) => {
    const [content, setContent] = useState('');

    const handleChange = e => {
        setContent(e.target.value);
    }

    const maxChars = 280;

    return (
        <>
            <h3 className='center'>{formTitle}</h3>
            <form
                className='add-tweet'
                onSubmit={e => handleSubmit(e, content)}
            >
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder={user === 'McConaughey' ? `Alright, Alright, Alright` : `What's happening?`}
                    className='content'
                    maxLength={maxChars}
                />
                {maxChars - content.length <= 100 &&
                    <div className='remaining-chars'>
                        {maxChars - content.length}
                    </div>
                }
                <button
                    className='btn'
                    type='submit'
                    disabled={content.length < 1}
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default TweetForm;
