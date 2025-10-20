import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from '../NgZorroAntdModule';



@NgModule({
  declarations: [],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    NgZorroAntdModule
  ],
  exports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
