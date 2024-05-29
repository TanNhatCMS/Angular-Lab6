import {ApplicationConfig, Injectable} from '@angular/core';
import {provideRouter, RouterStateSnapshot, Routes, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {Bai1Component} from "./bai1/bai1.component";
import {Bai2Component} from "./bai2/bai2.component";



const routes: Routes = [
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: 'index.html', title: 'Trang chủ', component: HomeComponent},
  {path: 'Lab6_1.html', title: 'Bài 1', component: Bai1Component},
  {path: 'Lab6_2.html', title: 'Bài 2', component: Bai2Component},
  {path: '**', redirectTo: ''}
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Angular | Lab6 - ${title}`);
    }
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};
