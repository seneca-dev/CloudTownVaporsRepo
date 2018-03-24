import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BillboardFrameComponent } from './billboard-frame/billboard-frame.component';
import { BillBoardMainAdComponent } from './bill-board-main-ad/bill-board-main-ad.component';
import { BillBoardRibbonAdComponent } from './bill-board-ribbon-ad/bill-board-ribbon-ad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BillboardFrameComponent,
    BillBoardMainAdComponent,
    BillBoardRibbonAdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
