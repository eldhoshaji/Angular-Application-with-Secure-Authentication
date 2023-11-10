import { Component, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() size = 'lg'; //sm, lg
  @Input() icon: any = faCoffee;
  @Input() title: any;
  @Input() isSelected = false;


}
