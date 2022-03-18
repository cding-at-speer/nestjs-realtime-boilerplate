import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Server } from 'ws';
import { Client } from 'pg';

@WebSocketGateway(4001)
export class EventGateway {
  constructor(private readonly eventService: EventService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  onEvent(client, data) {
    console.log(data);
    const db = {
      user: 'root',
      host: 'localhost',
      database: 'api',
      password: 'secret',
      port: 5432,
    };
    const pg_client = new Client(db);
    pg_client
      .connect()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    const query = pg_client.query('LISTEN addedrecord');
    console.log(query);
    pg_client.on('notification', function (content) {
      console.log('msg sent: ' + content.payload);
      client.send(content.payload);
    });
    // setInterval(function () {client.send('test');}, 1000);
    // return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('createEvent')
  create(@MessageBody() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @SubscribeMessage('findAllEvent')
  findAll() {
    return this.eventService.findAll();
  }

  @SubscribeMessage('findOneEvent')
  findOne(@MessageBody() id: number) {
    return this.eventService.findOne(id);
  }

  @SubscribeMessage('updateEvent')
  update(@MessageBody() updateEventDto: UpdateEventDto) {
    return this.eventService.update(updateEventDto.id, updateEventDto);
  }

  @SubscribeMessage('removeEvent')
  remove(@MessageBody() id: number) {
    return this.eventService.remove(id);
  }
}
