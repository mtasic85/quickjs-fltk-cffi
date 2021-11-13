import * as Fl from './quickjs-fltk/Fl.js'; 

function b0_cb(widget, win) {
    widget.set_label("b0 Works!");
    win.set_label("b0 Hello world!");
}

function b1_cb(widget, win) {
    widget.set_label("b1 Works!");
    win.set_label("b1 Hello world!");
}

function main() {
    Fl.init_all();        // init all styles
    Fl.register_images(); // necessary for image support
    Fl.lock();            // necessary for multithreaded support
    let w = Fl.Window.new(100, 100, 400, 300, "Hello ...");
    let b0 = Fl.Button.new(160, 110, 80, 40, "Click me");
    let b1 = Fl.Button.new(160, 210, 80, 40, "Click me, too");
    w.end();
    w.show();
    
    b0.set_callback(b0_cb, w);
    b1.set_callback(b1_cb, w);
    
    return Fl.run();
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