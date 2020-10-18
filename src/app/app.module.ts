import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CoverComponent} from './components/cover/cover.component';
import {HamburgerComponent} from './components/sidebar/hamburger/hamburger.component';
import {MediaComponent} from './components/sidebar/media/media.component';
import {WelcomeComponent} from './components/cover/welcome/welcome.component';
import {MenuBarComponent} from './components/cover/menu-bar/menu-bar.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ArrowComponent} from './components/cover/arrow/arrow.component';
import {CareerComponent} from './components/career/career.component';
import {SkillsComponent} from './components/skills/skills.component';
import {FooterComponent} from './components/footer/footer.component';

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
    CareerComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

