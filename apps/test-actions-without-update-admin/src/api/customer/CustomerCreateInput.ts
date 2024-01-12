import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  events?: EventCreateNestedManyWithoutCustomersInput;
  name?: string | null;
};
