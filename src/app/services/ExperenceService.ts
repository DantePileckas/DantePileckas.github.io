import{Injectable} from '@angular/core';

@Injectable()

export class ExperenceService{

private experence:Experence[]=
[
    {
        name:"Support and Development Analytics", 
        institute:"Producteca",
        description:"Support for users on the use and operation of the Producteca platform",
        img: "assets/img/producteca.png",
        date:"December 2021 - May 2022 ", 
        },

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
