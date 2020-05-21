import { Component } from '@angular/core';

@Component({
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.less']
})
export class FirstConfigStepOneComponent{
  public themes = ['Music', 'Movies', 'Techno', 'Business', 'Slang', 'Family', 'Idioms', 'Health', 'Art', 'Animals', 'Games', 'Basic'];
}
