import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatGridListModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';



const routes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent },  
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }),
      FlexLayoutModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
