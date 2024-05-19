import Pusher from 'pusher'


const pusher = new Pusher({
    appId: "1805139",
    key: "dccc95725049b43cef0a",
    secret: "d1d56135eb58276202eb",
    cluster: "ap2",
    useTLS: true
});

pusher.trigger("my-channel", "my-event", {
    message: "hello world"
});