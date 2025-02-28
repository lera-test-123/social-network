export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    userId?: number
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    aboutMe: string | null
    fullName: string
    contacts?: ContactsType
    photos?: PhotosType | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ContactsKeysType = keyof ContactsType;

export type PhotosType = {
    large: string | null
    small: string | null
}


export type ProfileFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    aboutMe: string | null
    contacts?: ContactsType
}