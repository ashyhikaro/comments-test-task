import { api } from "./api";
import { NewComment } from "../../types/NewComment";

export const commentApi = api.injectEndpoints({
    endpoints: builder => ({
        createComment: builder.mutation<null, NewComment>({
            query: (newComment) => ({
                url: '/add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    body: newComment.body,
                    postId: newComment.postId,
                    userId: newComment.user.id,
                })
            }),
            invalidatesTags: () => [{
                type: 'Comments'
            }]
        }),
        removeComment: builder.mutation<null, number>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: () => [{
                type: 'Comments',
                id: 'id'
            }]
        })
    })
})

export const { useCreateCommentMutation, useRemoveCommentMutation } = commentApi