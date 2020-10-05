import { Component, ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ArticleComponent } from './components/article/article.component'
import { ArticlesComponent } from './components/articles/articles.component'
import { CreatepostComponent } from './components/createpost/createpost.component'

const appRoutes : Routes = [
    {path : '', component : ArticlesComponent},
    {path : 'article/:id', component : ArticleComponent},
    {path : 'blog', component : ArticlesComponent},
    {path : 'create', component : CreatepostComponent}
]

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);