import {
  uv_default_loop,
  uv_loop_alive,
  uv_timer_init,
  uv_timer_start,
  uv_backend_timeout,
  uv_run,
  uv_run_mode,
  malloc,
  free,
  sizeof_uv_timer_t
} from './quickjs-libuv/uv.js';

function cb(timer) {
  console.log('cb:', timer);
}

function main() {
  let loop = uv_default_loop();
  console.log('loop:', loop)
  let timer = malloc(sizeof_uv_timer_t);
  let r;

  r = uv_timer_init(loop, timer);
  console.log('uv_timer_init', r);

  r = uv_loop_alive(loop)
  console.log('uv_loop_alive', r);

  r = uv_timer_start(timer, cb, 0, 2000);
  console.log('uv_timer_start', r);

  r = uv_backend_timeout(loop);
  console.log('uv_backend_timeout', r);
  
  r = uv_run(loop, uv_run_mode.UV_RUN_DEFAULT);
  console.log('uv_run', r);
}

main();
