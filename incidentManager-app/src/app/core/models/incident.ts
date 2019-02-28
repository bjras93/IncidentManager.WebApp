import { User } from './user';
import { Comment } from './comment';

export class Incident {
    id: number;
    header: string;
    description: string;
    comments: Comment[];
    createdBy: User;
    assignedTo: User;

}