import { MainContainerComponent } from './../components/MAIN-CONTAINER/main-container.component';
import { HomepageComponent } from './../pages/homepage/homepage.component';
import { PlatformComponent } from './../pages/platform/platform.component';
import { MostPlayedComponent } from './../pages/most-played/most-played.component';
import { DeveloperComponent } from './../pages/developer/developer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path:'', redirectTo: 'homepage', pathMatch: 'full'},
    { path: '', component: MainContainerComponent, children: [
        { path: 'homepage', component: HomepageComponent },
        { path: 'platform', component: PlatformComponent },
        { path: 'most-played', component: MostPlayedComponent },
        { path: 'developer', component: DeveloperComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
