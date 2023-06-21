import { UserType } from "../user/User";

export type NewComment = {
    body: string,
    postId: number,
    user: UserType,
}