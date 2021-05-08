/*
 * This file is part of justoverclock/flarum-ext-guestengagement.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import app from 'flarum/app';
import Swal from 'sweetalert2';

app.initializers.add('justoverclock/flarum-ext-newsletter', () => {
  extend(IndexPage.prototype, 'navItems', (navItems) => {
    if (app.current.matches(IndexPage))
      navItems.add(
        'Newsletter',
        m(
          'div',
          { className: 'alignews' },
          m('h1', { id: 'titleNl' }, ['News', m('span', '.letter')]),
          m('p', { className: 'descNl' }, app.translator.trans('flarum-ext-newsletter.forum.subscribe')),
          m('form', { id: 'subscribeForm' }, [
            m('input', { className: 'fieldinp', id: 'email-input', type: 'email', placeholder: 'Subscribe to Flarum' }),
            m('button', { className: 'subscbutt', type: 'submit' }, app.translator.trans('flarum-ext-newsletter.forum.submitbutton')),
          ])
        ),
        -100
      );
  });
});
extend(IndexPage.prototype, 'oncreate', function () {
  function SetupNewsletterSubscribe(publicAccountId, listName, formId, onSuccess) {
    var eeUrl = 'https://api.elasticemail.com/contact/add?version=2';
    var email = jQuery('#email-input');
    var form = jQuery('#' + formId).submit(function (event) {
      event.preventDefault();
      jQuery
        .post(
          eeUrl,
          {
            email: email.val(),
            publicAccountId: publicAccountId,
            listName: listName,
          },
          function () {},
          'json'
        )
        .done(function (result) {
          if (result.success === true) {
            onSuccess();
          }
        })
        .fail(function () {
          // e se fallisce?...
        });
    });
  }
  jQuery(function () {
      const pubAcc = app.forum.attribute('PubAccount');
      const listmail = app.forum.attribute('ListName');
    SetupNewsletterSubscribe(pubAcc, listmail, 'subscribeForm', function () {
      const thankU = app.translator.trans('flarum-ext-newsletter.forum.modalthanku');
      const ModalText = app.translator.trans('flarum-ext-newsletter.forum.modaltext');
      // Inseriamo il popup con le variabili per la traduzione.
      Swal.fire({
        icon: 'success',
        title: thankU,
        text: ModalText,
      });
      // Ripuliamo il form dopo essere stato inviato!
      document.getElementById('subscribeForm').reset();
    });
  });
});
