// Angular
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// Libraries
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public intervarl$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    this.intervarl$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.intervarl$?.unsubscribe();
  }
}
