import { Fl_init_all, Fl_lock, Fl_run } from './quickjs-fltk/cfl.js';
import { Fl_register_images } from './quickjs-fltk/cfl_image.js';
import { Fl_Widget_set_label } from './quickjs-fltk/cfl_widget.js';
import { Fl_Window_new, Fl_Window_end, Fl_Window_show, Fl_Window_set_label, Fl_Window_resizable } from './quickjs-fltk/cfl_window.js';
import { Fl_Button_new, Fl_Button_set_callback } from './quickjs-fltk/cfl_button.js';
import { Fl_FlexType } from './quickjs-fltk/cfl_enums.js';
import { Fl_Flex_new, Fl_Flex_set_size, Fl_Flex_end } from './quickjs-fltk/cfl_group.js';

function b0_cb(widget, win) {
    Fl_Widget_set_label(widget, "b0 Works!");
    Fl_Window_set_label(win, "b0 Hello world!");
}

function b1_cb(widget, win) {
    Fl_Widget_set_label(widget, "b1 Works!");
    Fl_Window_set_label(win, "b1 Hello world!");
}

function main() {
    Fl_init_all();        // init all styles
    Fl_register_images(); // necessary for image support
    Fl_lock();            // necessary for multithreaded support
    let w = Fl_Window_new(100, 100, 400, 300, 'Example: flex_0');
    // let col = Fl_Flex_new(Fl_FlexType.Fl_FlexType_Column); // NOTE: but in CFLTK
    let col = Fl_Flex_new(0, 0, 400, 300, "\x00");
    let b0 = Fl_Button_new(0, 0, 0, 0, "Expanding");
    let b1 = Fl_Button_new(0, 0, 0, 0, "Normal");
    Fl_Flex_set_size(col, b1, 100);
    Fl_Flex_end(col);
    Fl_Window_resizable(w, w);
    Fl_Window_end(w);
    Fl_Window_show(w);
    
    Fl_Button_set_callback(b0, b0_cb, w);
    Fl_Button_set_callback(b1, b1_cb, w);
    
    return Fl_run();
}

main();
