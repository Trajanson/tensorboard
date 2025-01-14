/* Copyright 2021 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import {NotificationCenterComponent} from './notification_center_component';
import {NotificationCenterContainer} from './notification_center_container';

/**
 * Provides the 'alert snackbar' view.
 */
@NgModule({
  declarations: [NotificationCenterContainer, NotificationCenterComponent],
  exports: [NotificationCenterContainer],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
})
export class NotificationCenterViewModule {}
