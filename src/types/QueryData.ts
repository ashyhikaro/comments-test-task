import { Comment } from "./Comment"

export type QueryData = {
    [key: string]: Comment[] | number,
}