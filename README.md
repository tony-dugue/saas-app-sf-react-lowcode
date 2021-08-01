## Installation
***

- récupération du projet depuis Github par HTTPS :

```shell script
$ git clone https://github.com/tony-dugue/saas-app-sf-react-lowcode.git
```

- Installer les packages :

```shell script
$ composer install
$ npm install
```

## Démarrer l'application
***

Pour démarrer le serveur web (à la racine du projet) :
```sh
$ symfony serve
```
ou avec utilisation du serveur avec support TLS

```sh
$ symfony server:ca:install # installation du support TLS
```

```sh
$ symfony serve -d # démarrage du serveur
```

```sh
$ symfony local:server:stop # stopper le serveur
```

Pour démarrer la compilation des assets :
```sh
$ npm run watch
```

## Tests unitaires
***

Pour lancer les test unitaires :
```sh
$ php bin/phpunit --testdox
```
