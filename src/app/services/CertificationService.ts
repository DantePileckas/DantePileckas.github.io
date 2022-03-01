import{Injectable} from '@angular/core';

@Injectable()

export class CertificationService{

private certification:Certification[]=
[
    {
        name:"Angular + nestJS", 
        institute:"SoloLearn",
        date:"Junio 2021",
        img:"assets/img/sololearn.png",
        link:"https://www.sololearn.com/Certificate/1092-21750305/jpg" 
        },

    {
    name:"GIT: Desarrollo Colaborativo", 
    institute:"Educación IT",
    date:"Mayo 2021 - Junio 2021",
    img:"assets/img/it.png",
    link:"https://api.alumni.education/course/certificate/generate?hash=8a98d960-8da2-40a2-8b21-8278d37a5da1&format=pdf&download=1" 
    },

    {
    name:"Introducción a Base de datos y SQL", 
    institute:"Educación IT",
    date:"Abril 2020 - Mayo 2020",
    img:"assets/img/it.png",
    link:"https://api.alumni.education/course/certificate/generate?hash=3b46731f-a6d9-4dd6-98ab-785b884f1687&format=pdf&download=1" 
    },

    {
    name:"Introducción a paradigma de objetos", 
    institute:"Educación IT",
    date:"Abril 2020",
    img:"assets/img/it.png",
    link:"https://api.alumni.education/course/certificate/generate?hash=83ae6626-03a1-424d-b3bd-a374987f46f3&format=pdf&download=1" 
    },

    {
        name:"Introducción a Java", 
        institute:"Educación IT",
        date:"Febrero 2020 - Abril 2020",
        img:"assets/img/it.png",
        link:"https://api.alumni.education/course/certificate/generate?hash=7503810b-a092-4d8c-ae04-79b971ac58aa&format=pdf&download=1" 
        },
];


getCertification():Certification[]{
    return this.certification;
}

}

export interface Certification{
    name: string;
    institute: string;
    date: string;
    img:string;
    link:string;

}