import{Injectable} from '@angular/core';

@Injectable()

export class ExperenceService{

private experence:Experence[]=
[
    {
        name:"Support and Development Analytics", 
        institute:"Producteca",
        description:"Soporte para usuarios sobre el uso y funcionamiento de la plataforma de Producteca",
        img: "assets/img/producteca.png",
        date:"Diciembre 2021 - Actualidad", 
        },

{
    name:"Web designer - freelance", 
    institute:"El Pueblito, tu Tienda Saludable",
    description:"Diseño y ejecución de una ecommerce con interacción intuitiva y amigable para el usuario. Desarrollada con técnicas de UX",
    img: "assets/img/el pueblito.png",
    date:"Febrero 2021 - Abril 2021", 
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
