import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import { Item, SelectionService } from '../selection.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  multipleSelection!: boolean;
  items: Item[] = [];

  // SelectionModel CDK
  dadosSelecionadosModel!: SelectionModel<Item>;

  constructor(private selectionService: SelectionService) {}

  ngOnInit(): void {
    this.multipleSelection = this.selectionService.multipleSelection;
    this.items = this.selectionService.getItems();

    // SelectionModel CDK
    this.dadosSelecionadosModel = this.selectionService.dadosSelecionadosModel;

    this.selectionService.dadosSelecionadosModel.changed.subscribe(changes => console.log(changes));
  }

  // Without CDK
  toggleSelection(item: Item, checked: boolean): void {
    this.selectionService.updateSelection(item, checked);
  }

  isSelected(item: Item): boolean {
    return this.selectionService.isSelected(item);
  }

}
