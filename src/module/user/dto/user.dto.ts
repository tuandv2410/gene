import { DrugDto } from "src/module/drug/dto/drug.dto";

export class UserDto {
    _id: string;
    name: string;
    drugs: DrugDto[]
}