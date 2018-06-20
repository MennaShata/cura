import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../../shared/models/interfaces/idisease';

@Component({
  selector: 'app-disease-without',
  templateUrl: './disease-without.component.html',
  styleUrls: ['./disease-without.component.css']
})
export class DiseaseWithoutComponent implements OnInit {
  @Input() disease:Idisease;
  constructor() { }
  public TrimMaxLength(str, maxLength) {
    var res = str;
    if (str.length > maxLength) {
        res = str.substr(0, maxLength);
        res = res.concat("...");
    }
    return res;
  }
  ngOnInit() {
    this.disease.descripton=this.TrimMaxLength(this.disease.descripton,100);
    
  }

}
