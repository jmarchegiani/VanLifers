import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class ArticleService{

	public articles : Article[];
	public _id : string;
	constructor(
		private _http : HttpClient
	){
	}

	getAuth(){
		return 'Basic ' + Buffer.from('vanlifers:eravo384agb74a3b7aTH').toString('base64');
	}

	ping(){
		return 'pong';
	}

	getArticles():Observable<any>{
		return this._http.get('https://backend.vanlifers.es:8443/get-articles');
	}

	getArticle(article_id : string):Observable<any>{
		return this._http.get('https://backend.vanlifers.es:8443/article/'+article_id)
	}

	getImage(image_id : string) : Observable<any>{
		return this._http.get('https://backend.vanlifers.es:8443/get-image/'+image_id)
	}

	savePost(post : any):Observable<any>{
		var body = {
			title : post.title,
			content : post.content,
			author : post.author,
			images : post.images
		}
		var header = {Authorization : this.getAuth()}
		var options = {
			body : body,
			headers : header
		}
		return this._http.post('https://backend.vanlifers.es:8443/save', options)
	}

}