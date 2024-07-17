import { Module } from '@nestjs/common';
import { WebsocketGateway } from './gateway';
import { GroupMessagesGateWay } from './groupMessages.gateway';
import { GroupMessagesService } from './groupMessages.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [GroupMessagesGateWay, GroupMessagesService, PrismaService],
})
export class GatewayModule {}
