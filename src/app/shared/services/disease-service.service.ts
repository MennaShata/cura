import { Injectable } from '@angular/core';
import { Idisease } from '../models/interfaces/idisease';
import { Idegree } from '../models/interfaces/Idegree';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiseaseServiceService {
//   diseases:Idisease[];
//   url = "http://localhost:15033/api/Diseases";
 
//   getDiseases() {
//   this.http.get<Idisease[]>(this.url).subscribe(res => { this.diseases = res });
//     return this.http.get<Idisease[]>(this.url);
//   }

//   add(form): Observable<Idisease> {
//     var disease: Idisease;
//     disease = form.value;
//     //console.log(disease);
//     return this.http.post<Idisease>(this.url, disease);
//   }

//   public getDisease(id) {
//   return this.diseases.find(disease => disease.id == id);
// }

// // delete(id: number): Observable<{}> {
// //   return this.http.delete("http://localhost:2097/api/courses/" + id )
// // }
//   delete(id: number){    
//     const url = `${this.url}/${id}`;
//     this.http.delete(url).subscribe(
//       (isSuccess)=>
//       {
//         if(isSuccess)
//         { 
//           //debugger;
//           var i =this.diseases.findIndex(a=> a.id === id);
//           this.diseases.splice(i,1);
//         }
//       },
//       (error)=> {
//         console.log('error happen');
//       }
//     );
//   }
//   edit(disease): Observable<Idisease> {
//     const url = `${this.url}/${disease.id}`;
//     console.log(url);
//     return this.http.put<Idisease>(url, disease);
//   }

//   constructor(private http: HttpClient) {
//     this.getDiseases();
//   }
  private disease:Idisease;
  diseases: Idisease[] = [
    {
      id:0,
      name: 'cancer',
      descripton: 'Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.These contrast with benign tumors, which do not spread to other parts of the body. Possible signs and symptoms include a lump, abnormal bleeding, prolonged cough, unexplained weight loss and a change in bowel movements.While these symptoms may indicate cancer, they may have other causes . Over 100 types of cancers affect humans.',
      bodyParts: ['Eyes', 'heart','Lips' ,'limbs'  , 'Chest' , 'Lungs'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' }],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
    },
    {
      id:1,
      name: 'flu',
      descripton: 'Bayer Aspirin is one of the most commonly used over-the-counter medications for pain relief and fever reduction. In addition, the American Heart Association (AHA) recommends aspirin use for people who have had a myocardial infarction (heart attack), unstable angina (recurrent chest pain), ischemic stroke (blood clot in brain) or transient ischemic attacks (strokes that resolve). The AHA further states that using aspirin can help prevent heart attacks and strokes. While Bayer Aspirin has many proven benefits, you should be aware of all of its ingredients',
      bodyParts: ['Eyes', 'Leg'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' }],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
    },
    {
      id:2,
      name: 'cold',
      descripton: 'Bayer Aspirin is one of the most commonly used over-the-counter medications for pain relief and fever reduction. In addition, the American Heart Association (AHA) recommends aspirin use for people who have had a myocardial infarction (heart attack), unstable angina (recurrent chest pain), ischemic stroke (blood clot in brain) or transient ischemic attacks (strokes that resolve). The AHA further states that using aspirin can help prevent heart attacks and strokes. While Bayer Aspirin has many proven benefits, you should be aware of all of its ingredients',
      bodyParts: ['Heart', 'Eyes'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' }],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
     },
    {
      id:3,
      name: 'heart attack',
      descripton: 'n infectious disease caused by an influenza virus.\r\nSymptoms can be mild to severe.The most common symptoms include: a high fever, runny nose, sore throat, muscle pains, headache, coughing, and \r\nfeeling tired.These symptoms typically begin two days after exposure to the virus',
      bodyParts: ['Leg', 'Heart'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
     } 
     
    ];
  constructor() { }
  getDiseases() {
    return this.diseases;
  }
  getDiseaseBodyParts(id: number) {
    return this.diseases[id].bodyParts;
  }
  getForbiddenDrugs(id: number) {
    return this.diseases[id].forbiddenDrugs;
  }
  getTreatedDrugs(id: number) {
    return this.diseases[id].treatedDrugs;
  }
  getById(id) {
    for (let i = 0; i < this.diseases.length; i++) {
      if (this.diseases[i].id == id) {
        this.disease= this.diseases[i];
      }
    }
    return this.disease;
  }
  

  delete(id:number){
    for(let i=0;i<this.diseases.length;i++){
      if(this.diseases[i].id==id){
        this.diseases.splice(id,1);
      }
    }

  }

  add(d:Idisease){
    this.diseases.push(d);
  }
  update(newDisease:Idisease){
    const oldDisease=this.getById(newDisease.id);
    oldDisease.name=newDisease.name;
    oldDisease.bodyParts=newDisease.bodyParts;
    oldDisease.descripton=newDisease.descripton;
    oldDisease.treatedDrugs=newDisease.treatedDrugs;
    oldDisease.forbiddenDrugs=newDisease.forbiddenDrugs;
  }

  Search(diseaseName) {
  // Search(diseaseName) {
  //   const index = this.diseases.findIndex(a => a.name == diseaseName);
  //   if (index > -1) {
  //     let disease = this.diseases[index];
  //     this.diseases =[];
  //     this.diseases.push(disease);
  //     //console.log(this.diseases);
  //   }
    
  //     return this.diseases;
  // }
  if(diseaseName !='' && diseaseName !=null && diseaseName.length > 0){
    let result:Idisease[]=[];
    result = this.diseases.filter(a=> a.name.toLowerCase().indexOf(diseaseName.toLowerCase())>-1);
    return result;
    }
    else{
      return this.diseases;
    }
    
}
}
