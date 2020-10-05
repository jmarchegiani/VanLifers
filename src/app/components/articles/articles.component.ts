import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'
import { Router } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.css'],
	providers : [ArticleService]
})
export class ArticlesComponent implements OnInit {
	public articles : Article[];
	constructor(
		private _articleService : ArticleService,
		private _router: Router
	) {
	}

	ngOnInit() {
		this._articleService.getArticles().subscribe(
			response => {
				if(response.articles){
					this.articles = response.articles;
				}else{
				}
			},
			error => {
				console.log(error);
			}
		);
		console.log(this.articles)
	};

	toCreate() {
		this._router.navigate(['/create'])
	}
}

