### mocha

```javascript
var add = require('./add.js');
var expect = require('chai').expect;

describe('plus test', function() {
  it('1 plus 1 equal 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
```

上面这段代码，就是测试脚本，它可以独立执行。测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。

describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"plus test"），第二个参数是一个实际执行的函数。

it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 plus 1 equal 2"），第二个参数是一个实际执行的函数。

所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。上面这句断言的意思是，调用add(1, 1)，结果应该等于2。

所有的测试用例（it块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。例如上面代码的chai

### Mocha的基本用法

```javascript
mocha test.js
```

命令行指定测试脚本时，可以使用通配符，同时指定多个文件。
```javascript
mocha spec/{my,awesome}.js
mocha *.js

```
命令行参数

```javascript
mocha --recursive

mocha --help

...

```

Mocha默认运行test子目录里面的测试脚本。所以，一般都会把测试脚本放在test目录里面，然后执行mocha就不需要参数了。

Mocha允许在test目录下面，放置配置文件mocha.opts，把命令行参数写在里面。
```javascript
mocha --recursive --reporter tap --growl
```
例如，把下面三个参数写入test目录下的mocha.opts文件

--reporter tap

--recursive

--growl

然后，执行mocha就能取得与第一行命令一样的效果。

```javascript
mocha
```

### 如果测试脚本是用ES6写的，那么运行测试之前，需要先用Babel转码
使用--compilers参数指定测试脚本的转码器。
```javascript
../node_modules/mocha/bin/mocha --compilers js:babel-core/register
```
上面代码中，--compilers参数后面紧跟一个用冒号分隔的字符串，冒号左边是文件的后缀名，右边是用来处理这一类文件的模块名。上面代码表示，运行测试之前，先用babel-core/register模块，处理一下.js文件。由于这里的转码器安装在项目内，所以要使用项目内安装的Mocha；如果转码器安装在全局，就可以使用全局的Mocha。



### 异步测试

Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用-t或--timeout参数指定超时门槛。
```javascript
it('timeout test', function(done) {
  var x = true;
  var f = function() {
    x = false;
    expect(x).to.be.not.ok;
    done();
  };
  setTimeout(f, 4000);
});
```
```
mocha -t 5000 timeout.test.js
```

上面命令将测试的超时时限指定为5000毫秒。

另外，上面的测试用例里面，有一个done函数。it块执行的时候，传入一个done参数，当测试结束的时候，必须显式调用这个函数，告诉Mocha测试结束了。否则，Mocha就无法知道，测试是否结束，会一直等到超时报错

另外，Mocha内置对Promise的支持，允许直接返回Promise，等到它的状态改变，再执行断言，而不用显式调用done方法

### hooks
Mocha在describe块之中，提供测试用例的四个hooks：before()、after()、beforeEach()和afterEach()。它们会在指定时间执行。
```javascript
describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});

```

### 测试用例管理
大型项目有很多测试用例。有时，我们希望只运行其中的几个，这时可以用only方法。describe块和it块都允许调用only方法，表示只运行某个测试套件或测试用例。

```javascript
it.only('1 plus 1 equal 2', function() {
  expect(add(1, 1)).to.be.equal(2);
});

it('sth', function() {
  expect(add(1, 0)).to.be.equal(1);
});
```
上面代码中，只有带有only方法的测试用例会运行。

此外，还有skip方法，表示跳过指定的测试套件或测试用例
```javascript
it.skip('1 plus 2 equal 3', function() {
  expect(add(1, 2)).to.be.equal(3);
});
```
### Mocha支持从测试用例生成规格文件。
```javascript
mocha --recursive -R markdown > spec.md
//or
mocha --recursive -R doc > spec.html
```
