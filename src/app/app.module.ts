import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoverComponent } from './cover/cover.component';
import { HamburgerComponent } from './sidebar/hamburger/hamburger.component';
import { MediaComponent } from './sidebar/media/media.component';
import { WelcomeComponent } from './cover/welcome/welcome.component';
import { MenuBarComponent } from './cover/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CoverComponent,
    HamburgerComponent,
    MediaComponent,
    WelcomeComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
