import { Test, TestingModule } from '@nestjs/testing';
import { UserEntityDetailsService } from './user_entity_details.service';

describe('UserEntityDetailsService', () => {
  let service: UserEntityDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEntityDetailsService],
    }).compile();

    service = module.get<UserEntityDetailsService>(UserEntityDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
