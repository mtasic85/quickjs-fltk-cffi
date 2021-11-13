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


export const Fl_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}]);
export const Fl_Image_set_scaling_algorithm = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_set_scaling_algorithm", null, ...['void', 'int']);
export const Fl_Image_scaling_algorithm = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_scaling_algorithm", null, ...['int', 'void']);
export const Fl_JPEG_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_JPEG_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_JPEG_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_JPEG_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}]);
export const Fl_JPEG_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_JPEG_Image_from = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_JPEG_Image_from", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_JPEG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}]);
export const Fl_PNG_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_PNG_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_PNG_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_PNG_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}]);
export const Fl_PNG_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_PNG_Image_from = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNG_Image_from", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int']);
export const Fl_SVG_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_SVG_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_SVG_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_SVG_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_SVG_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_SVG_Image_from = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_from", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_SVG_Image_normalize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_Image_normalize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_Image'}]);
export const Fl_BMP_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_BMP_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_BMP_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_BMP_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}]);
export const Fl_BMP_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_BMP_Image_from = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_BMP_Image_from", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_BMP_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}]);
export const Fl_GIF_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_GIF_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_GIF_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_GIF_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}]);
export const Fl_GIF_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_GIF_Image_from = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_GIF_Image_from", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_GIF_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}]);
export const Fl_Pixmap_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}, 'int', 'int', 'int', 'int']);
export const Fl_Pixmap_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_Pixmap_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}, 'int', 'int', 'int', 'int']);
export const Fl_Pixmap_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}]);
export const Fl_Pixmap_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Pixmap_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Pixmap'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}]);
export const Fl_XPM_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_XPM_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_XPM_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_XPM_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}]);
export const Fl_XPM_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XPM_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XPM_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_XBM_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_XBM_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_XBM_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_XBM_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}]);
export const Fl_XBM_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_XBM_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_XBM_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_PNM_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_PNM_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_PNM_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_PNM_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}]);
export const Fl_PNM_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_PNM_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_PNM_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Tiled_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_Tiled_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_Tiled_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_Tiled_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}]);
export const Fl_Tiled_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Tiled_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Tiled_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image'}, 'int', 'int']);
export const Fl_RGB_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_RGB_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_RGB_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_RGB_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}]);
export const Fl_RGB_Image_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int', 'int', 'int', 'int']);
export const Fl_RGB_Image_from_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_RGB_Image_from_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int', 'int', 'int', 'int']);
export const Fl_Shared_Image_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_Shared_Image_draw_ext = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_draw_ext", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}, 'int', 'int', 'int', 'int', 'int', 'int']);
export const Fl_Shared_Image_width = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_width", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_height = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_height", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'char'}}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_copy = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_copy", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_scale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_scale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}, 'int', 'int', 'int', 'int']);
export const Fl_Shared_Image_fail = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_fail", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_data_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_data_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_data_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_data_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_d = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_d", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_ld = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_ld", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_inactive = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_inactive", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}]);
export const Fl_Shared_Image_get = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_get", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int']);
export const Fl_Shared_Image_from_rgb = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Shared_Image_from_rgb", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Shared_Image'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_RGB_Image'}, 'int']);
export const Fl_register_images = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_register_images", null, ...['void', 'void']);