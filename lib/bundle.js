(function () {
  'use strict';

  const log = (msg) => {
    console.log('------------ INFO ------------');
    console.log(msg);
    console.log('------------------------------');
  };

  var messages = {
      hi: "Hey Guys, I am xzc~"
  };

  var name = "learn-rollup";
  var version = "1.0.0";

  // 导入模块成员

  // 使用模块成员
  const msg = messages.hi;

  log(msg);

  log(name);

  log(version);

})();
