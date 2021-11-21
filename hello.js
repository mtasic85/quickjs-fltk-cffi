import { Fl_init_all, Fl_lock, Fl_run } from 'local/quickjs-fltk-cffi/cfl.js';
import { Fl_register_images } from 'local/quickjs-fltk-cffi/cfl_image.js';
import { Fl_Widget_set_label } from 'local/quickjs-fltk-cffi/cfl_widget.js';
import { Fl_Window_new, Fl_Window_end, Fl_Window_show, Fl_Window_set_label, Fl_Window_resizable } from 'local/quickjs-fltk-cffi/cfl_window.js';
import { Fl_Button_new, Fl_Button_set_callback } from 'local/quickjs-fltk-cffi/cfl_button.js';

function b0_cb(widget, win) {
    Fl_Widget_set_label(widget, "b0 works!");
    Fl_Window_set_label(win, "Hello b0");
}

function b1_cb(widget, win) {
    Fl_Widget_set_label(widget, "b1 works!");
    Fl_Window_set_label(win, "Hello b1");
}

function main() {
    Fl_init_all();        // init all styles
    Fl_register_images(); // necessary for image support
    Fl_lock();            // necessary for multithreaded support
    let w = Fl_Window_new(100, 100, 400, 300, "Example: Hello World");
    let b0 = Fl_Button_new(160, 110, 100, 40, "Button 0");
    let b1 = Fl_Button_new(160, 210, 100, 40, "Button 1");
    Fl_Window_resizable(w, w);
    Fl_Window_end(w);
    Fl_Window_show(w);
    
    Fl_Button_set_callback(b0, b0_cb, w);
    Fl_Button_set_callback(b1, b1_cb, w);
    
    return Fl_run();
}

main();
