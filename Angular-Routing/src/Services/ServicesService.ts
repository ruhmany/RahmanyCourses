import { Service } from "src/Models/Service";

export class ServicesService{

    services:Service[] = [
        new Service("Mentoring", "Some quick example text to build on the card title and make up the bulk of the card's content", "../assets/images/Menitor.png"),
        new Service("Help With Finding Jobs", "Some quick example text to build on the card title and make up the bulk of the card's content", "../assets/images/FindingJobs.png"),
        new Service("Mentoring", "Some quick example text to build on the card title and make up the bulk of the card's content", "../assets/images/Menitor.png")
    ]

    GetAllServices(){
        return this.services;
    }

}