import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { EventService } from './event.service';
import { Server } from 'ws';
// import { Server } from 'socket.io';

@WebSocketGateway(4001)
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  wsClients = [];

  constructor(private readonly eventService: EventService) {}
  handleConnection(client, ...args) {
    this.wsClients.push(client);
    this.eventService.wsClient = this.wsClients;
    console.log('connected: ' + client);
    console.log(args);
  }
  handleDisconnect(client) {
    for (let i = 0; i < this.wsClients.length; i++) {
      if (this.wsClients[i] === client) {
        this.wsClients.splice(i, 1);
        break;
      }
    }
    console.log('disconnected: ' + client);
  }

  @SubscribeMessage('events')
  onEvent(client, data) {
    console.log('received from client: ' + data);
    // this.server.emit('test22222');
    // client.send('test222');
    // client.send({
    //   id: 5,
    //   content: 'testcontent 555'
    // })
    // this.server.on('connection', function connection(ws) {

    // });
    // this.server.emit('events', {
    //   id: 5,
    //   content: 'testcontent 555'
    // })
    // const db = {
    //   user: 'root',
    //   host: 'localhost',
    //   database: 'api',
    //   password: 'secret',
    //   port: 5432,
    // };
    // const pg_client = new Client(db);
    // pg_client
    //   .connect()
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // const query = pg_client.query('LISTEN addedrecord');
    // console.log(query);
    // pg_client.on('notification', function (content) {
    //   console.log('msg sent: ' + content.payload);
    //   client.send(content.payload);
    // });
  }
}
