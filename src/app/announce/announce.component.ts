import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.scss']
})
export class AnnounceComponent implements OnInit {

  announcedTimes: number = 0;
  announceToggle: boolean = false;
  messageEN: string = 'Test should display message for screen reader';
  messagePT: string = 'Esse teste deve mostrar uma mensagem para o leitor de tela';
  message: string = this.messageEN;

  constructor(private liveAnnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.liveAnnnouncer.clear();
    this.liveAnnnouncer.announce(this.message, 'assertive');
  }

  announce(): void {
    this.liveAnnnouncer.clear();
    this.liveAnnnouncer.announce(`${this.message} - ${this.announcedTimes++}`, 'assertive');
  }

}
