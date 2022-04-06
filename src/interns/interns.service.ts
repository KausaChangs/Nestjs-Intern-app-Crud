import { Injectable } from '@nestjs/common';
import { CreateInternDto } from './dto/create-intern.dto';
import { UpdateInternDto } from './dto/update-intern.dto';
import { Intern } from './entities/intern.entity';
import { intern, PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { InternsDto } from './dto/interns.dto';



@Injectable()
export class InternsService extends PrismaClient{

  constructor(private readonly prismaService: PrismaService){
    super();
  }

   Intern: intern[] = [];


 // method to create intern
  async createIntern(intern: Omit<CreateInternDto, 'id'>): Promise<Intern>{
    return await this.prismaService.intern.create({
      data: intern
    });
  }
  
  //method to get all interns
  async getAllInterns(): Promise<Intern> {
    return await this.prismaService.intern.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} intern`;
  }
  //method to update an intern
  async updateIntern(id: number, intern: Partial<Intern>): Promise<Intern>{
    return await this.prismaService.intern.update({
  where:{
    id: +id
  },
  data: {...intern}
})
    
  }

  remove(id: number) {
    return `This action removes a #${id} intern`;
  }
}
