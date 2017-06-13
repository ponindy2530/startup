import { PSharedModule } from './p/p-shared/p-module/p-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dmdashboard', loadChildren: './p/dmdashboard/dmdashboard.module#DmdashboardModule' },
  { path: 'dmin', loadChildren: './p/dmin/dmin.module#DminModule' },
  { path: 'dmout', loadChildren: './p/dmout/dmout.module#DmoutModule' },
  { path: 'dmmain', loadChildren: './p/dmmain/dmmain.module#DmmainModule' },
  { path: 'dmproduct', loadChildren: './p/product/product.module#ProductModule' },
  { path: 'dmsetting', loadChildren: './p/setting/setting.module#SettingModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    PSharedModule.forRoot()
  ],
  exports: [RouterModule, PSharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
