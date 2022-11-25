import { Test, TestingModule } from '@nestjs/testing';
import { UserLoginDetailsController } from './user_login_details.controller';
import { UserLoginDetailsService } from './user_login_details.service';

describe('UserLoginDetailsController', () => {
  let controller: UserLoginDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLoginDetailsController],
      providers: [UserLoginDetailsService],
    }).compile();

    controller = module.get<UserLoginDetailsController>(UserLoginDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
