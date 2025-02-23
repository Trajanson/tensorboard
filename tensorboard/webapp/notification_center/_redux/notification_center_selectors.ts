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
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {
  Notification,
  NotificationState,
  NOTIFICATION_FEATURE_KEY,
  State,
} from './notification_center_types';

/** @typehack */ import * as _typeHackStore from '@ngrx/store';

const selectNotifications = createFeatureSelector<State, NotificationState>(
  NOTIFICATION_FEATURE_KEY
);

export const getNotifications = createSelector(
  selectNotifications,
  (state: NotificationState): Notification[] => {
    return state.notifications;
  }
);
