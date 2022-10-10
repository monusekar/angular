import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe','this is simply a test','https://media.istockphoto.com/photos/brazilian-fish-stew-moqueca-picture-id1320857678?b=1&k=20&m=1320857678&s=170667a&w=0&h=vCOmZnpA2SVhaypcER4WrhfLna_JpmhL0ldC_OTHd58='),
    new Recipe('A test recipe','this is simply a test','https://media.istockphoto.com/photos/brazilian-fish-stew-moqueca-picture-id1320857678?b=1&k=20&m=1320857678&s=170667a&w=0&h=vCOmZnpA2SVhaypcER4WrhfLna_JpmhL0ldC_OTHd58=')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
