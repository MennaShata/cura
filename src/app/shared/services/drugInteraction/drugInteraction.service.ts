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
      description:'The interaction reduces the oxygen-carrying capacity of the blood to different organs, and combining the medication with acetaminophen may increase the risk.',
      interactionDegree:'Major'
    },
    {
      drug1Name:'panadol',
      drug2Name:'asprin',
      drug1Image:"./../../../assets/images/panadol1.jpg",
      drug2Image:"./../../../assets/images/panadol1.jpg",
      description:'Minor drug interactions do not usually cause harm or require a change in therapy. However, your healthcare provider can determine if adjustments to your medications are needed. ',
      interactionDegree:'Minor'
    }

  ];

constructor() { }
public checkInteraction(drugList:string[])
{
  return this.drugInteraction;
}

}
