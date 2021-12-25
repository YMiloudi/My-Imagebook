import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { NavItem } from './navItems.component';

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.css']
})
export class FilterPostsComponent implements OnInit {

  version = VERSION;
  navItems : NavItem[] = [
    {
      displayName: 'Menu',
      iconName: 'close',
      children: [
        {
          displayName: 'Display images by category',
          iconName: '',
          children: [
            {
              displayName: 'Food',
              iconName: '',
            },
            {
              displayName: 'Travel',
              iconName: '',
            },
            {
              displayName: 'Quotes',
              iconName: '',
            }
          ]
        },
        {
          displayName: 'Deleted images',
          iconName: '',
        }
      ]
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
