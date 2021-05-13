import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        data: { pageTitle: 'moneyloggergwApp.moneyloggerCategory.home.title' },
        loadChildren: () => import('./moneylogger/category/category.module').then(m => m.MoneyloggerCategoryModule),
      },
      {
        path: 'transaction',
        data: { pageTitle: 'moneyloggergwApp.moneyloggerTransaction.home.title' },
        loadChildren: () => import('./moneylogger/transaction/transaction.module').then(m => m.MoneyloggerTransactionModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
