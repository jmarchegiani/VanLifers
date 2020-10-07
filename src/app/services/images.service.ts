import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class ImagesService{

	public articles : Article[];
    public _id : string;
    
    constructor(
        private _http : HttpClient){
    }

    uploadImage(image: File):Observable<any>{
        const formData = new FormData();

        formData.append('file0', image);

        return this._http.post("http://54.226.71.128:3900/upload-image", formData);
    }
}