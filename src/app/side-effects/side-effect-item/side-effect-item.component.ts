import { Component, OnInit, Input } from '@angular/core';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';
import { SideeffectService } from '../../shared/services/side-effect/sideeffect.service';

@Component({
  selector: 'app-side-effect-item',
  templateUrl: './side-effect-item.component.html',
  styleUrls: ['./side-effect-item.component.css']
})
export class SideEffectItemComponent implements OnInit {

 @Input() public sideeffect :Isideeffect;

  constructor(private sideeffectService:SideeffectService) {
   }

  ngOnInit() {
  }
  public delete(id){
    this.sideeffectService.Delete(id);
   }
}
