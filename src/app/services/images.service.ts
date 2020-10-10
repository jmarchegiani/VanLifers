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
        private _http : HttpClient
        ){
    }

    getAuth () {
        return 'Basic ' + Buffer.from('vanlifers:eravo384agb74a3b7aTH').toString('base64');
    }

    uploadImage(image: File):Observable<any>{
        const formData = new FormData();

        formData.append('file0', image);
        var header = {
            Authorization : this.getAuth()
        }
        var options = {
            body : formData,
            headers : header
        }

        return this._http.post("https://backend.vanlifers.es:8443/upload-image", options);
    }
}