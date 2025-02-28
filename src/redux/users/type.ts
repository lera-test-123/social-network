import { PhotosType } from "../profile/type";


export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type FilterType = {
    term: string
    friend: null | boolean
}

export type InitialUsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    filter: FilterType
}