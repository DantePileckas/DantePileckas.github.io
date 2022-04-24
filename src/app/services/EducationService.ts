import{Injectable} from '@angular/core';

@Injectable()

export class EducationService{

private education:Education[]=
[

{
    name:"Systems analyst", 
    institute:"ORT Argentina",
    description:"Technician in Systems Analysis",
    img:"assets/img/ort.png",
    date:"August 2021 - Present",
    link:"" 
    },

    {
    name:"User Experience Analyst", 
    institute:"Educación IT",
    description:"Planned for 14 courses",
    img:"assets/img/it.png",
    date:"March 2020 - April 2021",
    link:"https://www.linkedin.com/in/dante-pileckas-4b503b210/detail/treasury/education:718119661/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAADVmAAkBzLPbVA6eWRC56ZyTBxnyaoc4WFA%2C1635453502516)&section=education%3A718119661&treasuryCount=4" 
    },

    {
    name:"Secondary", 
    institute:"Instituto San Antonio de Padua",
    description:"Bachelor with orientation to Social Sciences and Humanities (Prom. 9.67)",
    img:"assets/img/isap.jpg",
    date:"March 2016 - December 2020",
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
