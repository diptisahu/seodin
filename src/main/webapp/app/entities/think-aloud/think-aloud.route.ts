import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ThinkAloudComponent } from './think-aloud.component';
import { ThinkAloudDetailComponent } from './think-aloud-detail.component';
import { ThinkAloudPopupComponent } from './think-aloud-dialog.component';
import { ThinkAloudDeletePopupComponent } from './think-aloud-delete-dialog.component';
import { ThinkAloudSearchPopupComponent } from './think-aloud-search-dialog.component';

import { Principal } from '../../shared';

export const thinkAloudRoute: Routes = [
    {
        path: 'think-aloud',
        component: ThinkAloudComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'seodinApp.thinkAloud.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'think-aloud/:id',
        component: ThinkAloudDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'seodinApp.thinkAloud.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const thinkAloudPopupRoute: Routes = [
    {
        path: 'think-aloud-new',
        component: ThinkAloudPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'seodinApp.thinkAloud.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'think-aloud/:id/edit',
        component: ThinkAloudPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'seodinApp.thinkAloud.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'think-aloud/:id/delete',
        component: ThinkAloudDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'seodinApp.thinkAloud.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'think-aloud/:id/search',
        component: ThinkAloudSearchPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'seodinApp.interview.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
