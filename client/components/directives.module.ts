import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap';


import { RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
    imports: [
        CommonModule,
        CollapseModule,
        AuthModule,

        RouterModule,

        PerfectScrollbarModule,
    ],
    declarations: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,

    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
    ]
})
export class DirectivesModule {}
