import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';


const appRoutes: Routes = [
  { path: 'job-list', component: JobListComponent },
  { path: '',
    redirectTo: '/job-list',
    pathMatch: 'full'
  },
  { path: '**', component: JobListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
