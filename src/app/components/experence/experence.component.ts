import { Component, OnInit } from '@angular/core';
import { Education, EducationService } from 'src/app/services/EducationService';
import { Certification, CertificationService } from 'src/app/services/CertificationService';
import { Experence, ExperenceService } from 'src/app/services/ExperenceService';


@Component({
  selector: 'app-experence',
  templateUrl: './experence.component.html',
  styleUrls: ['./experence.component.css']
})

export class ExperenceComponent implements OnInit {
  education:Education[]=[];
  certification:Certification[]=[];
  experence:Experence[]=[];

  constructor(
               private _educationservice:EducationService,
               private _certificationservice:CertificationService,
               private _experenceservice:ExperenceService) { }

  ngOnInit(): void {
    this.education=this._educationservice.getEducation();
    this.certification=this._certificationservice.getCertification();
    this.experence=this._experenceservice.getExperence();
  }

}
