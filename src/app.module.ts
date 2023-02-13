import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySqlConfigModule } from './config/database/config.module';
import { MySqlConfigService } from './config/database/confjg.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }), //전역 모듈로 설정하겠다는 뜻
        TypeOrmModule.forRootAsync({ // db에 연결하기 위한 옵션들을 비동기적으로 설정 imports, inject 로 필요한 의존성 주입
            imports: [MySqlConfigModule],
            useClass: MySqlConfigService,
            inject: [MySqlConfigService],
        }),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}