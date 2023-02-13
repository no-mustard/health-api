import { Module } from '@nestjs/common';
import { MySqlConfigService } from './confjg.service';

@Module({
	providers: [MySqlConfigService],
})
export class MySqlConfigModule {}