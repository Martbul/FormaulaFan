import { Injectable } from '@nestjs/common';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';

@Injectable()
export class SettingsService {
  create(createSettingInput: CreateSettingInput) {
    return 'This action adds a new setting';
  }


  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, updateSettingInput: UpdateSettingInput) {
    return `This action updates a #${id} setting`;
  }


}