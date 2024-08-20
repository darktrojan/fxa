/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v14.5.2. DO NOT EDIT. DO NOT COMMIT.

import StringMetricType from '@mozilla/glean/private/metrics/string';

/**
 * A marketing campaign.  For example, if a user signs into FxA from selecting a
 * Mozilla VPN plan on Mozilla VPN's product site, then value of this metric could
 * be 'vpn-product-page'.  The value has a max length of 128 characters with the
 * alphanumeric characters, _ (underscore), forward slash (/), . (period), %
 * (percentage sign), and - (hyphen) in the allowed set of characters.  The
 * special value of 'page+referral+-+not+part+of+a+campaign' is also allowed.
 *
 * Generated from `utm.campaign`.
 */
export const campaign = new StringMetricType({
  category: 'utm',
  name: 'campaign',
  sendInPings: ['accounts-events', 'events'],
  lifetime: 'application',
  disabled: false,
});

/**
 * The content on which the user acted.  For example, if the user clicked on the
 * (previously available) "Get started here" link in "Looking for Firefox Sync?
 * Get
 * started here", then the value for this metric would be 'fx-sync-get-started'.
 * The value has a max length of 128 characters with the alphanumeric characters,
 * _ (underscore), forward slash (/), . (period), % (percentage sign), and -
 * (hyphen)
 * in the allowed set of characters.
 *
 * Generated from `utm.content`.
 */
export const content = new StringMetricType({
  category: 'utm',
  name: 'content',
  sendInPings: ['accounts-events', 'events'],
  lifetime: 'application',
  disabled: false,
});

/**
 * The "medium" on which the user acted.  For example, if the user clicked on a
 * link in an email, then the value of this metric would be 'email'.  The value
 * has a max length of 128 characters with the alphanumeric characters, _
 * (underscore), forward slash (/), . (period), % (percentage sign), and -
 * (hyphen) in the allowed set of characters.
 *
 * Generated from `utm.medium`.
 */
export const medium = new StringMetricType({
  category: 'utm',
  name: 'medium',
  sendInPings: ['accounts-events', 'events'],
  lifetime: 'application',
  disabled: false,
});

/**
 * The source from where the user started.  For example, if the user clicked on a
 * link on the Firefox accounts web site, this value could be 'fx-website'.  The
 * value has a max length of 128 characters with the alphanumeric characters, _
 * (underscore), forward slash (/), . (period), % (percentage sign), and -
 * (hyphen) in the allowed set of characters.
 *
 * Generated from `utm.source`.
 */
export const source = new StringMetricType({
  category: 'utm',
  name: 'source',
  sendInPings: ['accounts-events', 'events'],
  lifetime: 'application',
  disabled: false,
});

/**
 * This metric is similar to the `utm.source`; it is used in the Firefox
 * browser.  For example, if the user started from about:welcome, then the value
 * could be 'aboutwelcome-default-screen'.  The value has a max length of 128
 * characters with the alphanumeric characters, _ (underscore), forward slash (/),
 * . (period), % (percentage sign), and - (hyphen) in the allowed set of
 * characters.
 *
 * Generated from `utm.term`.
 */
export const term = new StringMetricType({
  category: 'utm',
  name: 'term',
  sendInPings: ['accounts-events', 'events'],
  lifetime: 'application',
  disabled: false,
});
