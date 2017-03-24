import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginModel } from '../core/entities';
import { AuthService } from "../../core/services";

@Component({
	selector: 'login-form',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent{

    constructor(private router: Router, private authService: AuthService){
    }

	private email: string;
	private password: string

	private login(){
		this.authService.login(this.email, this.password);
		this.router.navigate(['/']);
	}
}