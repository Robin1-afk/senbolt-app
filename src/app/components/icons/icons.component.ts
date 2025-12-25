import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
@Component({
    selector: 'app-icons',
    standalone: true,
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss',
    imports: [SharedModule]
})
export class IconsComponent {

}
