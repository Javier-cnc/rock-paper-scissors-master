import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
