import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./auth/components/login/login.component";
import { RegisterComponent } from "./auth/components/register/register.component";
import { ResetPasswordComponent } from "./auth/components/reset-password/reset-password.component";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    }
];

@NgModule({
    imports:
        [
            RouterModule.forRoot(routes),
            CommonModule
        ],
        
    exports: [RouterModule]
})

export class AppRoutingModule { 
    
}
