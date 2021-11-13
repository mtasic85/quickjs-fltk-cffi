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


/* TYPEDEF_FUNC_DECL: {'kind': 'FuncDecl', 'name': 'Fl_Callback', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]} */
/* TYPEDEF_PTR_DECL: {'kind': 'PtrDecl', 'name': 'custom_handler_callback', 'type': {'kind': 'FuncDecl', 'name': 'custom_handler_callback', 'return_type': 'int', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}} */
/* TYPEDEF_PTR_DECL: {'kind': 'PtrDecl', 'name': 'custom_draw_callback', 'type': {'kind': 'FuncDecl', 'name': 'custom_draw_callback', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}} */
export const Fl_Widget_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Widget_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Widget_redraw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_redraw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_show", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_hide = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_hide", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_activate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_activate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_deactivate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_deactivate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_redraw_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_redraw_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int', 'int', 'int', 'int']);
export const Fl_Widget_widget_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_widget_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int', 'int', 'int', 'int']);
export const Fl_Widget_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_tooltip", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_tooltip", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Widget_get_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_get_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'unsigned int']);
export const Fl_Widget_measure_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_measure_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Widget_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_label_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_label_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'unsigned int']);
export const Fl_Widget_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_label_font", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_label_font", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_label_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_label_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_label_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_label_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_box", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_box", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_changed", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_clear_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_clear_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_align", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_align", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_image", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_handle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_handle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'custom_handler_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_handle_event = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_handle_event", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'custom_draw_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_resize_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_resize_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, 'int', 'int', 'int', 'int', {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_set_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_when", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_when", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_parent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_parent", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_selection_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_selection_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'unsigned int']);
export const Fl_Widget_do_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_do_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_inside = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_inside", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_top_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_top_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_takes_events = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_takes_events", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_user_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_take_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_take_focus", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_clear_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_clear_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_Widget_has_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_has_visible_focus", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_user_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_draw_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_handle_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_draw_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_set_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_handle_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_damage", null, ...['unsigned char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'unsigned char']);
export const Fl_Widget_clear_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_clear_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_as_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_as_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_as_group = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_as_group", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_deimage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_deimage", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_set_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrFuncDecl', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Widget_set_deleter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_set_deleter", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}]);
export const Fl_Widget_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_visible_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_visible_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_active = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_active", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_active_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_active_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_callback", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Callback'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);