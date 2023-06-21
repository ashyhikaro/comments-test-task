import React from 'react';

import './DisplayComments.css';

import { Comment } from '../../types/Comment';

import { CommentElement } from '../comment/CommentElement';

interface IDisplayComments {
    comments: Comment[]
}

export const DisplayComments: React.FC<IDisplayComments> = ({comments}) => {
    return (
        <div className='comments'>
            {comments.map((comment: Comment) => <CommentElement key={comment.id} comment={comment}/>)}
        </div>
    )
}