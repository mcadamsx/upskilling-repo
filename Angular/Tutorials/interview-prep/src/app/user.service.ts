import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public baseUrl = "https://dummyjson.com/products"
    constructor(private http: HttpClient ){}

    public getData():Observable <any>{
        return this.http.get(`${this.baseUrl}`)
    }
}