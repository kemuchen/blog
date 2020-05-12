import { message } from 'antd';

const socket = {
    websocketUrl: 'wss://192.168.1.6:8091/websocket/',   // socket监听地址
    websocket: null,    // websocket监听对象
    isWebSocket: false,  // 是否连接

    // 建立连接
    created: option => {
        socket.initWebSocket(option);
    },

    // 断开连接
    destroyed:() => {
        websock.close() //离开路由之后断开websocket连接
    },

    // 初始化socket信息
    initWebSocket: option => { //初始化weosocket
        const { onMessage } = option || {};
        // 取用户信息，作为socketid
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        if (currentUser == null || currentUser == undefined) {
            return;
        }
        // socket信息
        socket.websocket = new WebSocket(socket.websocketUrl + currentUser.id);
        socket.websocket.onmessage = onMessage || socket.websocketonmessage;
        socket.websocket.onopen = socket.websocketonopen;
        socket.websocket.onerror = socket.websocketonerror;
    },

    // 监听socket连接成功信息
    websocketonopen:() => { //连接建立之后执行send方法发送数据
        socket.isWebSocket = true;
    },

    // socket连接失败重新建立连接
    websocketonerror:() => {//连接建立失败重连
        socket.initWebSocket();
    },

    // 发送消息
    websocketsend:(data) =>  {//数据发送
        // 如果未建立连接，则建立连接
        if (socket.isWebSocket) {
            socket.websocket.send(data);
        } else {
            message.error("网络连接异常");
        }
    },

    // 关闭连接
    websocketclose:(e) => {  //关闭
        socket.websock.close();
        socket.isWebSocket = false;
    }
}
export default socket;