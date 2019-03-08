import { User } from './user';
import { Comment } from './comment';
import { Machine } from './machine';

export class Incident {
    id: number;
    header: string;
    description: string;
    comments: Comment[];
    createdBy: User;
    assignedTo: User;
    created: string;
    active: boolean;
    machine: Machine;

}