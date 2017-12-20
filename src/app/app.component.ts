// ViewEncapsulation is for scss include in specific file
// services and be included in providers and skipped from main module however it will be s
// specific to this component and will be initialized again
// ngOnInit will be fired when data component will be loaded
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  constructor(private location: Location) { }
  ngOnInit(): void {
  }
}

