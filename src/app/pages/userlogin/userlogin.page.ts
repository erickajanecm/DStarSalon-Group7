/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage implements OnInit {
  credentials: FormGroup;

    constructor(
      private fb: FormBuilder,
      private authService: AuthenticationService,
      private alertController: AlertController,
      private router: Router,
      private loadingController: LoadingController
    ) { }

    ngOnInit() {
      this.credentials = this.fb.group({
        email: ['user@user.com', [Validators.required, Validators.email]],
        password: ['user123', [Validators.required, Validators.minLength(6)]],
      });
    }

    async login() {
      const loading = await this.loadingController.create();
      await loading.present();

      this.authService.login(this.credentials.value).subscribe(
        async (res) => {
          await loading.dismiss();
          this.router.navigateByUrl('/login', { replaceUrl: true });
        }, async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Login Success',
            buttons: ['OK'],
          });

          await alert.present();
        }
      );
    }

    get email() {
      return this.credentials.get('email');
    }

    get password() {
      return this.credentials.get('password');
    }
  }
