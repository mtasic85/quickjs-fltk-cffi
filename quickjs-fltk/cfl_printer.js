import { CFunction, CCallback } from './quickjs-ffi.js';
const LIB = "./libcfltk.so";
const None = null; 


const __quickjs_ffi_wrap_ptr_func_decl = (lib, name, nargs, ...types) => {
    // wrap C function
    const c_types = types.map(type => {
        if (typeof type == 'string') {
            return type;
        } else if (typeof type == 'object') {
            if (type.kind == 'PtrDecl') {
                if (type.type == 'char') {
                    return 'string';
                } else {
                    return 'pointer';
                }
            } else if (type.kind == 'PtrFuncDecl') {
                return 'pointer';
            } else {
                throw new Error('Unsupported type');
            }
        } else {
            throw new Error('Unsupported type');
        }
    });

    let c_func;

    try {
        c_func = new CFunction(lib, name, nargs, ...c_types);
    } catch (e) {
        c_func = null;
    }
    
    const js_func = (...js_args) => {
        const c_args = types.slice(1).map((type, i) => {
            const js_arg = js_args[i];

            if (typeof type == 'string') {
                return js_arg;
            } else if (typeof type == 'object') {
                if (type.kind == 'PtrFuncDecl') {
                    const c_cb = new CCallback(js_arg, null, ...[type.return_type, ...type.params_types]);
                    return c_cb.cfuncptr;
                } else {
                    return js_arg;
                }
            } else {
                return js_arg;
            }
        });

        return c_func.invoke(...c_args);
    };

    return js_func;
};

const _quickjs_ffi_wrap_ptr_func_decl = (lib, name, nargs, ...types) => {
    try {
        return __quickjs_ffi_wrap_ptr_func_decl(lib, name, nargs, ...types);
    } catch (e) {
        return undefined;
    }
};


export const Fl_Printer_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, 'void']);
export const Fl_Printer_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_begin_job = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_begin_job", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}]);
export const Fl_Printer_begin_page = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_begin_page", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_printable_rect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_printable_rect", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Printer_margins = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_margins", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Printer_origin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_origin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Printer_set_origin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_origin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, 'int', 'int']);
export const Fl_Printer_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, 'float', 'float']);
export const Fl_Printer_rotate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_rotate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, 'float']);
export const Fl_Printer_translate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_translate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, 'int', 'int']);
export const Fl_Printer_untranslate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_untranslate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_end_page = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_end_page", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_end_job = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_end_job", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_set_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_current", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_is_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_is_current", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}]);
export const Fl_Printer_print_widget = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_print_widget", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_Printer_print_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_print_window", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Printer'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_Printer_set_dialog_title = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_title", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_printer = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_printer", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_range = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_range", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_copies = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_copies", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_all", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_pages = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_pages", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_from = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_from", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_to = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_to", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_properties = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_properties", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_copyNo = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_copyNo", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_print_button = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_print_button", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_cancel_button = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_cancel_button", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_dialog_print_to_file = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_dialog_print_to_file", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_property_title = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_property_title", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_property_pagesize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_property_pagesize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_property_mode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_property_mode", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_property_use = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_property_use", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_property_save = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_property_save", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Printer_set_property_cancel = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Printer_set_property_cancel", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);