### mocha

特点：灵活，但是只提供简单的测试结构，如果需要其他功能如assertions， spies，mocks等需要添加其他库/插件完成
安装： mocha必须在全局环境中安装
mocha不内置expect，因此一般使用mocha时会使用chai

### Jest

特点：安装配置简单，非常容易上手。内置Istanbul，可以查看到测试覆盖率，完美的支持React组件化测试。开发者一般用来测试React应用。