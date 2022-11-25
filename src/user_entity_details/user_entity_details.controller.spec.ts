import { Test, TestingModule } from '@nestjs/testing';
import { UserEntityDetailsController } from './user_entity_details.controller';
import { UserEntityDetailsService } from './user_entity_details.service';

describe('UserEntityDetailsController', () => {
  let controller: UserEntityDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEntityDetailsController],
      providers: [UserEntityDetailsService],
    }).compile();

    controller = module.get<UserEntityDetailsController>(UserEntityDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
