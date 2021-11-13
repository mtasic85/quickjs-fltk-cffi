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


export const Fl_set_color_int = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_color_int", null, ...['void', 'unsigned int']);
export const Fl_set_color_rgb = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_color_rgb", null, ...['void', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_get_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_get_color", null, ...['unsigned int', 'void']);
export const Fl_push_clip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_push_clip", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_push_no_clip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_push_no_clip", null, ...['void', 'void']);
export const Fl_pop_clip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_pop_clip", null, ...['void', 'void']);
export const Fl_not_clipped = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_not_clipped", null, ...['int', 'int', 'int', 'int', 'int']);
export const Fl_clip_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_clip_box", null, ...['int', 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_restore_clip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_restore_clip", null, ...['void', 'void']);
export const Fl_set_clip_region = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_clip_region", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_clip_region = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_clip_region", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'void']);
export const Fl_point = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_point", null, ...['void', 'int', 'int']);
export const Fl_line_style = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_line_style", null, ...['void', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_rect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rect", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_focus_rect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_focus_rect", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_rect_with_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rect_with_color", null, ...['void', 'int', 'int', 'int', 'int', 'unsigned int']);
export const Fl_rectf = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rectf", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_rectf_with_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rectf_with_color", null, ...['void', 'int', 'int', 'int', 'int', 'unsigned int']);
export const Fl_rectf_with_rgb = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rectf_with_rgb", null, ...['void', 'int', 'int', 'int', 'int', 'unsigned char', 'unsigned char', 'unsigned char']);
export const Fl_line = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_line", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_line2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_line2", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_loop = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_loop", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_loop2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_loop2", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_polygon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_polygon", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_polygon2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_polygon2", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_xyline = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_xyline", null, ...['void', 'int', 'int', 'int']);
export const Fl_xyline2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_xyline2", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_xyline3 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_xyline3", null, ...['void', 'int', 'int', 'int', 'int', 'int']);
export const Fl_yxline = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_yxline", null, ...['void', 'int', 'int', 'int']);
export const Fl_yxline2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_yxline2", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_yxline3 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_yxline3", null, ...['void', 'int', 'int', 'int', 'int', 'int']);
export const Fl_arc = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_arc", null, ...['void', 'int', 'int', 'int', 'int', 'double', 'double']);
export const Fl_pie = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_pie", null, ...['void', 'int', 'int', 'int', 'int', 'double', 'double']);
export const Fl_push_matrix = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_push_matrix", null, ...['void', 'void']);
export const Fl_pop_matrix = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_pop_matrix", null, ...['void', 'void']);
export const Fl_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_scale", null, ...['void', 'double', 'double']);
export const Fl_scale2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_scale2", null, ...['void', 'double']);
export const Fl_translate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_translate", null, ...['void', 'double', 'double']);
export const Fl_rotate = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rotate", null, ...['void', 'double']);
export const Fl_mult_matrix = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_mult_matrix", null, ...['void', 'double', 'double', 'double', 'double', 'double', 'double']);
export const Fl_begin_points = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_begin_points", null, ...['void', 'void']);
export const Fl_begin_line = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_begin_line", null, ...['void', 'void']);
export const Fl_begin_loop = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_begin_loop", null, ...['void', 'void']);
export const Fl_begin_polygon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_begin_polygon", null, ...['void', 'void']);
export const Fl_vertex = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_vertex", null, ...['void', 'double', 'double']);
export const Fl_curve = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_curve", null, ...['void', 'double', 'double', 'double', 'double', 'double', 'double', 'double', 'double']);
export const Fl_arc2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_arc2", null, ...['void', 'double', 'double', 'double', 'double', 'double']);
export const Fl_circle = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_circle", null, ...['void', 'double', 'double', 'double']);
export const Fl_end_points = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_end_points", null, ...['void', 'void']);
export const Fl_end_line = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_end_line", null, ...['void', 'void']);
export const Fl_end_loop = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_end_loop", null, ...['void', 'void']);
export const Fl_end_polygon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_end_polygon", null, ...['void', 'void']);
export const Fl_begin_complex_polygon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_begin_complex_polygon", null, ...['void', 'void']);
export const Fl_gap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_gap", null, ...['void', 'void']);
export const Fl_end_complex_polygon = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_end_complex_polygon", null, ...['void', 'void']);
export const Fl_transform_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_transform_x", null, ...['double', 'double', 'double']);
export const Fl_transform_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_transform_y", null, ...['double', 'double', 'double']);
export const Fl_transform_dx = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_transform_dx", null, ...['double', 'double', 'double']);
export const Fl_transform_dy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_transform_dy", null, ...['double', 'double', 'double']);
export const Fl_transformed_vertex = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_transformed_vertex", null, ...['void', 'double', 'double']);
export const Fl_end_offscreen = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_end_offscreen", null, ...['void', 'void']);
export const Fl_set_draw_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_draw_font", null, ...['void', 'int', 'int']);
export const Fl_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_font", null, ...['int', 'void']);
export const Fl_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_size", null, ...['int', 'void']);
export const Fl_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_height", null, ...['int', 'void']);
export const Fl_set_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_height", null, ...['int', 'int', 'int']);
export const Fl_descent = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_descent", null, ...['int', 'void']);
export const Fl_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_width", null, ...['double', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_width2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_width2", null, ...['double', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_width3 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_width3", null, ...['double', 'unsigned int']);
export const Fl_text_extents = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_text_extents", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_text_extents2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_text_extents2", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_latin1_to_local = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_latin1_to_local", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_local_to_latin1 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_local_to_latin1", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_mac_roman_to_local = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_mac_roman_to_local", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_local_to_mac_roman = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_local_to_mac_roman", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int']);
export const Fl_draw2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw2", null, ...['void', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int']);
export const Fl_draw3 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw3", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int']);
export const Fl_draw4 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw4", null, ...['void', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int']);
export const Fl_rtl_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rtl_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int']);
export const Fl_measure = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_measure", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, 'int']);
export const Fl_draw5 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw5", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}, 'int']);
export const Fl_frame = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_frame", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int', 'int']);
export const Fl_frame2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_frame2", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int', 'int']);
export const Fl_draw_box = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_box", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'unsigned int']);
export const Fl_draw_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_image", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_draw_image_mono = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_image_mono", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_can_do_alpha_blending = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_can_do_alpha_blending", null, ...['char', 'void']);
export const Fl_read_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_read_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int', 'int', 'int', 'int', 'int']);
export const Fl_capture_window_part = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_capture_window_part", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int', 'int', 'int']);
export const Fl_draw_pixmap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_pixmap", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, 'int', 'int', 'int']);
export const Fl_draw_pixmap2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_pixmap2", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, 'int', 'int', 'int']);
export const Fl_measure_pixmap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_measure_pixmap", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_measure_pixmap2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_measure_pixmap2", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_shortcut_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_shortcut_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'unsigned int']);
export const Fl_shortcut_label2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_shortcut_label2", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}]);
export const Fl_old_shortcut = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_old_shortcut", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_overlay_rect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_overlay_rect", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_overlay_clear = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_overlay_clear", null, ...['void', 'void']);
export const Fl_set_cursor = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_cursor", null, ...['void', 'int']);
export const Fl_set_cursor2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_cursor2", null, ...['void', 'int', 'int', 'int']);
export const Fl_expand_text = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_expand_text", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'double', {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'double'}, 'int', 'int']);
export const Fl_set_status = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_status", null, ...['void', 'int', 'int', 'int', 'int']);
export const Fl_set_spot = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_set_spot", null, ...['void', 'int', 'int', 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_reset_spot = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_reset_spot", null, ...['void', 'void']);
export const Fl_show_colormap = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_show_colormap", null, ...['unsigned int', 'unsigned int']);
export const Fl_copy_offscreen = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_copy_offscreen", null, ...['void', 'int', 'int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_create_offscreen = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_create_offscreen", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_begin_offscreen = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_begin_offscreen", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_delete_offscreen = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_delete_offscreen", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_rescale_offscreen = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_rescale_offscreen", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_draw_text2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_draw_text2", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', 'int', 'int', 'int']);