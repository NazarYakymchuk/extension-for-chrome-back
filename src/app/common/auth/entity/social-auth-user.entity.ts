import { ObjectType, OmitType } from '@nestjs/graphql';
import { UserRepoInterface } from '../../../repositories/user/user-repo.interface';

@ObjectType()
export class SocialAuthUserEntity extends OmitType(
  UserRepoInterface,
  ['created_at', 'updated_at', 'id'],
  ObjectType,
) {}
