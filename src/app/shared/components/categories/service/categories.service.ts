import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories(){
    return ['Massagem 1', 'Massagem2'];
  }
  constructor() { }
}
