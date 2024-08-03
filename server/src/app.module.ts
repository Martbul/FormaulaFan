import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { GroupModule } from './group/group.module';
import { ChannelModule } from './channel/channel.module';
import { PostModule } from './post/post.module';
import { ConversationModule } from './conversation/conversation.module';
import { GatewayModule } from './gateway/gateway.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './src/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    GroupModule,
    ChannelModule,
    PostModule,
    ConversationModule,
    GatewayModule,
    ProfileModule,
    SettingsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
