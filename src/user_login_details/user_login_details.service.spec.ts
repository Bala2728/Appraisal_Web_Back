import { Test, TestingModule } from '@nestjs/testing';
import { UserLoginDetailsService } from './user_login_details.service';

describe('UserLoginDetailsService', () => {
  let service: UserLoginDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLoginDetailsService],
    }).compile();

    service = module.get<UserLoginDetailsService>(UserLoginDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
