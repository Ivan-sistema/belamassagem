import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[] = [];


  constructor(private categoriesService: CategoriesService) { 
    this.categoriesService = categoriesService;
  }

  ngOnInit(): void {
  }

}
