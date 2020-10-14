import { Component, ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular'

import { ArticleComponent } from './components/article/article.component'
import { ArticlesComponent } from './components/articles/articles.component'
import { CreatepostComponent } from './components/createpost/createpost.component'
import { ServiciosComponent } from './components/servicios/servicios.component'

const appRoutes : Routes = [
    {path : '', component : ArticlesComponent},
    {path : 'article/:id', component : ArticleComponent},
    {path : 'blog', component : ArticlesComponent},
    {path : 'create', component : CreatepostComponent, canActivate : [OktaAuthGuard]},
    {path : 'implicit/callback', component : OktaCallbackComponent},
    {path : 'servicios', component : ServiciosComponent}
]

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);