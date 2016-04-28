# generator-unity [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-unity using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-unity
```

Then generate your new project:

```bash
mkdir MyAwesomeProject && cd $_
yo unity
```

## Usage

List of subgenerators:
 * [app](#app)
 * [class](#class)
 * [service](#service)
 * [entity](#entity)
 * [UI](#UI)

### app

This is the main generator.  

### class

This generates a new class, which can be of type:
 * [service](#service) (this will add it to the namespace and folder `MyAwesomeProject.Assets.Scripts.Services`)
 * [entity](#entity) (this will add it to the namespace and folder `MyAwesomeProject.Assets.Scripts.Entities`)
 * [UI](#UI) (this will add it to the namespace and folder `MyAwesomeProject.Assets.Scripts.UI`)

### service

A service is a globally available class that all [entities](#entity) have a `protected` reference to via `Services.MyServiceName`.  The default services include:
 * [GameStateService](#GameStateService)
 * [InputService](#InputService)
 * [GlobalServices](#GlobalServices)

### entity

An entity is attached to a `GameObject` that players can interact with (e.g. a weapon, enemy, etc).  You should ALWAYS inherit from this class, and you should NOT use the default `Update`, and `FixedUpdate` functions.  Instead, use the inherited `OnUpdate`, and `OnFixedUpdate`.  Additionally functions included:
 * OnTouchBegan
 * OnTouchCanceled
 * OnTouchMoved
 * OnTouchEnded
 * OnTouchStationary
 * OnEnable (must make call to super)
 * OnDisable (must make call to super)
 * OnUpdate
 * OnFixedUpdate
 * OnPause
 * OnResume

### UI



## License

MIT © [Jason Libbey]()


[npm-image]: https://badge.fury.io/js/generator-unity.svg
[npm-url]: https://npmjs.org/package/generator-unity
[travis-image]: https://travis-ci.org/JELGT2011/generator-unity.svg?branch=master
[travis-url]: https://travis-ci.org/JELGT2011/generator-unity
[daviddm-image]: https://david-dm.org/JELGT2011/generator-unity.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/JELGT2011/generator-unity
