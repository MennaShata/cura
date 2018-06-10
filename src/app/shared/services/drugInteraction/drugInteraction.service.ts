import { Injectable } from '@angular/core';
import { IdrugInteraction } from '../../models/interfaces/IdrugInteraction';
@Injectable({
  providedIn: 'root'
})
export class DrugInteractionService {
  public drugInteraction:IdrugInteraction[]=[
    {
      drug1Name:'panadol',
      drug2Name:'antinal',
      drug1Image:"./../../../assets/images/panadol1.jpg",
      drug2Image:"./../../../assets/images/panadol1.jpg",
      description:'ay kalam fhfh fhhf fhhfhf fhfhhf hfhfhhf fhhfhhfh vyvybfbf',
      interactionDegree:'Major'
    },
    {
      drug1Name:'panadol',
      drug2Name:'asprin',
      drug1Image:"./../../../assets/images/panadol1.jpg",
      drug2Image:"./../../../assets/images/panadol1.jpg",
      description:'ay kalam fhfh fhhf fhhfhf fhfhhf hfhfhhf fhhfhhfh vyvybfbf',
      interactionDegree:'Minor'
    }

  ];

constructor() { }
public checkInteraction(drugList:string[])
{
  return this.drugInteraction;
}

}
