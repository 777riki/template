import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Servizi } from './components/servizi/servizi';
import { Chisiamo } from './components/chisiamo/chisiamo';
import { Gallery } from './components/gallery/gallery';
import { Contatti } from './components/contatti/contatti';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'servizi', component: Servizi},
    {path: 'chisiamo', component: Chisiamo},
    {path: 'gallery', component: Gallery},
    {path: 'contatti', component: Contatti}
];
