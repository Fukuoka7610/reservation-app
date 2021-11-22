import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({ //下位層のファイルの宣言
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [ //上位層のファイルのインポート
    BrowserModule,
    AppRoutingModule, //"app-routing.module.ts"をインポートしている
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
