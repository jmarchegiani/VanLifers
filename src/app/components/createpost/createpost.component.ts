import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'
import { ImagesService } from '../../services/images.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';

class ImageSnippet {
	constructor(public src: string, public file: File) { }
}

@Component({
	selector: 'app-createpost',
	templateUrl: './createpost.component.html',
	styleUrls: ['./createpost.component.css'],
	providers: [ArticleService, ImagesService]
})
export class CreatepostComponent implements OnInit {
	public post: any;
	selectedFile: ImageSnippet;

	constructor(
		private _articleService: ArticleService,
		private _imagesService: ImagesService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.post = {
			title: '',
			content: '',
			author: '',
			images : [],
		};
	}

	ngOnInit(): void {
	}

	uploadImages(imageInput: any) {
		const file: File = imageInput.files[0];
		const reader = new FileReader();

		reader.addEventListener('load', (event: any) => {

			this.selectedFile = new ImageSnippet(event.target.result, file);

			this._imagesService.uploadImage(this.selectedFile.file).subscribe(
				(res) => {
					this.post.images.push(res.file_name)
				},
				(err) => {
					console.log(err)
					alert("No se ha podido cargar la imagen")
				})
		});

		reader.readAsDataURL(file);
	}

	onSubmit() {
		this._router.navigate(['/blog'])
		console.log(this.post.images)
		this._articleService.savePost(this.post).subscribe(
			response => {
				if(response.status == "Success"){
					this._router.navigate(['/create-success']);
				}
			},
			error => {
				console.log(error)
			}
		)
		this._router.navigate(['/blog'])
	}

};
