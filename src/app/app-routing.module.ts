import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLayoutComponent} from "./shared/layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                ]
            },
            { path: 'auth', loadComponent: () => import('./pages/publico/login/login.component').then(m => m.LoginComponent) },
            { path: 'notfound', loadComponent: () => import('./shared/componentes/pagina-nao-encontrada/pagina-nao-encontrada.component') },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
