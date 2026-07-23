'use client';

import { io } from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'https://abrasion-bakeshop-oxidation.ngrok-free.dev';
const NGROK_HEADERS = { 'ngrok-skip-browser-warning': 'true' };

let socket;

export function getSocket() {
  if (!socket) {
    socket = io(SOCKET_URL, {
      autoConnect: true,
      // เริ่มจาก polling เพื่อส่ง header ผ่าน ngrok ก่อน แล้ว Socket.io จะอัปเกรดเป็น WebSocket เอง
      transports: ['polling', 'websocket'],
      extraHeaders: NGROK_HEADERS,
      transportOptions: {
        polling: { extraHeaders: NGROK_HEADERS },
      },
    });
  }
  return socket;
}
