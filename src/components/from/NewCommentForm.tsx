import React, { useEffect, useState } from 'react';

import './NewCommentForm.css';

import { Comment } from '../../types/Comment';
import { NewComment } from '../../types/NewComment';

import { User } from '../../user/User';
import { useCreateCommentMutation } from '../../store/api/comment.api';

interface INewCommentForm {
    comments: Comment[]
}

export const NewCommentForm: React.FC<INewCommentForm> = ({comments}) => {
    const savedComment: string = localStorage.getItem('newComment') ? String(localStorage.getItem('newComment')) : ''
    const [newComment, setNewComment] = useState<string>(savedComment)

    const [createComment] = useCreateCommentMutation()

    useEffect(() => {localStorage.setItem('newComment', newComment)}, [newComment])

    const createCommentSimulation = () => {

        /* just an example of user comment */
        const commentPlug: NewComment = {
            body: newComment,
            postId: 100,
            user: User,
        }

        try {
            createComment(commentPlug).then(res => console.log(res))
            setNewComment('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='newcomment_from'>
            <textarea 
                className='newcomment_area' 
                placeholder='Lorem ipsum' 
                onChange={e => setNewComment(e.target.value)}
                value={newComment}
            ></textarea>

            <button className='send_btn' onClick={() => createCommentSimulation()}>Send</button>
        </div>
    )
}