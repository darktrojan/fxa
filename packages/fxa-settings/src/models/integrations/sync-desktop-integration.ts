/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { IntegrationType } from './base-integration';
import {
  SyncBasicIntegration,
  SyncIntegrationFeatures,
} from './sync-basic-integration';

export class SyncDesktopIntegration extends SyncBasicIntegration<SyncIntegrationFeatures> {
  constructor() {
    super(IntegrationType.SyncDesktop);
    this.setFeatures({ allowUidChange: true });
  }
}
