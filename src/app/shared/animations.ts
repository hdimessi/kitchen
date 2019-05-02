import {
    trigger,
    style,
    animate,
    transition,
    query,
    animateChild,
    group
 } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('RecipesPage <=> ShoppingListPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> SignupPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], ),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('400ms ease-out', style({ left: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('600ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
