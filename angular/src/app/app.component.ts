import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewReceiptComponnent } from './componnents/new-receipt/new-receipt.componnent';
import { ReceiptComponent } from './componnents/receipt/receipt.component';
import { ListReceiptComponent } from './componnents/list-receipt/list-receipt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewReceiptComponnent,ReceiptComponent,ListReceiptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}
