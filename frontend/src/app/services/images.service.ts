import { Injectable, Query } from "@angular/core";
import { Images } from "../models/images.model";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ImagesService {

    constructor(private http: HttpClient) {
    }

    createImage(body: any): Observable<Images[]> {
        return this.http.post<Images[]>(`http://localhost:4200/api/image`, body);
    }

    getImageById(id: string): Observable<Images[]> {
        return this.http.get<Images[]>(`http://localhost:4200/api/image/${id}`);
    }

    getAllImages(categorie: string): Observable<Images[]>{        
        if(categorie === undefined) {
            categorie = ''; 
        }
            return this.http.get<Images[]>(`api/image?categorie=${categorie}`); 
    }

    updateImage(body: Images): Observable<Images> {
        return this.http.put<Images>(`http://localhost:4200/api/image/${body.id}`, body); 
    }

    deleteImage(id: string): Observable<Images[]> {
        return this.http.delete<Images[]>(`http://localhost:4200/api/image/${id}`);
    }

}