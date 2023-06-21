import { UserType } from './../user/User';

export type Comment = {
    id: number,
    body: string,
    postId: number,
    user: UserType,
}
