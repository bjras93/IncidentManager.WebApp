import { Location } from 'src/app/core/models/location';
import { Incident } from './incident';

export class Machine {
    id: number;
    name: string;
    location: Location;
    incidents: Incident[];
}