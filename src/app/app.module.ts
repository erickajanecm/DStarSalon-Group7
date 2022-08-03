import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import firebase + enviornment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC2Eb2kgqEf0GwKTASsbENnTYmXTWak8AI',
      authDomain: 'dss-testing-c45a9.firebaseapp.com',
      databaseURL: 'https://dss-testing-c45a9-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'dss-testing-c45a9',
      storageBucket: 'dss-testing-c45a9.appspot.com',
      messagingSenderId: '501024335443',
      appId: '1:501024335443:web:d2fb75fc597787db2908a6',
      measurementId: 'G-R55F7VJXP5'
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}


