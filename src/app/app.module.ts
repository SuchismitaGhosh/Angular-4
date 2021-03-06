import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myRoutes } from './myroutes/myroutes.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { SonComponent } from './family/son/son.component';
import { TodoComponent } from './family/todo/todo.component';
import { SortPipePipe } from './myPipes/sort-pipe.pipe';
import { TemplateFormComponent } from './forms/template/template-form/template-form.component';
import { ModelFormComponent } from './forms/template/model-form/model-form.component';
import { AutoSearchComponent } from './auto-search/auto-search.component';
import { searchFilterPipe } from './my-pipes/search-filter.pipe';
import { ConsumeLocalserviceComponent } from './consume/consume-localservice/consume-localservice.component';
import { localserviceService } from './myservices/localservice.service';
import { ConsumeLocalservice2Component } from './consume/consume-localservice2/consume-localservice2.component';
import { ConsumeRemoteserviceComponent } from './consume/consume-remoteservice/consume-remoteservice.component';
import { remoteserviceService } from './myservices/remoteservice.service';
import { BasicAnimationComponent } from './animation/basic-animation/basic-animation.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { FruitComponent } from './fruits/fruit/fruit.component';
import { Fruit2Component } from './fruits/fruit2/fruit2.component';
import { Fruit1Component } from './fruits/fruit1/fruit1.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { NuclearComponent } from './family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';
import { SetbgDirective } from './customDirective/setbg.directive';
import { UseDirectiveComponent } from './customDirective/use-directive/use-directive.component';
import { CrudDemoComponent } from './crud/crud-demo/crud-demo.component';
import { ProductComponent } from './crud/product/product.component';
import { UpdateProductComponent } from './crud/update-product/update-product.component';

const myFruits: Routes=[
  {
    path:'fruit',
    component:FruitComponent,
    children:[{
     path: 'fruit1',
     component: Fruit1Component,
    },
     {
    path: 'fruit2',
     component: Fruit2Component,
    }]
    
  }
]

// const myRoutes : Routes =[
//     {
//         path:'',
//         redirectTo: 'todo',
//         pathMatch:'full'
//     },
//     {
//       path:'nuclear',
//       component:NuclearComponent,
//       children:[ {
//         path:'father',
//         component: FatherComponent
//       },
//       {
//         path:'mother',
//         component: MotherComponent
//       },
//       {
//         path:'daughter',
//         component: DaughterComponent
//       },
//       {
//         path:'son',
//         component: SonComponent
//       }
//     ]
//     },
//       //   {
//       //   path:'father',
//       //   component: FatherComponent
//       // },
//       // {
//       //   path:'mother',
//       //   component: MotherComponent
//       // },
//       // {
//       //   path:'daughter',
//       //   component: DaughterComponent
//       // },
//       // {
//       //   path:'son',
//       //   component: SonComponent
//       // },
//       {
//         path:'todo',
//         component: TodoComponent
//       },
//       {
//         path:'template',
//         component: TemplateFormComponent
//       },
//       {
//         path:'model',
//         component: ModelFormComponent
//       },
//       {
//         path:'search',
//         component: AutoSearchComponent
//       },
//       {
//         path:'localservice',
//         component: ConsumeLocalserviceComponent
//       },
//       {
//         path:'localservice2',
//         component: ConsumeLocalservice2Component
//       },
//       {
//         path:'remoteservice',
//         component: ConsumeRemoteserviceComponent
//       },
//       {
//         path:'animation',
//         component: BasicAnimationComponent
//       },
//       {
//         path:'eventbinding',
//         component: ParentComponent
//       },
//       {
//         path:'fruit',
//         component: FruitComponent
//       },
//       {
//         path:'directive',
//         component: InbuiltdirectiveComponent
//       },
//       {
//         path:'customdirective',
//         component: UseDirectiveComponent
//       },
//       {
//         path:'**',
//         component:NotfoundComponent
//     }

// ]
@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    SonComponent,
    TodoComponent,
    SortPipePipe,
    TemplateFormComponent,
    ModelFormComponent,
    AutoSearchComponent,
    searchFilterPipe,
    ConsumeLocalserviceComponent,
    ConsumeLocalservice2Component,
    ConsumeRemoteserviceComponent,
    BasicAnimationComponent,
    ParentComponent,
    ChildComponent,
    FruitComponent,
    Fruit2Component,
    Fruit1Component,
    NotfoundComponent,
    NuclearComponent,
    InbuiltdirectiveComponent,
    SetbgDirective,
    UseDirectiveComponent,
    CrudDemoComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(myFruits)
    // RouterModule.forRoot([
    //   {
    //     path:'father',
    //     component: FatherComponent
    //   },
    //   {
    //     path:'mother',
    //     component: MotherComponent
    //   },
    //   {
    //     path:'daughter',
    //     component: DaughterComponent
    //   },
    //   {
    //     path:'son',
    //     component: SonComponent
    //   },
    //   {
    //     path:'todo',
    //     component: TodoComponent
    //   }
   
    
  ],
  providers: [localserviceService,remoteserviceService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
