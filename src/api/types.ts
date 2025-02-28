export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    resultCode: RC
    messages: string[] | null
    data: D
}