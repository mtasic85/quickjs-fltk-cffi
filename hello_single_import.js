import {
    Fl_init_all, Fl_lock, Fl_run,
    Fl_register_images,
    Fl_Widget_set_label,
    Fl_Window_new, Fl_Window_end, Fl_Window_show, Fl_Window_set_label,
    Fl_Button_new, Fl_Button_set_callback,
} from './quickjs-fltk/fltk.js';

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
    let w = Fl_Window_new(100, 100, 400, 300, "Hello ...");
    let b0 = Fl_Button_new(160, 110, 80, 40, "Click me");
    let b1 = Fl_Button_new(160, 210, 80, 40, "Click me, too");
    Fl_Window_end(w);
    Fl_Window_show(w);
    
    Fl_Button_set_callback(b0, b0_cb, w);
    Fl_Button_set_callback(b1, b1_cb, w);
    
    return Fl_run();
}

main();

/*
const App = (props) => {
    return <Fl_Window x=100 y=100 width=400 height=300 title="Hello ...">
        <Fl_Button ..../>
        <Fl_Button ..../>
    </Fl_Window>
}
*/

/*
<html>
<head>
</head>
<body>
    <div></div>
</body>
</html>
*/