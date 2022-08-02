import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage {
  constructor(private platform: Platform){}
    exitApp(){
      this.platform.backButton.subscribeWithPriority(5, () =>
      {});
   }
}


