import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nehomepage',
  templateUrl: './nehomepage.page.html',
  styleUrls: ['./nehomepage.page.scss'],
})
export class NEHomepagePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goToPage(url: string){
    this.navController.navigateRoot(url)
  }

}
