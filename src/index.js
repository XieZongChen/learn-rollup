// 导入模块成员
import { camelCase } from 'lodash-es';
import { log } from './logger';
import messages from './messages';
import { name, version } from '../package.json';

// 使用模块成员
const msg = messages.hi;

log(msg);

log(name);

log(version);

log(camelCase('hello word'));
