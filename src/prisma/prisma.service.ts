import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';




interface IDog {
    bark: () => "Woof!";
}

class GermanSherperd implements IDog {
    bark: () => 'Woof!';

}


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    
    async onModuleInit() {
       await this.$connect();
    }
}
