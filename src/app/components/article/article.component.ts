import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../services/article.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers : [ArticleService]
})
export class ArticleComponent implements OnInit {
	public article : Article;
	public article_id : string;

	constructor(
		private _route : ActivatedRoute,
		private _router : Router,
		private _articleService : ArticleService
	){
		this._route.params.subscribe((params : Params) => {
			this.article_id = params.id
		});
	}

	ngOnInit(): void {
		this._articleService.getArticle(this.article_id).subscribe(
			response => {
				this.article = response.article;
			},
			error => {

			}
		)
		
	}

}
