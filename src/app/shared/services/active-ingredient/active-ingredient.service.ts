import { Injectable } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { fail } from 'assert';
import { Http, HttpModule } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActiveIngredientService {

  // url = "http://localhost:53795/api/instructors";
  // activeIngredients: Iactiveingredient[] =[];

  activeIngredients: Iactiveingredient[] =
    [
      { 
        id: 0, 
        name: 'Paracetamol', 
        description: " is a medicine used to treat pain and fever. It is typically used for mild to moderate pain relief. Evidence for its use to relieve fever in children is mixed. It is often sold in combination with other medications, such as in many cold medications. In combination with opioid pain medication, paracetamol is also used for severe pain such as cancer pain and pain after surgery. It is typically used either by mouth or rectally but is also available intravenously. Effects last between two and four hours.", 
        drugs: [1, 2], 
        foodinteractions: [0, 1], 
        diseases: [1], 
        sideEffect: [1] 
      },
      { 
        id: 1, 
        name: 'Aminophylline', 
        description: "a compound of the bronchodilator theophylline with ethylenediamine in 2:1 ratio. The ethylenediamine improves solubility, and the aminophylline is usually found as a dihydrate.Aminophylline is less potent and shorter-acting than theophylline. Its most common use is in the treatment of airway obstruction from asthma or COPD. It is used off-label as a reversal agent during nuclear stress testing. Aminophylline is a nonselective adenosine receptor antagonist and phosphodiesterase inhibitor.", 
        drugs: [1], 
        foodinteractions: [0, 1], 
        diseases: [1], 
        sideEffect: [1] 
      },
      ];

  private activeIngredientsDisplay:Iactiveingredient[]=this.activeIngredients.slice();  
  activeing: Iactiveingredient;

  constructor() { }

  // getAll(){
  //   this.http.get<Iactiveingredient[]>(this.url).subscribe(res => { this.activeIngredients = res });
  //   return this.http.get<Iactiveingredient[]>(this.url);
  // }
  getAll(): Observable<Iactiveingredient[]> {
    return of(this.activeIngredients);
  }


  //   public getById(id) {
  //     return this.activeIngredients.find(activeIngredient => activeIngredients.id == id);
  // }

  getById(id) {
    for (let i = 0; i < this.activeIngredients.length; i++) {
      if (this.activeIngredients[i].id == id) {
        this.activeing = this.activeIngredients[i];
      }
    }
    return this.activeing;
  }


  // Delete(id: number){    
  //   const url = `${this.url}/${id}`;
  //   this.http.delete(url).subscribe(
  //     (isSuccess)=>
  //     {
  //       if(isSuccess)
  //       { 
  //         var i =this.activeIngredients.findIndex(a=> a.id === id);
  //         this.activeIngredients.splice(i,1);
  //         this.http.delete(url);
  //       }
  //     },
  //     (error)=> {
  //       alert('you can not delete this active ingredient since there are some drugs using this active ingredient);
  //     }
  //   );
  // }

  Delete(id) {
    let index = this.activeIngredients.findIndex(a => a.id === id);
    if (index > -1) {
      this.activeIngredients.splice(index, 1);
    }

  }


  // add(form): Observable<Iactiveingredient> {
  //   var instructor: Iinstructor; activeIngredient: Iactiveingredient
  //   activeIngredient = form.value;
  //   console.log(activeIngredient);
  //   return this.http.post<Iactiveingredient>(this.url, activeIngredient);
  // }

  Add(activeIngredientitem) {
    this.activeIngredients.push(activeIngredientitem)
  }


  // edit(activeIngredient): Observable<Iactiveingredient> {
  //   const url = `${this.url}/${activeIngredient.id}`;
  //   console.log(url);
  //   return this.http.put<Iinstructor>(url, activeIngredient);
  // }
  update(activeIngredient: Iactiveingredient) {

    const oldactiveing = this.getById(activeIngredient.id);
    oldactiveing.name = activeIngredient.name;
    oldactiveing.description = activeIngredient.description;
    oldactiveing.drugs = activeIngredient.drugs;
  }

  public getName(id: number): string {
    const index = this.activeIngredients.findIndex(a => a.id === id);
    if (index > -1) {
      return this.activeIngredients[index].name;
    }
  }


  search(name) {
    if(name !='' && name !=null && name.length > 0){
      this.activeIngredientsDisplay=[];
      this.activeIngredientsDisplay = this.activeIngredients.filter(a=> a.name.toLowerCase().indexOf(name.toLowerCase())>-1);
      }
      else{
        this.activeIngredientsDisplay = this.activeIngredients;
      }
      return this.activeIngredientsDisplay;
  }

  getAllNames() {
    let names: string[] = [];
    for (let i = 0; i < this.activeIngredients.length; i++) {
      names.push(this.activeIngredients[i].name);
    }
    return names;
  }

}
