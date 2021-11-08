import { CFunction, CCallback } from './quickjs-ffi.js';
import { Fl_init_all, Fl_lock, Fl_run } from './quickjs-fltk/cfl.js';
import { Fl_register_images } from './quickjs-fltk/cfl_image.js';
import { Fl_Widget_set_label } from './quickjs-fltk/cfl_widget.js';
import { Fl_Window_new, Fl_Window_end, Fl_Window_show, Fl_Window_set_label } from './quickjs-fltk/cfl_window.js';
import { Fl_Button_new } from './quickjs-fltk/cfl_button.js';

/*
const _quickjs_ffi_wrap_ptr_func_decl = (lib, name, nargs, ...types) => {
    // wrap C function
    const c_types = types.map(type => {
        if (typeof type == 'string') {
            return type;
        } else if (typeof type == 'object') {
            if (type.type == 'PtrFuncDecl') {
                return 'pointer';
            } else {
                throw new Error('Unsupported type');
            }
        } else {
            throw new Error('Unsupported type');
        }
    });

    const c_func = new CFunction(lib, name, nargs, ...c_types);
    
    const js_func = (...js_args) => {
        const c_args = types.slice(1).map((type, i) => {
            const js_arg = js_args[i];

            if (typeof type == 'string') {
                return js_arg;
            } else if (typeof type == 'object') {
                if (type.type == 'PtrFuncDecl') {
                    const c_cb = new CCallback(js_arg, null, ...type.types);
                    return c_cb.cfuncptr;
                } else {
                    throw new Error('Unsupported type');
                }
            } else {
                throw new Error('Unsupported type');
            }
        });

        return c_func.invoke(...c_args);
    };

    return js_func;
};
*/

const LIBCFLTK = './libcfltk.so';

// const Fl_init_all = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_init_all', null, 'void');
// const Fl_register_images = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_register_images', null, 'void')
// const Fl_lock = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_lock', null, 'int');
// const Fl_Window_new = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Window_new', null, 'pointer', 'int', 'int', 'int', 'int', 'string');
// const Fl_Button_new = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Button_new', null, 'pointer', 'int', 'int', 'int', 'int', 'string');
// const Fl_Window_end = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Window_end', null, 'void', 'pointer');
// const Fl_Window_show = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Window_show', null, 'void', 'pointer');
// const Fl_Widget_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Widget_set_label', null, 'void', 'pointer', 'string');
// const Fl_Window_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Window_set_label', null, 'void', 'pointer', 'string');
// const Fl_run = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_run', null, 'int');

/*
const Fl_Button_set_callback = _quickjs_ffi_wrap_ptr_func_decl(LIBCFLTK, 'Fl_Button_set_callback', null,
    'void', 'pointer', {'type': 'PtrFuncDecl', 'types': ['void', 'pointer', 'pointer']}, 'pointer'
);
*/

function cb(widget, win) {
    Fl_Widget_set_label(widget, "Works!");
    Fl_Window_set_label(win, "Hello world!");
}

function main() {
    Fl_init_all();        // init all styles
    Fl_register_images(); // necessary for image support
    Fl_lock();            // necessary for multithreaded support
    let w = Fl_Window_new(100, 100, 400, 300, "Hello ...");
    let b = Fl_Button_new(160, 210, 80, 40, "Click me");
    Fl_Window_end(w);
    Fl_Window_show(w);
    /*
    Fl_Button_set_callback(b, cb, w);
    */
    return Fl_run();
}

main();