import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-assignment',
  templateUrl: './td-assignment.component.html',
  styleUrls: ['./td-assignment.component.css']
})
export class TdAssignmentComponent implements OnInit {
  @ViewChild('formElement') assignmentForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = this.subscriptions[1];

  formData = {
    email: '',
    subscription: '',
    password: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formData.email = this.assignmentForm.value.email;
    this.formData.subscription = this.assignmentForm.value.subscription;
    this.formData.password = this.assignmentForm.value.password;
  }
}
