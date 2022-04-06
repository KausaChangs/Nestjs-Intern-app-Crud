import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternsService } from './interns.service';
import { CreateInternDto } from './dto/create-intern.dto';
import { UpdateInternDto } from './dto/update-intern.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Intern } from './entities/intern.entity';
import { InternsDto } from './dto/interns.dto';


@Controller('interns')
export class InternsController {
  constructor(private readonly internsService: InternsService) {}

  @Post()
  create(@Body(){email, name, age, salary}: CreateInternDto,): Promise<Intern> {

    return this.internsService.createIntern({
    email, name, age, salary
    });
  }

 
  @Get()
  getAllInterns(): Intern {
    return this.internsService.getAllInterns();
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternDto: UpdateInternDto) {
    return this.internsService.updateIntern(+id, updateInternDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internsService.remove(+id);
  }
}
