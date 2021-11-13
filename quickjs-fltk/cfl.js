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


/* TYPEDEF_PTR_DECL: {'kind': 'PtrDecl', 'name': 'Fl_Awake_Handler', 'type': {'kind': 'FuncDecl', 'name': 'Fl_Awake_Handler', 'return_type': 'void', 'params_types': [{'kind': 'PtrDecl', 'name': None, 'type': 'void'}]}} */
export const Fl_run = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_run", null, ...['int', 'void']);
export const Fl_check = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_check", null, ...['int', 'void']);
export const Fl_ready = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_ready", null, ...['int', 'void']);
export const Fl_release = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_release", null, ...['void', 'void']);
export const Fl_reload_scheme = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_reload_scheme", null, ...['int', 'void']);
export const Fl_menu_linespacing = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_menu_linespacing", null, ...['int', 'void']);
export const Fl_set_menu_linespacing = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_menu_linespacing", null, ...['void', 'int']);
export const Fl_lock = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_lock", null, ...['int', 'void']);
export const Fl_unlock = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_unlock", null, ...['void', 'void']);
export const Fl_awake_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_awake_callback", null, ...['int', 'Fl_Awake_Handler', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_awake = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_awake", null, ...['void', 'void']);
export const Fl_set_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_scrollbar_size", null, ...['void', 'int']);
export const Fl_scrollbar_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_scrollbar_size", null, ...['int', 'void']);
export const Fl_event = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event", null, ...['int', 'void']);
export const Fl_event_key = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_key", null, ...['int', 'void']);
export const Fl_event_original_key = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_original_key", null, ...['int', 'void']);
export const Fl_event_key_down = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_key_down", null, ...['int', 'int']);
export const Fl_event_text = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_text", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'void']);
export const Fl_event_button = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_button", null, ...['int', 'void']);
export const Fl_event_clicks = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_clicks", null, ...['int', 'void']);
export const Fl_event_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_x", null, ...['int', 'void']);
export const Fl_event_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_y", null, ...['int', 'void']);
export const Fl_event_x_root = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_x_root", null, ...['int', 'void']);
export const Fl_event_y_root = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_y_root", null, ...['int', 'void']);
export const Fl_event_dx = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_dx", null, ...['int', 'void']);
export const Fl_event_dy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_dy", null, ...['int', 'void']);
export const Fl_get_mouse = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_mouse", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_event_is_click = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_is_click", null, ...['int', 'void']);
export const Fl_event_length = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_length", null, ...['int', 'void']);
export const Fl_event_state = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_state", null, ...['int', 'void']);
export const Fl_screen_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_x", null, ...['int', 'void']);
export const Fl_screen_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_y", null, ...['int', 'void']);
export const Fl_screen_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_h", null, ...['int', 'void']);
export const Fl_screen_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_w", null, ...['int', 'void']);
export const Fl_compose = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_compose", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_compose_reset = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_compose_reset", null, ...['void', 'void']);
export const Fl_compose_state = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_compose_state", null, ...['int', 'void']);
export const Fl_reset_marked_text = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_reset_marked_text", null, ...['void', 'void']);
export const Fl_insertion_point_location = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_insertion_point_location", null, ...['void', 'int', 'int', 'int']);
export const Fl_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_copy", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int']);
export const Fl_paste_text = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_paste_text", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_paste_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_paste_image", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'int']);
export const Fl_set_scheme = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_scheme", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_scheme = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_scheme", null, ...['int', 'void']);
export const Fl_scheme_string = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_scheme_string", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'void']);
export const Fl_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_visible_focus", null, ...['int', 'void']);
export const Fl_set_visible_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_visible_focus", null, ...['void', 'int']);
export const Fl_set_box_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_box_type", null, ...['void', 'int', 'int']);
export const Fl_box_shadow_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_shadow_width", null, ...['int', 'void']);
export const Fl_set_box_shadow_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_box_shadow_width", null, ...['void', 'int']);
export const Fl_box_border_radius_max = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_border_radius_max", null, ...['int', 'void']);
export const Fl_set_box_border_radius_max = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_box_border_radius_max", null, ...['void', 'int']);
export const Fl_get_rgb_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_rgb_color", null, ...['unsigned int', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_set_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_color", null, ...['void', 'unsigned int', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_get_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_font", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_get_font_name = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_font_name", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_get_font_sizes = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_font_sizes", null, ...['int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'int'}}]);
export const Fl_set_fonts = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_fonts", null, ...['unsigned char', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_set_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_font", null, ...['void', 'int', 'int']);
export const Fl_set_font2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_font2", null, ...['void', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_set_font_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_font_size", null, ...['void', 'int']);
export const Fl_font_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_font_size", null, ...['int', 'void']);
export const Fl_add_handler = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_add_handler", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'ev_handler', 'return_type': 'int', 'params_types': ['int']}}]);
export const Fl_awake_msg = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_awake_msg", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_thread_msg = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_thread_msg", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'void']);
export const Fl_wait = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_wait", null, ...['int', 'void']);
export const Fl_wait_for = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_wait_for", null, ...['double', 'double']);
export const Fl_add_timeout = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_add_timeout", null, ...['void', 'double', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_repeat_timeout = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_repeat_timeout", null, ...['void', 'double', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_remove_timeout = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_remove_timeout", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_has_timeout = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_has_timeout", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_dnd = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_dnd", null, ...['int', 'void']);
export const Fl_grab = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_grab", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'void']);
export const Fl_set_grab = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_grab", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_first_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_first_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'void']);
export const Fl_next_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_next_window", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_should_program_quit = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_should_program_quit", null, ...['int', 'void']);
export const Fl_program_should_quit = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_program_should_quit", null, ...['void', 'int']);
export const Fl_event_inside = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_inside", null, ...['int', 'int', 'int', 'int', 'int']);
export const Fl_belowmouse = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_belowmouse", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'void']);
export const Fl_delete_widget = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_delete_widget", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_Tracker_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_Tracker_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget_Tracker'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}]);
export const Fl_Widget_Tracker_deleted = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_Tracker_deleted", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget_Tracker'}]);
export const Fl_Widget_Tracker_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Widget_Tracker_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget_Tracker'}]);
export const Fl_init_all = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_init_all", null, ...['void', 'void']);
export const Fl_redraw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_redraw", null, ...['void', 'void']);
export const Fl_event_shift = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_shift", null, ...['int', 'void']);
export const Fl_event_ctrl = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_ctrl", null, ...['int', 'void']);
export const Fl_event_command = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_command", null, ...['int', 'void']);
export const Fl_event_alt = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_alt", null, ...['int', 'void']);
export const Fl_set_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_damage", null, ...['void', 'int']);
export const Fl_damage = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_damage", null, ...['int', 'void']);
export const Fl_visual = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_visual", null, ...['int', 'int']);
export const Fl_own_colormap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_own_colormap", null, ...['void', 'void']);
export const Fl_pushed = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_pushed", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'void']);
export const Fl_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_focus", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Widget'}, 'void']);
export const Fl_set_focus = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_focus", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_version = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_version", null, ...['double', 'void']);
export const Fl_api_version = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_api_version", null, ...['int', 'void']);
export const Fl_abi_version = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_abi_version", null, ...['int', 'void']);
export const Fl_load_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_load_font", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_unload_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_unload_font", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_foreground = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_foreground", null, ...['void', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_background = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_background", null, ...['void', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_background2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_background2", null, ...['void', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_selection_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_selection_color", null, ...['void', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_inactive_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_inactive_color", null, ...['void', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_get_system_colors = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_system_colors", null, ...['void', 'void']);
export const Fl_handle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_handle", null, ...['int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_handle_ = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_handle_", null, ...['int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_add_idle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_add_idle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_has_idle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_has_idle", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_remove_idle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_remove_idle", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_flush = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_flush", null, ...['void', 'void']);
export const Fl_set_screen_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_screen_scale", null, ...['void', 'int', 'float']);
export const Fl_screen_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_scale", null, ...['float', 'int']);
export const Fl_screen_scaling_supported = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_scaling_supported", null, ...['int', 'void']);
export const Fl_screen_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_count", null, ...['int', 'void']);
export const Fl_screen_num = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_num", null, ...['int', 'int', 'int']);
export const Fl_screen_xywh = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_xywh", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, 'int']);
export const Fl_screen_dpi = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_dpi", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'float'}, {'kind': 'PtrDecl', 'name': None, 'type': 'float'}, 'int']);
export const Fl_screen_work_area = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_screen_work_area", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, 'int']);
export const Fl_open_display = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_open_display", null, ...['void', 'void']);
export const Fl_close_display = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_close_display", null, ...['void', 'void']);
export const Fl_box_dx = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_dx", null, ...['int', 'int']);
export const Fl_box_dy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_dy", null, ...['int', 'int']);
export const Fl_box_dw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_dw", null, ...['int', 'int']);
export const Fl_box_dh = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_dh", null, ...['int', 'int']);
export const Fl_mac_os_version = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_mac_os_version", null, ...['int', 'void']);
export const Fl_event_clipboard = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_clipboard", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'void']);
export const Fl_event_clipboard_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_clipboard_type", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'void']);
export const Fl_clipboard_contains = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_clipboard_contains", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_event_dispatch = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_event_dispatch", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'int', 'params_types': ['int', {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}]);
export const Fl_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_inactive", null, ...['unsigned int', 'unsigned int']);
export const Fl_lighter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_lighter", null, ...['unsigned int', 'unsigned int']);
export const Fl_darker = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_darker", null, ...['unsigned int', 'unsigned int']);
export const Fl_set_box_type_cb = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_box_type_cb", null, ...['void', 'int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'int'}, {'kind': 'Typename', 'name': None, 'type': 'unsigned int'}]}}, 'int', 'int', 'int', 'int']);
export const Fl_draw_box_active = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_box_active", null, ...['int', 'void']);
export const Fl_gray_ramp = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_gray_ramp", null, ...['unsigned int', 'int']);
export const Fl_color_average = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_color_average", null, ...['unsigned int', 'unsigned int', 'unsigned int', 'float']);
export const Fl_contrast = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_contrast", null, ...['unsigned int', 'unsigned int', 'unsigned int']);
export const Fl_rgb_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rgb_color", null, ...['unsigned int', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_rgb_color2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rgb_color2", null, ...['unsigned int', 'unsigned char']);
export const Fl_cmap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_cmap", null, ...['unsigned int', 'unsigned int']);
export const Fl_box_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_box_color", null, ...['unsigned int', 'unsigned int']);
export const Fl_set_box_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_box_color", null, ...['void', 'unsigned int']);
export const Fl_add_system_handler = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_add_system_handler", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'int', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_remove_system_handler = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_remove_system_handler", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': None, 'return_type': 'int', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}]);
export const Fl_gl_visual = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_gl_visual", null, ...['int', 'int']);
export const Fl_add_clipboard_notify = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_add_clipboard_notify", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': ['int', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_remove_clipboard_notify = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_remove_clipboard_notify", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': ['int', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]}}]);