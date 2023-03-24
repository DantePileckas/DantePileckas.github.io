import{Injectable} from '@angular/core';

@Injectable()

export class ExperenceService{

private experence:Experence[]=
[



    //Implementador
   {name:"Chatbot Implementer", 
    institute:"Bleett",
    description:"Construction of conversational flows and development of implementation diagrams",
    img: "assets/img/bleett.jfif",
    date:"March 2023 - present ",
    },

    //Profesor de Computación
    {
        name:"Computer Science Teacher", 
        institute:"Instituto San Antonio de Padua",
        description:"I plan and teach classes to upper secondary level courses",
        img: "assets/img/isap.jpg",
        date:"July 2022 - March 2023 ", 
        },
    
    //Produ
    {
        name:"Support and Development Analytics", 
        institute:"Producteca",
        description:"Support for users on the use and operation of the Producteca platform",
        img: "assets/img/producteca.png",
        date:"December 2021 - May 2022 ", 
        },

    //El Pueblito 
    {
        name:"Web designer - freelance", 
        institute:"El Pueblito, tu Tienda Saludable",
        description:"Design and execution of an ecommerce with intuitive and user-friendly interaction. Developed with UX techniques",
        img: "assets/img/el pueblito.png",
        date:"February 2021 - April 2021", 
    },
    
];


getExperence():Experence[]{
    return this.experence;
}

}

export interface Experence{
    name: string;
    institute: string;
    description: string;
    img:string;
    date: string;
}
