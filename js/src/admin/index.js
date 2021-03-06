/*
 * This file is part of justoverclock/flarum-ext-guestengagement.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('justoverclock/flarum-ext-newsletter', () => {
  app.extensionData.for('justoverclock-newsletter').registerSetting({
    setting: 'justoverclock-newsletter.pubaccount',
    name: 'PubAccount',
    type: 'text',
    placeholder: 'Example: aac28688-00gf-7hd7-mdt5-v8s6w555nnq2',
    label: app.translator.trans('flarum-ext-newsletter.admin.pubacc'),
    help: app.translator.trans('flarum-ext-newsletter.admin.pubaccdesc'),
  });
  app.extensionData.for('justoverclock-newsletter').registerSetting({
    setting: 'justoverclock-newsletter.ListName',
    name: 'ListName',
    type: 'text',
    placeholder: 'Example: listname',
    label: app.translator.trans('flarum-ext-newsletter.admin.listn'),
    help: app.translator.trans('flarum-ext-newsletter.admin.listndesc'),
  });
});
