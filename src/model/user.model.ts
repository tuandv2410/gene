
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Drug } from "./drug.model";

export type UserDocument = User & Document;

@Schema()
export class User {

    _id: Types.ObjectId;


    @Prop({index:true})
    name: string;


    @Prop()
    drugs: Drug[]
}


export const UserSchema = SchemaFactory.createForClass(User);