import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcer',
  templateUrl: './announcer.component.html',
  styleUrls: ['./announcer.component.scss']
})
export class AnnouncerComponent implements OnInit {

  @Input()
  showAlert: boolean = false;

  @Input()
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
