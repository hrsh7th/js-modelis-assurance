var assert = require('assert');
var Modelis = require('modelis');

describe('Modelis.plugins.assurance', function() {

  describe('arguments passing', function() {
    var User = Modelis.define('User').attr('name', { assurance: { is: 'string' } });
    User.use(Modelis.plugins.assurance());

    it('success case', function() {
      var user = new User({ name: 'test' });
      assert.equal(user.assurance().length, 0);
    });

    it('failure case', function() {
      var user = new User({ name: 123 });
      assert.equal(user.assurance().length, 1);
    });
  });

  describe('arguments not passing', function() {
    var User = Modelis.define('User').attr('age', { assurance: { isInt: true, required: true } });
    User.use(Modelis.plugins.assurance());

    it('success case', function() {
      var user = new User({ age: 11 });
      assert.equal(user.assurance().length, 0);
    });

    it('failure case', function() {
      var user = new User({ });
      assert.equal(user.assurance().length, 1);
    });
  });

  describe('required/optional', function() {
    var User = Modelis.define('User')
      .attr('name', {
        assurance: {
          is: 'string',
          required: true
        }
      })
      .attr('age', {
        assurance: {
          is: 'number'
        }
      });
    User.use(Modelis.plugins.assurance());

    it('success case', function() {
      var user = new User({ name: 'john1' });
      assert.equal(user.assurance().length, 0);
    });

    it('failure case', function() {
      var user = new User({ age: 1234 });
      assert.equal(user.assurance().length, 1);
    });
  });

});

