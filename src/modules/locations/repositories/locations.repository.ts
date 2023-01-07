import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from '@/modules/locations/schemas/locations.schema';
// import configuration from '@'

@Injectable()
export class LocationsRepository {
    constructor(
        // @InjectModel(Location.name, configuration().database.name)
        private locationModel: Model<Location>,
    ) {}
}