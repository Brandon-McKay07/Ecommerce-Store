//services are used to share data across components

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
}) 
export class CategoriesService{
    constructor(private HttpClient: HttpClient) {}

    getCategories() {
        return this.HttpClient.get<any[]>('../../assets/json/categories.json')
        //  consumes the data from the user.json file
    // once it gets data from HTTP client it returns Observable
    //called within the components


    }
    
    
} 