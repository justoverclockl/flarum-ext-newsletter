# Newsletter

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/flarum-ext-newsletter.svg)](https://packagist.org/packages/justoverclock/flarum-ext-newsletter) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/flarum-ext-newsletter.svg)](https://packagist.org/packages/justoverclock/flarum-ext-newsletter)

A [Flarum](http://flarum.org) extension. Allow admin to collect Email address through ElasticMail Api

### Usage

These are the Step:

- Create an account on https://elasticemail.com/ 
- Setup your Api Smtp https://elasticemail.com/account#/settings/new/manage-smtp
- Create a new Email List here: https://elasticemail.com/account#/contacts/new/lists?page=1&perPage=25
- Find your Public Account ID here https://elasticemail.com/account#/account/security
- Paste your Public Account ID into admin panel of your Flarum
- Paste the name of your List into admin panel of your Flarum
- Your done! :)

### Installation

Install with composer:

```sh
composer require justoverclock/flarum-ext-newsletter:"*"
```

### Updating

```sh
composer update justoverclock/flarum-ext-newsletter:"*"
php flarum migrate
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/justoverclock/flarum-ext-newsletter)
- [GitHub](https://github.com/justoverclockl/flarum-ext-newsletter)

### Screenshot

![1](https://user-images.githubusercontent.com/79002016/117533809-12a85b80-afef-11eb-89de-86dea32375af.png)
![2](https://user-images.githubusercontent.com/79002016/117533811-1340f200-afef-11eb-8a53-8c81de9cf764.png)
![3](https://user-images.githubusercontent.com/79002016/117533813-13d98880-afef-11eb-9c78-fe6230cd4014.png)
