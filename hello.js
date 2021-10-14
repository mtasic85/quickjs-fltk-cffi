import { CFunction, CCallback } from './quickjs-ffi.js';

const LIBCFLTK = './libcfltk.so.1.2.5'

const _Fl_init_all = new CFunction(LIBCFLTK, 'Fl_init_all', null, 'void');
const Fl_init_all = () => _Fl_init_all.invoke();

const _Fl_register_images = new CFunction(LIBCFLTK, 'Fl_register_images', null, 'void');
const Fl_register_images = () => _Fl_register_images.invoke();

const _Fl_lock = new CFunction(LIBCFLTK, 'Fl_lock', null, 'int');
const Fl_lock = () => _Fl_lock.invoke();

const _Fl_Window_new = new CFunction(LIBCFLTK, 'Fl_Window_new', null, 'pointer', 'int', 'int', 'int', 'int', 'string');
const Fl_Window_new = (...args) => _Fl_Window_new.invoke(...args);

const _Fl_Button_new = new CFunction(LIBCFLTK, 'Fl_Button_new', null, 'pointer', 'int', 'int', 'int', 'int', 'string');
const Fl_Button_new = (...args) => _Fl_Button_new.invoke(...args);

const Fl_Window_end = new CFunction(LIBCFLTK, 'Fl_Window_end', null, 'void', 'pointer');
const Fl_Window_show = new CFunction(LIBCFLTK, 'Fl_Window_show', null, 'void', 'pointer');
const Fl_Widget_set_label = new CFunction(LIBCFLTK, 'Fl_Widget_set_label', null, 'void', 'pointer', 'string');
const Fl_Window_set_label = new CFunction(LIBCFLTK, 'Fl_Window_set_label', null, 'void', 'pointer', 'string');
const Fl_Button_set_callback = new CFunction(LIBCFLTK, 'Fl_Button_set_callback', null, 'void', 'pointer', 'pointer', 'pointer');
const Fl_run = new CFunction(LIBCFLTK, 'Fl_run', null, 'int');

let cb = new CCallback(function cb(widget, win) {
    Fl_Widget_set_label.invoke(widget, "Works!");
    Fl_Window_set_label.invoke(win, "Hello world!");
}, null, 'void', 'pointer', 'pointer').cfuncptr;

function main() {
    Fl_init_all();        // init all styles
    Fl_register_images(); // necessary for image support
    Fl_lock();            // necessary for multithreaded support
    let w = Fl_Window_new(100, 100, 400, 300, "Hello ...");
    let b = Fl_Button_new(160, 210, 80, 40, "Click me");
    Fl_Window_end.invoke(w);
    Fl_Window_show.invoke(w);
    Fl_Button_set_callback.invoke(b, cb, w);
    return Fl_run.invoke();
}

main();