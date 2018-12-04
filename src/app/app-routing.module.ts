import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';


const myroutes: Routes = [
           
            {
              path:'family',
              component:GrandParentComponent
            },
            {
              path:'task',
              component:TaskManagerComponent
            }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
