import { Module } from '@nestjs/common';
import { InternsService } from './interns.service';
import { InternsController } from './interns.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [InternsController],
  providers: [InternsService],
  exports: [InternsService],
  imports: [PrismaModule]
})
export class InternsModule {}
