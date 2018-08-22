import { Component } from '@angular/core';

import PerfectScrollbar from 'perfect-scrollbar';



@Component({
    selector: 'sidebar',
    template: require('./sidebar.html'),
    styles: [require('./sidebar.scss')]
})

export class SidebarComponent {
    constructor() {

    }

    ngOnInit(){
      const ps = new PerfectScrollbar('#sidebar', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20
      });
    }

}
