export class Project {

    ProjectId: number;
    Name: string;

    Description: string;
    LogLine: string;

    URL?: string;
    Repo: string;
    Image?: string;
    ImagePreview?: string;

    CompletionDate?: Date;

    IsFinished: boolean;

    Technologies?: string[];

}
