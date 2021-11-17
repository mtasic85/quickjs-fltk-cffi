import { uv_default_loop, uv_timer_init } from './quickjs-libuv/uv.js';

let loop = uv_default_loop();
let timer;
let r;

// r = uv_timer_init(loop, &timer)
