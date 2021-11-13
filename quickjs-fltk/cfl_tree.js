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
export const Fl_Tree_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_redraw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_redraw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_show", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_hide = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_hide", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_activate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_activate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_deactivate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_deactivate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_redraw_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_redraw_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int', 'int', 'int', 'int']);
export const Fl_Tree_widget_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_widget_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int', 'int', 'int', 'int']);
export const Fl_Tree_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_tooltip", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_tooltip", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_get_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_get_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned int']);
export const Fl_Tree_measure_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_measure_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Tree_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_label_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_label_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_label_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned int']);
export const Fl_Tree_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_label_font", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_label_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_label_font", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_label_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_label_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_label_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_label_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_label_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_label_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_box", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_box", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_changed", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_clear_changed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_clear_changed", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_align", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_align = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_align", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_image", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_handle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_handle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'custom_handler_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_handle_event = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_handle_event", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'custom_draw_callback', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_resize_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_resize_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, 'int', 'int', 'int', 'int', {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_set_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_when", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_when = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_when", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_parent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_parent", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_selection_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_selection_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned int']);
export const Fl_Tree_do_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_do_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_inside = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_inside", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_top_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_top_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_takes_events = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_takes_events", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_user_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_take_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_take_focus", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_clear_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_clear_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_visible_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_has_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_has_visible_focus", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_user_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_draw_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_handle_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_draw_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_draw_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_set_handle_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_handle_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_damage", null, ...['unsigned char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned char']);
export const Fl_Tree_clear_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_clear_damage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_as_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_as_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_as_group = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_as_group", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_deimage", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_deimage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_deimage", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrFuncDecl', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_set_deleter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_deleter", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}]);
export const Fl_Tree_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_visible_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_visible_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_active = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_active", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_active_r = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_active_r", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_callback", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Callback'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_begin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_begin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_end = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_end", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_show_self = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_show_self", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_root_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_root_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_root = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_root", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_root = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_root", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_add = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_add", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_insert_above = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_insert_above", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_insert = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_insert", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_Tree_find_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_find_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_find_item_mut = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_find_item_mut", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_remove = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_remove", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_clear = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_clear", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_clear_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_clear_children", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_find_clicked = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_find_clicked", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_item_clicked = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_clicked", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_first = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_first", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_first_visible_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_first_visible_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_next = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_next", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_prev = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_prev", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_last = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_last", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_last_visible_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_last_visible_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_next_visible_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_next_visible_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_first_selected_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_first_selected_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_last_selected_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_last_selected_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_next_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_next_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int', 'int']);
export const Fl_Tree_next_selected_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_next_selected_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_get_selected_items = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_get_selected_items", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}}]);
export const Fl_Tree_get_items = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_get_items", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}}]);
export const Fl_Tree_open = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_open", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_Tree_open_toggle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_open_toggle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_close = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_close", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_Tree_is_open = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_is_open", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_is_close = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_is_close", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_select = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_select", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_Tree_select_toggle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_select_toggle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_deselect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_deselect", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_Tree_deselect_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_deselect_all", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_select_only = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_select_only", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_select_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_select_all", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_extend_selection_dir = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_extend_selection_dir", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int', 'int', 'int']);
export const Fl_Tree_extend_selection = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_extend_selection", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int', 'int']);
export const Fl_Tree_set_item_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_get_item_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_get_item_focus", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_is_selected = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_is_selected", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_item_labelfont = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_labelfont", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_item_labelfont = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_labelfont", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_item_labelsize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_labelsize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_item_labelsize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_labelsize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_item_labelfgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_labelfgcolor", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_item_labelfgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_labelfgcolor", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned int']);
export const Fl_Tree_item_labelbgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_labelbgcolor", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_item_labelbgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_labelbgcolor", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned int']);
export const Fl_Tree_connectorcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_connectorcolor", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_connectorcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_connectorcolor", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'unsigned int']);
export const Fl_Tree_marginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_marginleft", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_marginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_marginleft", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_margintop = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_margintop", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_margintop = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_margintop", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_marginbottom = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_marginbottom", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_marginbottom = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_marginbottom", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_linespacing = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_linespacing", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_linespacing = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_linespacing", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_openchild_marginbottom = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_openchild_marginbottom", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_openchild_marginbottom = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_openchild_marginbottom", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_usericonmarginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_usericonmarginleft", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_usericonmarginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_usericonmarginleft", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_labelmarginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_labelmarginleft", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_labelmarginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_labelmarginleft", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_widgetmarginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_widgetmarginleft", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_widgetmarginleft = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_widgetmarginleft", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_connectorwidth = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_connectorwidth", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_connectorwidth = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_connectorwidth", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_usericon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_usericon", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_usericon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_usericon", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_openicon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_openicon", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_openicon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_openicon", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_closeicon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_closeicon", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_closeicon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_closeicon", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_Tree_showcollapse = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_showcollapse", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_showcollapse = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_showcollapse", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_showroot = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_showroot", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_showroot = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_showroot", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_connectorstyle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_connectorstyle", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_connectorstyle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_connectorstyle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_sortorder = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_sortorder", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_sortorder = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_sortorder", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_selectbox = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_selectbox", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_selectbox = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_selectbox", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_selectmode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_selectmode", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_selectmode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_selectmode", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_item_reselect_mode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_reselect_mode", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_item_reselect_mode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_reselect_mode", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_item_draw_mode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_item_draw_mode", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_item_draw_mode = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_item_draw_mode", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_calc_dimensions = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_calc_dimensions", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_calc_tree = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_calc_tree", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_recalc_tree = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_recalc_tree", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_displayed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_displayed", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_show_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_show_item", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_show_item_top = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_show_item_top", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_show_item_middle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_show_item_middle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_show_item_bottom = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_show_item_bottom", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_display = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_display", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_vposition = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_vposition", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_vposition = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_vposition", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_hposition = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_hposition", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_hposition = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_hposition", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_is_scrollbar = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_is_scrollbar", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Tree_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_scrollbar_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_scrollbar_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_is_vscroll_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_is_vscroll_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_is_hscroll_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_is_hscroll_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_callback_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_callback_item", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_callback_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_callback_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_set_callback_reason = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_callback_reason", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, 'int']);
export const Fl_Tree_callback_reason = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_callback_reason", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}]);
export const Fl_Tree_Item_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_label_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_label_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_label_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_label_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_label_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_label_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_label_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_label_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_show_self = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_show_self", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_set_Item_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_set_Item_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_Item_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_labelfont = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_labelfont", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_labelfont = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_labelfont", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_labelsize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_labelsize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_labelsize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_labelsize", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_labelfgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_labelfgcolor", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'unsigned int']);
export const Fl_Tree_Item_labelfgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_labelfgcolor", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_labelcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_labelcolor", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'unsigned int']);
export const Fl_Tree_Item_labelcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_labelcolor", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_labelbgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_labelbgcolor", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'unsigned int']);
export const Fl_Tree_Item_labelbgcolor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_labelbgcolor", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_widget = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_widget", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Tree_Item_widget = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_widget", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_child", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_has_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_has_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_find_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_find_child", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_Item_remove_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_remove_child", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_Item_clear_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_clear_children", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_swap_children = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_swap_children", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_find_child_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_find_child_item", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tree_Item_replace = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_replace", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_replace_child = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_replace_child", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_deparent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_deparent", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_reparent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_reparent", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_move = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_move", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int', 'int']);
export const Fl_Tree_Item_move_above = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_move_above", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_move_below = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_move_below", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_move_into = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_move_into", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_depth = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_depth", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_prev = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_prev", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_next = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_next", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_next_sibling = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_next_sibling", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_prev_sibling = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_prev_sibling", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_update_prev_next = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_update_prev_next", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_parent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_parent", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_set_parent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_set_parent", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_tree = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_tree", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_open = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_open", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_close = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_close", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_is_open = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_open", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_is_close = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_close", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_open_toggle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_open_toggle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_select = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_select", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_select_toggle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_select_toggle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_select_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_select_all", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_deselect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_deselect", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_deselect_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_deselect_all", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_is_root = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_root", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_is_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_is_active = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_active", null, ...['char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_is_activated = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_activated", null, ...['char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_deactivate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_deactivate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_activate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_activate", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_is_selected = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_is_selected", null, ...['char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_Array_total = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_total", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}]);
export const Fl_Tree_Item_Array_swap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_swap", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int', 'int']);
export const Fl_Tree_Item_Array_move = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_move", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int', 'int']);
export const Fl_Tree_Item_Array_deparent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_deparent", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int']);
export const Fl_Tree_Item_Array_reparent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_reparent", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, 'int']);
export const Fl_Tree_Item_Array_clear = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_clear", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}]);
export const Fl_Tree_Item_Array_add = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_add", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_Array_insert = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_insert", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_Array_replace = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_replace", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_Array_remove = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_remove", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int']);
export const Fl_Tree_Item_Array_remove_item = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_remove_item", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}]);
export const Fl_Tree_Item_Array_at = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_at", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}, 'int']);
export const Fl_Tree_Item_Array_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tree_Item_Array_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tree_Item_Array'}]);