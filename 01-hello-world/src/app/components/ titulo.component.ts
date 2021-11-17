import {Component} from '@angular/core'


@Component(
    {
        selector: 'title-component',
        template: "<h1>{{title}}</h1>"
    }
)
export class TitleComponent {
    public title =  "Este es mi título"
}

