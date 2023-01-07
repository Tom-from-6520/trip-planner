import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Double } from 'bson';
import mongoose, { Document } from 'mongoose';

@Schema({
    timestamps: true,
    versionKey: false,
    collection: 'locations',
})
export class Location extends Document {
    @Prop({ required: true })
    latitude: Double;

    @Prop({ required: true })
    longitude: Double;
}

export const LocationSchema = SchemaFactory.createForClass(Location);

export const LocationModel = mongoose.model('Location', LocationSchema);