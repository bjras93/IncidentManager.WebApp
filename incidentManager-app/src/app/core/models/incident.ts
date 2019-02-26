export class Incident {
    id: number;
    header: string;
    description: string;
    comments: Comment[];
    createdBy: string;
    assignedTo: string;

}