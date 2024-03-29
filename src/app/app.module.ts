import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { VehGlobalFooterComponent } from './veh-global-footer/veh-global-footer.component';
import { DyamicFooterContentComponent } from './dyamic-footer-content/dyamic-footer-content.component';
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CalculatorComponent,
    AlertsComponent,
    VehGlobalFooterComponent,
    DyamicFooterContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
