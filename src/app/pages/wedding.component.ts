import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css'],
})
export class WeddingComponent implements OnInit {
  
  constructor() {
    var sound = new Howl({
      src: ['./assets/sound/sample.mp3'],
      html5: true,
    });

    sound.play();
  }

  ngOnInit(): void {}
}
