import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { ContentsubService } from './contentsub.service';
import { Socket } from 'socket.io';

@WebSocketGateway(4002)
export class ContentsubGateway {
  @WebSocketServer()
  server;

  constructor(private readonly contentsubService: ContentsubService) {}

  @SubscribeMessage('message')
  handleMessge(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
