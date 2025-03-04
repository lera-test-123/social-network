
let subscribers: SubscriberType[] = [];

let webChanel: WebSocket | null = null;

const closeHandler = () => {
    console.log('close ws');
    setTimeout(createChanel, 3000);
}

let messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers.forEach(subscriber => subscriber(newMessages));
}

const createChanel = () => {
    webChanel?.removeEventListener('close', closeHandler);
    webChanel?.close();
    webChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    webChanel.addEventListener('close', closeHandler);
    webChanel?.addEventListener('message', messageHandler);
}

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type SubscriberType = (messages: ChatMessageType[]) => void

const chatApi = {
    subscribe ( callback: SubscriberType) {
        subscribers.push( callback );
        return () => {
            subscribers = subscribers.filter( subscriber => subscriber !== callback );
        }
    },
    unSubscribe ( callback: SubscriberType ) {
        subscribers = subscribers.filter( subscriber => subscriber !== callback );
    },
    sendMessage (message: string) {
        webChanel?.send(message);
    },
    start () {
        createChanel();
    },
    stop () {
        webChanel?.removeEventListener('close', closeHandler);
        webChanel?.removeEventListener('message', messageHandler);
        webChanel?.close();
        subscribers = [];
    }
}

export default chatApi;