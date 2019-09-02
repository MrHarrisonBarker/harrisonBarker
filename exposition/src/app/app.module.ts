import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HomeComponent } from './home/home.component';
import { ShadowDirective } from './shadow.directive';
import { DetailsComponent } from './details/details.component';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import {JwBootstrapSwitchNg2Module} from "jw-bootstrap-switch-ng2";

@NgModule({
  declarations: [
    AppComponent,
    ProjectPreviewComponent,
    ProjectDetailsComponent,
    HomeComponent,
    ShadowDirective,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: (): MarkedOptions => {
          return {
            renderer: new MarkedRenderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
          };
        }
      }
    }),
    JwBootstrapSwitchNg2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
