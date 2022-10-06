import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {AppComponent} from "./app.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: 'creation-operators',
    loadChildren: () => import('./creation-operators/creation-operators.module').then(x => x.CreationOperatorsModule)
  },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
