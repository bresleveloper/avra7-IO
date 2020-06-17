import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './c/IO-FN/parent/parent.component';
import { ChildComponent } from './c/IO-FN/child/child.component';
import { ChildOutputComponent } from './c/IO-FN/child-output/child-output.component';
import { MyNgModelComponent } from './c/IO-FN/my-ng-model/my-ng-model.component';
import { NgModelParentComponent } from './c/IO-FN/ng-model-parent/ng-model-parent.component';
import { MyNgModelReallyComponent } from './c/IO-FN/my-ng-model-really/my-ng-model-really.component';
import { JPageComponent } from './c/Jiraff-Administration/j-page/j-page.component';
import { JItemComponent } from './c/Jiraff-Administration/j-item/j-item.component';
import { JDetailsComponent } from './c/Jiraff-Administration/j-details/j-details.component';
import { JLabelSpanComponent } from './c/Jiraff-Administration/j-label-span/j-label-span.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildOutputComponent,
    MyNgModelComponent,
    NgModelParentComponent,
    MyNgModelReallyComponent,
    JPageComponent,
    JItemComponent,
    JDetailsComponent,
    JLabelSpanComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
