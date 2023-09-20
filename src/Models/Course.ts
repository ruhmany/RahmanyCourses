export class Course{
    /**
     *
     */
    constructor(name:string, id:number, imgurl:string, description:string) {
        this.Name =name;
        this.ID =id
        this.ImageUrl =imgurl
        this.Description = description
    }

    Name:string;
    ID:number;
    ImageUrl:string;
    Description:string;
}