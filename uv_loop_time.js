import {
  uv_default_loop,
  uv_timer_init,
  uv_timer_start,
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
  console.log(r);

  console.log('uv_timer_start:', uv_timer_start)
  r = uv_timer_start(timer, cb, 1000, 0);
  console.log(r);
  
  r = uv_run(loop, uv_run_mode.UV_RUN_DEFAULT);
  console.log(r);
}

main();