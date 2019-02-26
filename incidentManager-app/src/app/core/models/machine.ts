import { Incident } from './incident';

export class Machine {
    id: number;
    name: string;
    locationid?: number;
    incidents: Incident[];
}