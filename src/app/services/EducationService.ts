import{Injectable} from '@angular/core';

@Injectable()

export class EducationService{

private education:Education[]=
[

{
    name:"Analista de Sistemas", 
    institute:"ORT Argentina",
    description:"Tecnicatura en Análisis en sistemas",
    img:"assets/img/ort.png",
    date:"Agosto 2021 - Actualidad",
    link:"" 
    },

    {
    name:"User Experience Analyst", 
    institute:"Educación IT",
    description:"Planificada por 14 cursos",
    img:"assets/img/it.png",
    date:"Marzo 2020 - Abril 2021",
    link:"https://www.linkedin.com/in/dante-pileckas-4b503b210/detail/treasury/education:718119661/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAADVmAAkBzLPbVA6eWRC56ZyTBxnyaoc4WFA%2C1635453502516)&section=education%3A718119661&treasuryCount=4" 
    },

    {
    name:"Secundario", 
    institute:"Instituto San Antonio de Padua",
    description:"Bachiller con orientación a Ciencias Sociales y Humanidades (Prom. 9,67)",
    img:"assets/img/isap.jpg",
    date:"Marzo 2016 - Diciembre 2020",
    link:"" 
    },
];


getEducation():Education[]{
    return this.education;
}

}

export interface Education{
    name: string;
    institute: string;
    description: string;
    img:string;
    date: string;
    link:string;

}
