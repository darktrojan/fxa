/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

const isA = require('joi');
const random = require('../crypto/random');
const validators = require('./validators');
const UTIL_DOCS = require('../../docs/swagger/util-api').default;

const HEX_STRING = validators.HEX_STRING;

module.exports = (log, config, redirectDomain) => {
  return [
    {
      method: 'POST',
      path: '/get_random_bytes',
      options: {
        ...UTIL_DOCS.GET_RANDOM_BYTES_POST,
      },
      handler: async function getRandomBytes(request) {
        let bytes;
        // eslint-disable-next-line no-useless-catch
        try {
          bytes = await random(32);
          return { data: bytes.toString('hex') };
        } catch (err) {
          throw err;
        }
      },
    },
    {
      method: 'GET',
      path: '/verify_email',
      options: {
        ...UTIL_DOCS.VERIFY_EMAIL_GET,
        validate: {
          query: {
            code: isA.string().max(32).regex(HEX_STRING).required(),
            uid: isA.string().max(32).regex(HEX_STRING).required(),
            service: isA.string().max(16).alphanum().optional(),
            redirectTo: validators.redirectTo(redirectDomain).optional(),
          },
        },
      },
      handler: async function (request, h) {
        return h.redirect(config.contentServer.url + request.raw.req.url);
      },
    },
    {
      method: 'GET',
      path: '/complete_reset_password',
      options: {
        ...UTIL_DOCS.COMPLETE_RESET_PASSWORD_GET,
        validate: {
          query: {
            email: validators.email().required(),
            code: isA.string().max(32).regex(HEX_STRING).required(),
            token: isA.string().max(64).regex(HEX_STRING).required(),
            service: isA.string().max(16).alphanum().optional(),
            redirectTo: validators.redirectTo(redirectDomain).optional(),
          },
        },
      },
      handler: async function (request, h) {
        return h.redirect(config.contentServer.url + request.raw.req.url);
      },
    },
  ];
};
