import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { TodoModule } from './todos/todo.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './todos/todo.reducer';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    TodoModule,
    StoreModule.forRoot({ text: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
