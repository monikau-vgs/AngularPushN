import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'

import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { ToastrModule }   from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { Ng2ImgMaxModule } from 'ng2-img-max';
import { SupportComponent } from './support/support.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { EngagementComponent } from './engagement/engagement.component';
import { MyDatePickerModule } from 'mydatepicker';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { SearchComponent } from './search/search.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './shared/messaging.service';
import { AsyncPipe } from '../../node_modules/@angular/common';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   { path: 'opportunity', component: OpportunityComponent },
     { path: 'search', component: SearchComponent },

      { path: 'engagement', component: EngagementComponent },
    { path: 'home', component: HomeComponent },


]

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    HomeComponent,


    SupportComponent,
    EngagementComponent,
    OpportunityComponent,
    SearchComponent


  ],
  imports: [
    MyDatePickerModule,
    BrowserModule,
    FormsModule,
     CalendarModule,
     AngularFontAwesomeModule,

    HttpClientModule,
    Ng2ImgMaxModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

     AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),


    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AuthenticationService, AuthGuardService,MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
