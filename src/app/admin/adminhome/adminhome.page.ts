import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '/adminhomepage',
      icon: 'easel'
    },
    {
      title: 'Appointments',
      url: '/adminschedule',
      icon: 'calendar'
    },
    {
      title: 'Services',
      url: '/adminservices',
      icon: 'person'
    },
    {
      title: 'Logout',
      url: '/intro',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private menu: MenuController,

    ) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.platform.ready().then();
  }

  openMenu() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
    }

}
