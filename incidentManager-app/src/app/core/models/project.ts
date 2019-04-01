import { User } from './user';
import { Comment } from './comment';

export class Project {
    id: number;
    header: string;
    description: string;
    comments: Comment[];
    createdBy: User;
    assignedTo: User;
    created: string;
    active: boolean;
}
