// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { PriceComponent } from './components/price/price.component';
import { ProductComponent } from './pages/product/product.component';

// Modules
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [PriceComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
