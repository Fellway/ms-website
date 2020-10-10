import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoverComponent } from './cover/cover.component';
import { HamburgerComponent } from './sidebar/hamburger/hamburger.component';
import { MediaComponent } from './sidebar/media/media.component';
import { WelcomeComponent } from './cover/welcome/welcome.component';
import { MenuBarComponent } from './cover/menu-bar/menu-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArrowComponent } from './cover/arrow/arrow.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CoverComponent,
    HamburgerComponent,
    MediaComponent,
    WelcomeComponent,
    MenuBarComponent,
    AboutMeComponent,
    ArrowComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
