import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AdminHeaderComponent } from '../app/admin-dashboard/admin-header/admin-header.component';
import { AdminNavBarComponent } from './admin-dashboard/admin-nav-bar/admin-nav-bar.component';
import { AdminChartComponent } from './admin-dashboard/admin-chart/admin-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UsersCountComponent } from './admin-dashboard/users-count/users-count.component';
import { ShopCountComponent } from './admin-dashboard/shop-count/shop-count.component';
import { MealsCountComponent } from './admin-dashboard/meals-count/meals-count.component';
import { DeliverAgentCountComponent } from './admin-dashboard/deliver-agent-count/deliver-agent-count.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DropdownModule } from 'primeng/dropdown';
import { StoreModule } from '@ngrx/store';
import { signupReducer } from './signup/store/reducers/signup.reducer'; // Import your signup reducer
import { EffectsModule } from '@ngrx/effects';
import { SignupEffects } from './signup/store/effects/signup.effects';
import { userService } from './services/user.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { authReducer } from './login/store/reducers/auth.reducer';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './login/store/effects/auth.effects';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { SiteStatusComponent } from './home/site-status/site-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AdminDashboardComponent,
    OrderDetailsComponent,
    AdminHeaderComponent,
    AdminNavBarComponent,
    AdminChartComponent,
    UsersCountComponent,
    ShopCountComponent,
    MealsCountComponent,
    DeliverAgentCountComponent,
    SiteStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzButtonModule,
    MatButtonModule,
    NzCardModule,
    MatIconModule,
    FormsModule,
    NgApexchartsModule,
    CanvasJSAngularChartsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    DropdownModule,
    StoreModule.forRoot({
      signup: signupReducer, // Use your signup reducer here
      login: authReducer
    }),
    EffectsModule.forRoot([SignupEffects, AuthEffects]),
  ],
  providers: [userService, HttpClient, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
