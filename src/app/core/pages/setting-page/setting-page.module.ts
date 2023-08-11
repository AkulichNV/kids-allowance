import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/material.module';
import { SettingPageComponent } from './setting-page.component';
import { SettingPageRoutingModule } from './setting-page-routing.module';
import { ChangeUserComponent } from '../../components/change-user/change-user.component';
import { ChangeLanguageComponent } from '../../components/change-language/change-language.component';
import { ChangeThemeComponent } from '../../components/change-theme/change-theme.component';
import { LogoutComponent } from '../../components/logout/logout.component';


@NgModule({
  declarations: [
    SettingPageComponent,
    ChangeUserComponent,
    ChangeLanguageComponent,
    ChangeThemeComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SettingPageRoutingModule,
    FormsModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SettingPageModule { }
