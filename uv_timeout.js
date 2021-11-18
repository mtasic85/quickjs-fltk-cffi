import {
  uv_default_loop,
  uv_loop_alive,
  uv_timer_init,
  uv_timer_start,
  uv_timer_stop,
  uv_backend_timeout,
  uv_run,
  uv_run_mode,
  uv_loop_close,
  malloc,
  free,
  sizeof_uv_timer_t
} from './quickjs-libuv/uv.js';

let loop = uv_default_loop();

/*
 * timeout
 */
function setTimeout(callback, delay) {
  let timer = malloc(sizeof_uv_timer_t);
  let r;

  function cb(timer) {
    callback();
    clearTimeout(timer);
  }

  r = uv_timer_init(loop, timer);
  r = uv_loop_alive(loop);
  r = uv_timer_start(timer, cb, delay, 0);
  return timer;
}

function clearTimeout(timer) {
  uv_timer_stop(timer);
  free(timer);
}

/*
 * interval
 */
function setInterval(callback, interval) {
  let timer = malloc(sizeof_uv_timer_t);
  let r;

  function cb(timer) {
    callback();
  }

  r = uv_timer_init(loop, timer);
  r = uv_loop_alive(loop);
  r = uv_timer_start(timer, cb, 0, interval);
  return timer;
}

function clearInterval(timer) {
  uv_timer_stop(timer);
  free(timer);
}

/*
 * example
 */
setTimeout(() => {
  console.log('Hello timeout 1');
}, 2_000);

setTimeout(() => {
  console.log('Hello timeout 2');
}, 4_000);

let interval0 = setInterval(() => {
  console.log('Hello interval 1');
}, 1_000);

let interval1 = setInterval(() => {
  console.log('Hello interval 2');
  clearInterval(interval0);
  clearInterval(interval1);
}, 2_000);

uv_run(loop, uv_run_mode.UV_RUN_DEFAULT);
