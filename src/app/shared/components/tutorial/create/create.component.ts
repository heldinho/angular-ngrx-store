import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Tutorial } from '../../../store/models/tutorial.model';
import * as TutorialActions from '../../../store/actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addTutorial(name: string, url: string) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name, url }));
  }
}
