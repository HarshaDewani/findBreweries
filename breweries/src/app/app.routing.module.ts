import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'not-found', component: PageNotFoundComponent
    },
    {
        path: 'contact-us', component: ContactUsComponent
    },
    {
        path: 'shopping', component: ShoppingComponent
    },
    {
        path: '**', redirectTo: '/not-found'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}