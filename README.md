modelis-assurance
===============

assurance plugin for modelis.

### [assurance](http://github.com/danmilon/assurance)

#### Export API

- Modelised#assurance

#### Option

- ```attrOptionKey``` (optional, default=assurance)
  - key name for plug-in to see attribute's option.

#### Example

##### use.

```js
var Modelis = require('modelis');

if (simple) {
  // define.
  var User = Modelis.define('User').attr('name', { assurance: { is: 'string' }});

  // use.
  User.use(Modelis.plugins.assurance());

  // User#assurance is available.
  new User({}).assurance();
}

if (customize) {
  // define.
  var User = Modelis.define('User').attr('name', { validate: { is: 'string' }});

  // use.
  User.use(Modelis.plugins.assurance({
    attrOptionKey: 'validate'
  }, function(assurance) {
    this; //=> User.
    this.prototype.validate = assurance;
  }));

  // User#validate is available.
  new User({}).validate();
}
```
