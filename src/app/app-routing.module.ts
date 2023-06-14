import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkComponent } from './homework/homework.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { TrainerregistrationComponent } from './trainerregistration/trainerregistration.component';
import { WithouttrianerComponent } from './withouttrianer/withouttrianer.component';
import { ChestComponent } from './chest/chest.component';
import { TricepsComponent } from './triceps/triceps.component';
import { BackComponent } from './back/back.component';
import { BicepsComponent } from './biceps/biceps.component';
import { ShouldersComponent } from './shoulders/shoulders.component';
import { CardioComponent } from './cardio/cardio.component';
import { LegComponent } from './leg/leg.component';
import { TrainerinterfaceComponent } from './trainerinterface/trainerinterface.component';
import { ClientinterfaceComponent } from './clientinterface/clientinterface.component';
import { ClientregistrationComponent } from './clientregistration/clientregistration.component';
import { NavmainComponent } from './navhomepage/navmain.component';
import { NavloginpageComponent } from './navloginpage/navloginpage.component';
import { NavregistrationpageComponent } from './navregistrationpage/navregistrationpage.component';
import { NavregistrationcommonComponent } from './navregistrationcommon/navregistrationcommon.component';
import { NavwithouttrainerComponent } from './navwithouttrainer/navwithouttrainer.component';
import { NavclientinterfaceComponent } from './navclientinterface/navclientinterface.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { NavtrainerlistComponent } from './navtrainerlist/navtrainerlist.component';
import { NavtrainerinterfaceComponent } from './navtrainerinterface/navtrainerinterface.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { AdminComponent } from './admin/admin.component';
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

const routes: Routes = [{path:'',component:HomeworkComponent},
{path:'loginpage',component:LoginpageComponent},
{path:'registrationpage',component:RegistrationpageComponent},
{path:'trainerregistration',component:TrainerregistrationComponent},
{path:'withouttrainer',component:WithouttrianerComponent},
{path:'chest',component:ChestComponent},
{path:'triceps',component:TricepsComponent},
{path:'back',component:BackComponent},
{path:'biceps',component:BicepsComponent},
{path:'shoulders',component:ShouldersComponent},
{path:'cardio',component:CardioComponent},
{path:'leg',component:LegComponent},
{path:'trainerinterface',component:TrainerinterfaceComponent},
{path:'clientinterface',component:ClientinterfaceComponent},
{path:'clientregistration',component:ClientregistrationComponent},
{path:'navmain',component:NavmainComponent},
{path:'navloginpage',component:NavloginpageComponent},
{path:'navregistrationpage',component:NavregistrationpageComponent},
{path:'navregistrationcommon',component:NavregistrationcommonComponent},
{path:'navwithouttrainer',component:NavwithouttrainerComponent},
{path:'navclientinterface',component:NavclientinterfaceComponent},
{path:'trainerlist',component:TrainerlistComponent},
{path:'navtrainerlist',component:NavtrainerlistComponent},
{path:'navtrainerinterface',component:NavtrainerinterfaceComponent},
{path:'navadmin',component:NavadminComponent},
{path:'admin',component:AdminComponent},
{path:'adminclient',component:AdminclientComponent},
{path:'admintrainer',component:AdmintrainerComponent},
{path:'navadminclient',component:NavadminclientComponent},
{path:'navadmintrainer',component:NavadmintrainerComponent},
{path:'trainlist',component:TrainlistComponent},
{path:'adminfeedback',component:FeedbackComponent},
{path:'navfeedback',component:NavfeedbackComponent},
{path:'feed',component:FeedComponent},
{path:'navadminfeed',component:NavadminfeedComponent},
{path:'navtrainerregistration',component:NavtrainerregistrationComponent},
{path:'navclientregistration',component:NavclientregistrationComponent},
{path:'trainerlogin',component:TrainerloginComponent},
{path:'clientlogin',component:ClientloginComponent},
{path:'navtrianerlogin',component:NavtrianerloginComponent},
{path:'navclientlogin',component:NavclientloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
