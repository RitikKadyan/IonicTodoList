import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  async finish(){
    await this.storage.set('tutorialComplete', true);
  }

  ngOnInit() {
  }

}
