import { Module } from '@nestjs/common';
import { GroupMessagesService } from './groupMessages.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupMessagesGateWay } from './groupMessages.gateway';
import { DirectMessagesGateway } from './directMessages.gateway';
import { DirectMessagesService } from './directMessages.service';

@Module({
  providers: [
    GroupMessagesGateWay,
    DirectMessagesGateway,
    GroupMessagesService,
    DirectMessagesService,
    PrismaService,
  ],
})
export class GatewayModule {}
