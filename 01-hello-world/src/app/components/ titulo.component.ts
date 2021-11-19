import {Component} from '@angular/core'


@Component(
    {
        selector: 'title-component',
        template: "<h1>{{title}}</h1>",
        // template: "<h1>**title**</h1>",
        // interpolation: ['**', '**']
    }
)
export class TitleComponent {
    public title =  "Este es mi título"
}

