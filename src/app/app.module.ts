import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing'
import { FormsModule } from '@angular/forms'
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { TestingComponent}  from './components/test-component/test-component.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleComponent } from './components/article/article.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { SuccessComponent } from './components/success/success.component';
import { ServiciosComponent } from './components/servicios/servicios.component'

const oktaConfig = {
	issuer: 'https://dev-983675.okta.com/oauth2/default',
	clientId: '0oa88psvHHIVFwNTv5d5',
	redirectUri: window.location.origin + '/implicit/callback',
	pkce: true
}

@NgModule({
	declarations: [
		AppComponent,
		TestingComponent,
		ImagenesComponent,
		HeaderComponent,
		SliderComponent,
		ArticlesComponent,
		FooterComponent,
		SidebarComponent,
		ArticleComponent,
		CreatepostComponent,
		SuccessComponent,
		ServiciosComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		routing,
		OktaAuthModule
	],
	providers: [appRoutingProviders, {provide: OKTA_CONFIG, useValue : oktaConfig}],
	bootstrap: [AppComponent, TestingComponent]
})
export class AppModule { }
