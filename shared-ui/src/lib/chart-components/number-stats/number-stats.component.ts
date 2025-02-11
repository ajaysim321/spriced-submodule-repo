import { NgStyle } from '@angular/common';
import { Component, Input, input, OnInit, ViewEncapsulation } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { Data } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-number-stats',
  imports: [NgStyle, IonicModule],
  standalone: true,
  templateUrl: './number-stats.component.html',
  styleUrl: './number-stats.component.scss',
})
export class NumberStatsComponent {
@Input() data!:any;

}
