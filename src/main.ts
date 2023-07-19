import 'zone.js/dist/zone';
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'form-field-prefix-suffix-example',
  standalone: true,
  imports: [NgFor, CommonModule],
  template: `<div *ngFor="let task of tasks">
  <div *ngFor="let value of task.value; let j = index;">
      <input
        matInput
        [value]="task.value[j].v"
        (change)="changeEventRef($event, task, j)"
      />
    {{task.value[j].v}}
  </div>
</div>
<div>------Below template has bug------</div>
<div *ngFor="let task of tasks_plain">
  <br />
  <div *ngFor="let value of task.value; let j = index;">
      <input
        matInput
        [value]="task.value[j]"
        (change)="changeEvent($event, task, j)"
      />
    {{task.value[j]}}
  </div>
</div>
`,
})
export class FormFieldPrefixSuffixExample {
  tasks = [
    {
      title: 'Task 1',
      value: [{ v: 'Hello' }, { v: 'ppp' }, { v: 'popo' }],
    },
  ];
  tasks_plain = [
    {
      title: 'Task 1',
      value: ['Hello', 'ppp', 'popo'],
    },
  ];

  changeEvent(e: any, task: any, j: any) {
    task.value[j] = e.target.value;
  }

  changeEventRef(e: any, task: any, j: any) {
    task.value[j].v = e.target.value;
  }
}
@Component({
  selector: 'app',
  imports: [FormFieldPrefixSuffixExample],
  template: `<form-field-prefix-suffix-example/>`,
  standalone: true,
})
class App {}
bootstrapApplication(App);
