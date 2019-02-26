import { User } from './user';

export class Incident {
    id: number;
    header: string;
    description: string;
    comments: Comment[];
    createdBy: User;
    assignedTo: User;

}