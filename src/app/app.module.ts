import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { GreetComponentComponent } from './greet-component/greet-component.component';
import { InterpolationDemoComponent } from './interpolation-demo/interpolation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    GreetComponentComponent,
    InterpolationDemoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
