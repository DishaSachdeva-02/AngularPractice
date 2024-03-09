import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgIf,NgFor } from '@angular/common';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
   constructor(public messageservice:MessageService){}
}
