import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js', // 入口文件路径
  output: {
    // 输出的相关配置
    // file: 'lib/bundle.js', // 输出文件名
    // format: 'iife', // 输出格式
    dir: 'lib',
    format: 'amd'
  },
  plugins: [json(), resolve(), commonjs()],
};
