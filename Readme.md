# Hello Yeoman
> A dead simple Yeoman generator. Created for educational purposes.

## Getting started
### Prepare
Install Yeoman
``` shell
npm install -g yo
```
Install dependence
``` shell
npm install
```

Symlink a global module to your local file
``` shell
npm link
```
### Run
```shell
yo hello coffee-machine --coffee cappuccino
```

### Test
Install mocha
``` shell
npm install -g mocha
```

Run
``` shell
npm test
```

## Highlights

### Logs
It is important to never use `console.log()` or `process.stdout.write()` to output content. Using them would hide the output from users not using a terminal. Instead, always rely on the UI generic `generator.log()` method, where generator is the context of your current `generator`.

``` javascript
module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
    this.log('Display this message.');
  },
});
```

### Install additional dependencies
> Note that Yeoman provided installation helpers will automatically schedule the installation to run once as part of the `install` queue. If you need to run anything after they've run, use the `end` queue.

http://yeoman.io/authoring/dependencies.html
