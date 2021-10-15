import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { HighlightsComponent } from './shared/components/highlights/highlights.component';
import { AllMasseursComponent } from './shared/components/all-masseurs/all-masseurs.component';
import { FormComponent } from './shared/components/form/form.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PlanComponent } from './shared/components/plan/plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    CategoriesComponent,
    HighlightsComponent,
    AllMasseursComponent,
    FormComponent,
    FooterComponent,
    PlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
