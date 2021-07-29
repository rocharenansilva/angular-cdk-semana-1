import { Component, OnInit } from '@angular/core';

import { Item, SelectionService } from '../selection.service';

@Component({
  selector: 'app-selection-details',
  templateUrl: './selection-details.component.html',
  styleUrls: ['./selection-details.component.scss']
})
export class SelectionDetailsComponent implements OnInit {

  items: Item[] = [];
  empty: boolean = true;
  
  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
    // Without CDK
    this.items = this.selectionService.dadosSelecionados;
    this.empty = this.selectionService.isSelectionEmpty();

    // SelectionModel CDK
    this.items = this.selectionService.dadosSelecionadosModel.selected;
    this.empty = this.selectionService.dadosSelecionadosModel.isEmpty();
  }

}
