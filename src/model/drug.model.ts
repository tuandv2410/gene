
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type DrugDocument = Drug & Document;

@Schema()
export class Drug{

    _id: Types.ObjectId;

    @Prop({index: true})
    name: string;

}

export const DrugSchema = SchemaFactory.createForClass(Drug);
