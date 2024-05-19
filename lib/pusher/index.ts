import Pusher from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new Pusher({
    appId: "1805139",
    key: "dccc95725049b43cef0a",
    secret: "d1d56135eb58276202eb",
    cluster: "ap2",
    useTLS: true
});

export const pusherClient = new PusherClient("dccc95725049b43cef0a", {
    cluster: 'ap2',
    authEndpoint: '/api/pusher-auth',
    authTransport: 'ajax',
    auth: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  })