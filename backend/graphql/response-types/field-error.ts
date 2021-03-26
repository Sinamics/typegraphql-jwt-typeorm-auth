import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class FieldError {
  @Field(() => [String])
  field: string[];

  @Field()
  message: string;
}
