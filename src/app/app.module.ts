import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumberSortPipePipe } from './myPipes/number-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';
import { ConsumeLocalService2Component } from './consumeService/consume-local-service2/consume-local-service2.component';
import { ConsumeRemoteDataComponent } from './remote/consume-remote-data/consume-remote-data.component';


@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe,
    NumberSortPipePipe,
    ConsumeLocalService1Component,
    ConsumeLocalService2Component,
    ConsumeRemoteDataComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
                        path:'consumeLocal1',
                        component:ConsumeLocalService1Component
                      },
                      {
                        path:'consumeLocal2',
                        component:ConsumeLocalService2Component
                      },
                      {
                        path:'remoteData',
                        component:ConsumeRemoteDataComponent
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
