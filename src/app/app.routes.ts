import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductsDetail } from './pages/products-detail/products-detail';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { EditStory } from './pages/edit-story/edit-story';
import { ViewStory } from './pages/view-story/view-story';
export const routes: Routes = [
    {
        path: '',
        component:Home,
    },
    {
        path:'about',
        component:About,
        
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'product',
        component:Products
    },
    {
        path:'product/:slug',
        component:ProductsDetail
    },
    {
        path:'stories',
        component: Stories
    },
    {
        path:'add-story',
        component: AddStory
    },
    {
        path:'view',
        component: ViewStory
    },
    {
        path:'edit/:id',
        component: EditStory
    }
];
