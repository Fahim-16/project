import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeworkComponent } from './homework/homework.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { TrainerregistrationComponent } from './trainerregistration/trainerregistration.component';
import { WithouttrianerComponent } from './withouttrianer/withouttrianer.component';
import { ChestComponent } from './chest/chest.component';
import { CardioComponent } from './cardio/cardio.component';
import { TricepsComponent } from './triceps/triceps.component';
import { BicepsComponent } from './biceps/biceps.component';
import { ShouldersComponent } from './shoulders/shoulders.component';
import { BackComponent } from './back/back.component';
import { LegComponent } from './leg/leg.component';
import { TrainerinterfaceComponent } from './trainerinterface/trainerinterface.component';
import { ClientinterfaceComponent } from './clientinterface/clientinterface.component';
import { ClientregistrationComponent } from './clientregistration/clientregistration.component';
import { NavmainComponent } from './navhomepage/navmain.component';
import { NavloginpageComponent } from './navloginpage/navloginpage.component';
import { NavregistrationpageComponent } from './navregistrationpage/navregistrationpage.component';
import { NavregistrationcommonComponent } from './navregistrationcommon/navregistrationcommon.component';
import { NavwithouttrainerComponent } from './navwithouttrainer/navwithouttrainer.component';
import { NavcbbtlscComponent } from './navcbbtlsc/navcbbtlsc.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavclientinterfaceComponent } from './navclientinterface/navclientinterface.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { NavtrainerlistComponent } from './navtrainerlist/navtrainerlist.component';
import { NavtrainerinterfaceComponent } from './navtrainerinterface/navtrainerinterface.component';
import { AdminComponent } from './admin/admin.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { AdminclientComponent } from './adminclient/adminclient.component';
import { AdmintrainerComponent } from './admintrainer/admintrainer.component';
import { NavadminclientComponent } from './navadminclient/navadminclient.component';
import { NavadmintrainerComponent } from './navadmintrainer/navadmintrainer.component';
import { TrainlistComponent } from './trainlist/trainlist.component';
import { FeedbackComponent } from './adminfeedback/feedback.component';
import { NavfeedbackComponent } from './navfeedback/navfeedback.component';
import { FeedComponent } from './feed/feed.component';
import { NavadminfeedComponent } from './navadminfeed/navadminfeed.component';
import { NavtrainerregistrationComponent } from './navtrainerregistration/navtrainerregistration.component';
import { NavclientregistrationComponent } from './navclientregistration/navclientregistration.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { NavtrianerloginComponent } from './navtrianerlogin/navtrianerlogin.component';
import { NavclientloginComponent } from './navclientlogin/navclientlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent,
    LoginpageComponent,
    RegistrationpageComponent,
    TrainerregistrationComponent,
    WithouttrianerComponent,
    ChestComponent,
    CardioComponent,
    TricepsComponent,
    BicepsComponent,
    ShouldersComponent,
    BackComponent,
    LegComponent,
    TrainerinterfaceComponent,
    ClientinterfaceComponent,
    ClientregistrationComponent,
    NavmainComponent,
    NavloginpageComponent,
    NavregistrationpageComponent,
    NavregistrationcommonComponent,
    NavwithouttrainerComponent,
    NavcbbtlscComponent,
    NavclientinterfaceComponent,
    TrainerlistComponent,
    NavtrainerlistComponent,
    NavtrainerinterfaceComponent,
    AdminComponent,
    NavadminComponent,
    AdminclientComponent,
    AdmintrainerComponent,
    NavadminclientComponent,
    NavadmintrainerComponent,
    TrainlistComponent,
    FeedbackComponent,
    NavfeedbackComponent,
    FeedComponent,
    NavadminfeedComponent,
    NavtrainerregistrationComponent,
    NavclientregistrationComponent,
    ClientloginComponent,
    TrainerloginComponent,
    NavtrianerloginComponent,
    NavclientloginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
