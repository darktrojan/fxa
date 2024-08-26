/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v14.5.2. DO NOT EDIT. DO NOT COMMIT.

import EventMetricType from '@mozilla/glean/private/metrics/event';

/**
 * Click on Apple logo to download Firefox on Apple
 *
 * Generated from `account_pref.apple_submit`.
 */
export const appleSubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'apple_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * The user clicked "Unlink" from account preferences for their Apple linked
 * account.
 *
 * Generated from `account_pref.apple_unlink_submit`.
 */
export const appleUnlinkSubmit = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'apple_unlink_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * The user clicked "Unlink" from the confirmation modal for their Apple linked
 * account.
 *
 * Generated from `account_pref.apple_unlink_submit_confirm`.
 */
export const appleUnlinkSubmitConfirm = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'apple_unlink_submit_confirm',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * User clicks on Firefox Browser for Desktop in the bento menu
 *
 * Generated from `account_pref.bento_firefox_desktop`.
 */
export const bentoFirefoxDesktop = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_firefox_desktop',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on Firefox Browser for Mobile in the bento menu
 *
 * Generated from `account_pref.bento_firefox_mobile`.
 */
export const bentoFirefoxMobile = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_firefox_mobile',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on Mozilla Monitor in the bento menu
 *
 * Generated from `account_pref.bento_monitor`.
 */
export const bentoMonitor = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_monitor',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on Pocket in the bento menu
 *
 * Generated from `account_pref.bento_pocket`.
 */
export const bentoPocket = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_pocket',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on Firefox Relay in the bento menu
 *
 * Generated from `account_pref.bento_relay`.
 */
export const bentoRelay = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_relay',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on the bento menu at the top of the account settings page
 *
 * Generated from `account_pref.bento_view`.
 */
export const bentoView = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_view',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on Mozilla VPN in the bento menu
 *
 * Generated from `account_pref.bento_vpn`.
 */
export const bentoVpn = new EventMetricType(
  {
    category: 'account_pref',
    name: 'bento_vpn',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * Click on "Change" on account settings page to change password for account
 *
 * Generated from `account_pref.change_password_submit`.
 */
export const changePasswordSubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'change_password_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * Click on "Signout" under Connected Services to sign out of device/service
 *
 * Generated from `account_pref.device_signout`.
 */
export const deviceSignout = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'device_signout',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * Click on "Add" or "Change" on account settings page to add or change display
 * name
 *
 * Generated from `account_pref.display_name_submit`.
 */
export const displayNameSubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'display_name_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * Click on Google Play logo to download Firefox on Android
 *
 * Generated from `account_pref.google_play_submit`.
 */
export const googlePlaySubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'google_play_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * The user clicked "Unlink" from account preferences for their Google linked
 * account.
 *
 * Generated from `account_pref.google_unlink_submit`.
 */
export const googleUnlinkSubmit = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'google_unlink_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * The user clicked "Unlink" from the confirmation modal for their Google linked
 * account.
 *
 * Generated from `account_pref.google_unlink_submit_confirm`.
 */
export const googleUnlinkSubmitConfirm = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'google_unlink_submit_confirm',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * User clicked the question mark icon "Help" link in the account settings page
 * header
 *
 * Generated from `account_pref.help`.
 */
export const help = new EventMetricType(
  {
    category: 'account_pref',
    name: 'help',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicks on the Get free scan link on the new Monitor promotion in the
 * account settings side panel
 *
 * Generated from `account_pref.promo_monitor_submit`.
 */
export const promoMonitorSubmit = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'promo_monitor_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * User sees the Monitor promo on their settings page.
 *
 * Generated from `account_pref.promo_monitor_view`.
 */
export const promoMonitorView = new EventMetricType<{
  reason?: string;
}>(
  {
    category: 'account_pref',
    name: 'promo_monitor_view',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  ['reason']
);

/**
 * Click on "Create" or "Change" button on account settings page to add a recovery
 * key to the account
 *
 * Generated from `account_pref.recovery_key_submit`.
 */
export const recoveryKeySubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'recovery_key_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * Click on "Add" button on account settings page to add secondary email
 *
 * Generated from `account_pref.secondary_email_submit`.
 */
export const secondaryEmailSubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'secondary_email_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User viewed the backup codes page (step 2) of the 2FA setup funnel.
 *
 * Generated from `account_pref.two_step_auth_codes_view`.
 */
export const twoStepAuthCodesView = new EventMetricType(
  {
    category: 'account_pref',
    name: 'two_step_auth_codes_view',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User viewed form to enter one of their authentication codes (step 3).
 *
 * Generated from `account_pref.two_step_auth_enter_code_view`.
 */
export const twoStepAuthEnterCodeView = new EventMetricType(
  {
    category: 'account_pref',
    name: 'two_step_auth_enter_code_view',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * Authentication code was successfully entered and submitted.
 *
 * Generated from `account_pref.two_step_auth_qr_code_success`.
 */
export const twoStepAuthQrCodeSuccess = new EventMetricType(
  {
    category: 'account_pref',
    name: 'two_step_auth_qr_code_success',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User started the 2FA setup process by viewing step 1 of the funnel, complete
 * with QR code for scanning.
 *
 * Generated from `account_pref.two_step_auth_qr_view`.
 */
export const twoStepAuthQrView = new EventMetricType(
  {
    category: 'account_pref',
    name: 'two_step_auth_qr_view',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * User clicked the "Can't scan code?" link
 *
 * Generated from `account_pref.two_step_auth_scan_code_link`.
 */
export const twoStepAuthScanCodeLink = new EventMetricType(
  {
    category: 'account_pref',
    name: 'two_step_auth_scan_code_link',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * Click on "Add" button on account settings page for adding 2FA to account
 *
 * Generated from `account_pref.two_step_auth_submit`.
 */
export const twoStepAuthSubmit = new EventMetricType(
  {
    category: 'account_pref',
    name: 'two_step_auth_submit',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);

/**
 * View of the account settings page
 *
 * Generated from `account_pref.view`.
 */
export const view = new EventMetricType(
  {
    category: 'account_pref',
    name: 'view',
    sendInPings: ['events'],
    lifetime: 'ping',
    disabled: false,
  },
  []
);
