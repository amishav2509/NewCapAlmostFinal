import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './shared/list/list.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './Authguard/auth.guard';
import { UseraccountService } from './Services/useraccount.service';
import {HttpClientModule} from '@angular/common/http';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { PhotosComponent } from './photos/photos.component';
import { FriendprofileComponent } from './friendprofile/friendprofile.component';
import { ChatsComponent } from './chats/chats.component';
import { FriendrequestComponent } from './friendrequest/friendrequest.component';
import { ButtonComponent } from './shared/button.component';
import { FriendListComponent } from './friend-list/friend-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomepageComponent,
    TimelineComponent,
    RegistrationComponent,
    WelcomeComponent,
    PersonaldetailsComponent,
    ChangepasswordComponent,
    DeleteaccountComponent,
    PhotosComponent,
    FriendprofileComponent,
    ChatsComponent,
    FriendrequestComponent,
    ButtonComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'chatsComponent',component:ChatsComponent},
      {path:'friendListComponent',component:FriendListComponent},
      {path:'friendrequestComponent',component:FriendrequestComponent},
      {path:'friendprofileComponent',component:FriendprofileComponent,canActivate:[AuthGuard]},
      {path:'photosComponent',component:PhotosComponent,canActivate:[AuthGuard]},
      {path:'deleteaccountComponent',component:DeleteaccountComponent,canActivate:[AuthGuard]},
      {path:'changepasswordComponent',component:ChangepasswordComponent,canActivate:[AuthGuard]},
      {path:'personaldetailsComponent',component:PersonaldetailsComponent,canActivate:[AuthGuard]},
      {path:'timelineComponent',component:TimelineComponent,canActivate:[AuthGuard]},
      {path:'registrationComponent',component:RegistrationComponent},
      {path:'homepageComponent',component:HomepageComponent,canActivate:[AuthGuard]},
      {path:'welcomeComponent',component: WelcomeComponent},
      {path:'',redirectTo:'welcomeComponent',pathMatch:'full'},
    ]),
  ],
  providers: [AuthGuard,UseraccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
