import instance from './axiosInstance';

type SecurityResponse = {
    url: string
}

const getCaptchaUrlApi = async () => {
return (await instance.get<SecurityResponse>('security/get-captcha-url'));
}

export default getCaptchaUrlApi;