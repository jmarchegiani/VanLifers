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

	ping(){
		return 'pong';
	}

	getArticles():Observable<any>{
		return this._http.get('http://34.224.218.231:3900/get-articles');
	}

	getArticle(article_id : string):Observable<any>{
		return this._http.get('http://34.224.218.231:3900/article/'+article_id)
	}

	getImage(image_id : string) : Observable<any>{
		return this._http.get('http://34.224.218.231:3900/get-image/'+image_id)
	}

	savePost(post : any):Observable<any>{
		var body = {
			title : post.title,
			content : post.content,
			author : post.author,
			images : post.images
		}
		return this._http.post('http://34.224.218.231:3900/save', body)
	}

}