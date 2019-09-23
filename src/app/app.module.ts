import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SalvarSugestoesPageModule} from './sugestoes/salvar-sugestoes/salvar-sugestoes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireDatabaseModule, SalvarSugestoesPageModule,
AngularFireModule.initializeApp({

      apiKey: "AIzaSyDgd8oS6pHlXEiXhc05Pt7B0C3mRZvIqnE",
      authDomain: "neide-8954f.firebaseapp.com",
      databaseURL: "https://neide-8954f.firebaseio.com",
      projectId: "neide-8954f",
      storageBucket: "neide-8954f.appspot.com",
      messagingSenderId: "985694374104",
      appId: "1:985694374104:web:ebffe18816c602e8"
})
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
