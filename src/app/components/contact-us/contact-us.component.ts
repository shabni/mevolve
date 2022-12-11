import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
	theForm: FormGroup;

	constructor() {
		this.theForm = new FormGroup({
			name: new FormControl('', Validators.required),
			email: new FormControl('', Validators.required),
			message: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {
	}

	onSendMessage(): void {
		console.log(this.theForm.value);
	}
}
