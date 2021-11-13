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
export const Fl_Table_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Table_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Table_redraw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_redraw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_show", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_hide = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_hide", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_activate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_activate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_deactivate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_deactivate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_redraw_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_redraw_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int', 'int', 'int']);
export const Fl_Table_widget_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_widget_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int', 'int', 'int']);
export const Fl_Table_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_tooltip", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_tooltip", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Table_get_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_get_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'unsigned int']);
export const Fl_Table_measure_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_measure_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Table_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_label_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_label_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'unsigned int']);
export const Fl_Table_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_label_font", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_label_font", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_label_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_label_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_label_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_label_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_box", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_box", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_changed", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_clear_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_clear_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_align", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_align", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_image", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_handle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_handle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'custom_handler_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_handle_event = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_handle_event", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'custom_draw_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_resize_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_resize_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, 'int', 'int', 'int', 'int', {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_set_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_when", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_when", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_parent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_parent", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_selection_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_selection_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'unsigned int']);
export const Fl_Table_do_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_do_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_inside = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_inside", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_top_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_top_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_takes_events = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_takes_events", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_user_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_take_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_take_focus", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_clear_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_clear_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_has_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_has_visible_focus", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_user_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_handle_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_draw_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_set_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_handle_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_damage", null, ...['unsigned char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'unsigned char']);
export const Fl_Table_clear_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_clear_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_as_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_as_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_as_group = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_as_group", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_deimage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_deimage", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrFuncDecl', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_set_deleter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_deleter", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}]);
export const Fl_Table_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_visible_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_visible_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_active = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_active", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_active_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_active_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_callback", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Callback'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_begin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_begin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_end = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_end", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_find = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_find", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_add = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_add", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_insert = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_insert", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int']);
export const Fl_Table_remove = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_remove", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_remove_by_index = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_remove_by_index", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_clear = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_clear", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_child", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_resizable = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_resizable", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_set_clip_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_clip_children", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_clip_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_clip_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_init_sizes = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_init_sizes", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_draw_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw_child", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Table_update_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_update_child", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Table_draw_outside_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw_outside_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Table_draw_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw_children", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_table_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_table_box", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_table_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_table_box", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_rows = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_rows", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_rows = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_rows", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_cols = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_cols", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_cols = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_cols", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_visible_cells = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_visible_cells", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Table_is_interactive_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_is_interactive_resize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_row_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_resize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_row_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_col_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_resize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_col_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_col_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_resize_min", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_col_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_resize_min", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_row_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_resize_min", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_row_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_resize_min", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_row_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_header", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_row_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_header", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_col_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_header", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_col_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_header", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_col_header_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_header_height", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_col_header_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_header_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_row_header_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_header_width", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_row_header_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_header_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_row_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_header_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'unsigned int']);
export const Fl_Table_row_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_header_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_col_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_header_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'unsigned int']);
export const Fl_Table_col_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_header_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_row_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_height", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int']);
export const Fl_Table_row_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_col_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_width", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int']);
export const Fl_Table_col_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_row_height_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_height_all", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_col_width_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_width_all", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_row_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_row_position", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_col_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_col_position", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_row_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_row_position", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_col_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_col_position", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_top_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_top_row", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_top_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_top_row", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_is_selected = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_is_selected", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int']);
export const Fl_Table_get_selection = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_get_selection", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Table_set_selection = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_selection", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int', 'int', 'int']);
export const Fl_Table_move_cursor_with_shiftselect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_move_cursor_with_shiftselect", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int', 'int']);
export const Fl_Table_move_cursor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_move_cursor", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int', 'int']);
export const Fl_Table_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_scrollbar_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_scrollbar_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_set_tab_cell_nav = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_tab_cell_nav", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, 'int']);
export const Fl_Table_tab_cell_nav = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_tab_cell_nav", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_draw_cell = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw_cell", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_draw_cell_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_draw_cell_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_set_draw_cell_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_set_draw_cell_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_callback_col = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_callback_col", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_callback_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_callback_row", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_callback_context = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_callback_context", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_scrollbar = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_scrollbar", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_hscrollbar = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_hscrollbar", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table'}]);
export const Fl_Table_Row_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Table_Row_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Table_Row_redraw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_redraw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_show", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_hide = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_hide", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_activate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_activate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_deactivate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_deactivate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_redraw_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_redraw_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int', 'int', 'int']);
export const Fl_Table_Row_widget_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_widget_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int', 'int', 'int']);
export const Fl_Table_Row_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_tooltip", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_tooltip", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Table_Row_get_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_get_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'unsigned int']);
export const Fl_Table_Row_measure_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_measure_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Table_Row_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_label_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_label_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'unsigned int']);
export const Fl_Table_Row_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_label_font", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_label_font", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_label_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_label_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_label_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_label_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_box", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_box", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_changed", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_clear_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_clear_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_align", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_align", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_image", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_handle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_handle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'custom_handler_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_handle_event = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_handle_event", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'custom_draw_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_resize_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_resize_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, 'int', 'int', 'int', 'int', {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_set_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_when", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_when", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_parent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_parent", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_selection_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_selection_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'unsigned int']);
export const Fl_Table_Row_do_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_do_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_inside = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_inside", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_top_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_top_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_takes_events = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_takes_events", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_user_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_take_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_take_focus", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_clear_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_clear_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_has_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_has_visible_focus", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_user_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_handle_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_draw_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_set_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_handle_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_damage", null, ...['unsigned char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'unsigned char']);
export const Fl_Table_Row_clear_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_clear_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_as_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_as_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_as_group = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_as_group", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_deimage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_deimage", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrFuncDecl', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_set_deleter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_deleter", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}]);
export const Fl_Table_Row_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_visible_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_visible_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_active = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_active", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_active_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_active_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_callback", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Callback'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_begin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_begin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_end = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_end", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_find = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_find", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_add = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_add", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_insert = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_insert", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int']);
export const Fl_Table_Row_remove = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_remove", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_remove_by_index = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_remove_by_index", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_clear = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_clear", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_child", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_resizable = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_resizable", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_set_clip_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_clip_children", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_clip_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_clip_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_init_sizes = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_init_sizes", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_draw_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw_child", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Table_Row_update_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_update_child", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Table_Row_draw_outside_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw_outside_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Table_Row_draw_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw_children", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_table_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_table_box", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_table_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_table_box", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_rows = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_rows", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_rows = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_rows", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_cols = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_cols", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_cols = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_cols", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_visible_cells = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_visible_cells", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Table_Row_is_interactive_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_is_interactive_resize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_row_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_resize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_row_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_col_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_resize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_col_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_col_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_resize_min", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_col_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_resize_min", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_row_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_resize_min", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_row_resize_min = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_resize_min", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_row_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_header", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_row_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_header", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_col_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_header", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_col_header = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_header", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_col_header_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_header_height", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_col_header_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_header_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_row_header_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_header_width", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_row_header_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_header_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_row_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_header_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'unsigned int']);
export const Fl_Table_Row_row_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_header_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_col_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_header_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'unsigned int']);
export const Fl_Table_Row_col_header_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_header_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_row_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_height", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int']);
export const Fl_Table_Row_row_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_col_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_width", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int']);
export const Fl_Table_Row_col_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_row_height_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_height_all", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_col_width_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_width_all", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_row_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_row_position", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_col_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_col_position", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_row_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_position", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_col_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_col_position", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_top_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_top_row", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_top_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_top_row", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_is_selected = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_is_selected", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int']);
export const Fl_Table_Row_get_selection = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_get_selection", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Table_Row_set_selection = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_selection", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int', 'int', 'int']);
export const Fl_Table_Row_move_cursor_with_shiftselect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_move_cursor_with_shiftselect", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int', 'int']);
export const Fl_Table_Row_move_cursor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_move_cursor", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int']);
export const Fl_Table_Row_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_scrollbar_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_scrollbar_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_set_tab_cell_nav = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_tab_cell_nav", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_tab_cell_nav = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_tab_cell_nav", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_draw_cell = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw_cell", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_draw_cell_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_draw_cell_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_set_draw_cell_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_set_draw_cell_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Table_Row_callback_col = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_callback_col", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_callback_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_callback_row", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_callback_context = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_callback_context", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_scrollbar = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_scrollbar", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_hscrollbar = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_hscrollbar", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}]);
export const Fl_Table_Row_row_selected = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_row_selected", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);
export const Fl_Table_Row_select_row = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_select_row", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int', 'int']);
export const Fl_Table_Row_select_all_rows = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Table_Row_select_all_rows", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Table_Row'}, 'int']);