import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  // input: 'src/index.js', // 入口文件路径
  // input: ['src/index.js', 'src/album.js'], // 多入口的一种写法
  input: {
    // 多入口的另一种写法
    foo: 'src/index.js',
    bar: 'src/album.js',
  },
  output: {
    // 输出的相关配置
    // file: 'lib/bundle.js', // 输出文件名
    // format: 'iife', // 输出格式
    // // 代码拆分
    // dir: 'lib',
    // format: 'amd'
    // 多入口打包 注：amd 包在使用时需要使用实现 amd 标准的第三方库导入（比如 requirejs）
    dir: 'lib',
    format: 'amd',
  },
  plugins: [json(), resolve(), commonjs()],
};
