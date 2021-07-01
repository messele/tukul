import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Inquiry {
  readonly id: string;
  readonly name?: string;
  readonly email: string;
  readonly phone?: string;
  readonly comments?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Inquiry>);
  static copyOf(source: Inquiry, mutator: (draft: MutableModel<Inquiry>) => MutableModel<Inquiry> | void): Inquiry;
}