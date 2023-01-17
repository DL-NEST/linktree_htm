/**
 * @Description websocket连接
 */
let Socket: WebSocket | null = null;
let setIntervalWebsocketPush: number | undefined = undefined;

/** WebSocket.readyState
 * 0	CONNECTING	套接字已创建。连接尚未打开。
 * 1	OPEN	连接已打开，可以进行通信。
 * 2	CLOSING	连接正在关闭。
 * 3	CLOSED	连接已关闭或无法打开。
 * */

/**
 * @Description 创建websocket
 */
export function createSocket() {
  Socket && Socket.close();
  if (!Socket) {
    console.log("建立websocket连接");
    Socket = new WebSocket("");
    Socket.onopen = onopenWS;
    Socket.onmessage = onmessageWS;
    Socket.onerror = onerrorWS;
    Socket.onclose = oncloseWS;
  } else {
    console.log("websocket已连接");
  }
}
/**
 * @Description websocket连接打开
 */
const onopenWS = () => {
  wsPing();
};
/**
 * @Description websocket消息回调
 */
const onmessageWS = () => {};
/**
 * @Description websocket错误
 */
const onerrorWS = () => {
  clearInterval(setIntervalWebsocketPush);
  console.log("websocket已断开....正在尝试重连");
  if (Socket?.readyState !== 3) {
    Socket = null;
    createSocket();
  }
};
/**
 * @Description websocket连接断开
 */
const oncloseWS = () => {
  clearInterval(setIntervalWebsocketPush);
  console.log("websocket已断开....正在尝试重连");
  if (Socket?.readyState !== 2) {
    Socket = null;
    createSocket();
  }
};
/**
 * @Description 等待连接建立后发送数据
 * @param {any} message 需要发送的数据
 */
function connecting(message: any) {
  setTimeout(() => {
    if (Socket?.readyState === 0) {
      connecting(message);
    } else if (Socket?.readyState === 1) {
      Socket?.send(JSON.stringify(message));
    } else {
      connecting(message);
    }
  }, 1000);
}
/**
 * @Description 发送数据
 * @param {any} message 需要发送的数据 TODO:未规范数据格式
 */
export function sendWS(message: any) {
  // Socket不为空但连接已关闭或无法打开，重新连接
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close();
    createSocket();
    // 连接已打开，可以进行通信
  } else if (Socket?.readyState === 1) {
    Socket?.send(JSON.stringify(message));
    // 连接创建，但未打开
  } else if (Socket?.readyState === 0) {
    connecting(message);
  }
}

/**
 * @Description 心跳函数
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
function wsPing(time = 5000, ping = "ping") {
  clearInterval(setIntervalWebsocketPush);
  // 连接成功后发送一次心跳包
  Socket?.send(ping);
  setIntervalWebsocketPush = window.setInterval(() => {
    // 定时发送心跳
    Socket?.send(ping);
  }, time);
}
