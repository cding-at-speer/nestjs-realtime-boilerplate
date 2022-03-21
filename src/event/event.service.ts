import { Injectable } from '@nestjs/common';

import { Client } from 'pg';
@Injectable()
export class EventService {
  public wsClient = [];
  async init() {
    const db = {
      user: 'root',
      host: 'localhost',
      database: 'api',
      password: 'secret',
      port: 5432,
    };
    const pg_client = new Client(db);
    await pg_client.connect();
    await pg_client.query('LISTEN addedrecord');
    pg_client.on(
      'notification',
      function (content) {
        console.log('main.ts: msg sent: ' + content.payload);
        for (const c of this.wsClient) {
          c.send(content.payload);
        }
      }.bind(this),
    );
  }
}
