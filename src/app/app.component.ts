import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyABdyA6Tdgm8AqDqi7em3_SD2fX-rtX88w",
      authDomain: "wld001.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
