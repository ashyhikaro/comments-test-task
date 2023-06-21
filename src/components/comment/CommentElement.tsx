import React from 'react'
import './Comment.css'

import { Comment } from '../../types/Comment'
import { DisplayComment } from '../../types/DisplayComment'

import { useRemoveCommentMutation } from '../../store/api/comment.api'

interface ICommentElement {
    comment: Comment
}

export const CommentElement: React.FC<ICommentElement> = ({comment}) => {

    const [removeComment] = useRemoveCommentMutation()

    const getInitials = (): string => {
        const usernames: String[] = comment.user.username.split(' ')
        let initials: string = ''

        usernames.forEach((value_name, index) => {
            if (index < 2) {
                initials += value_name[0]
            } else {
                return
            }
            
        })

        return initials
    }

    const DisplayComment: DisplayComment = {
        'initials': getInitials(),
        'username': comment.user.username,
        'body': comment.body,
    }

    const handleDelete = (id: number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        removeComment(id).then(res => console.log(res))
        e.currentTarget.closest('.comment__container')?.classList.add('hidden')
    }

    return (
        <div className='comment__container'>
            <div className='header'>
                <div className='user'>
                    <p className='initials'>{DisplayComment.initials}</p>
                    <p className='username'>{DisplayComment.username}</p>
                </div>

                <span className='delete_btn' onClick={(e) => handleDelete(comment.id, e)}>X</span>
            </div>
            
            <p className='comment_body'>{DisplayComment.body}</p>
        </div>
    )
}