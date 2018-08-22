import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <div class="wrapper">
        <sidebar></sidebar>
        <div id="content">
          <navbar></navbar>
          <router-outlet></router-outlet>
          <footer></footer>
        </div>
      </div>
      <div class="overlay"></div>
    `
})
export class AppComponent {}
