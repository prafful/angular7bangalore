import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";



import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
                      {
                        path:'',
                        redirectTo:'task',
                        pathMatch:'full'
                      },
                      {
                        path:'family',
                        component:GrandParentComponent,
                        children:[
                          {
                            path:'',
                            redirectTo:'father',
                            pathMatch:'full'
                          },
                          {
                            path:'father',
                            component:FatherComponent
                          },
                          {
                            path:'mother',
                            component:MotherComponent
                          }
                        ]
                      },
                      {
                        path:'task',
                        component:TaskManagerComponent
                      },
                      {
                        path:'**',
                        component:NotFoundComponent
                      }
                    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
