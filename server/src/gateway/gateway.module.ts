import { Module } from '@nestjs/common';
import { WebsocketGateway } from './gateway';
import { GroupMessagesGateWay } from './groupMessages.gateway';
import { GroupMessagesService } from './groupMessages.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SocketGateway } from './testGateway';

@Module({
  providers: [SocketGateway, PrismaService, GroupMessagesService],
})
export class GatewayModule {}
