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


export const Fl_Surface_Device_set_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Surface_Device_set_current", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Surface_Device'}]);
export const Fl_Surface_Device_is_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Surface_Device_is_current", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Surface_Device'}]);
export const Fl_Surface_Device_surface = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Surface_Device_surface", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Surface_Device'}, 'void']);
export const Fl_Surface_Device_push_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Surface_Device_push_current", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Surface_Device'}]);
export const Fl_Surface_Device_pop_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Surface_Device_pop_current", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Surface_Device'}, 'void']);
export const Fl_Image_Surface_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}, 'int', 'int', 'int']);
export const Fl_Image_Surface_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}]);
export const Fl_Image_Surface_set_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_set_current", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}]);
export const Fl_Image_Surface_is_current = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_is_current", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}]);
export const Fl_Image_Surface_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}]);
export const Fl_Image_Surface_highres_image = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_highres_image", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}]);
export const Fl_Image_Surface_origin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_origin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_Image_Surface_set_origin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_set_origin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}, 'int', 'int']);
export const Fl_Image_Surface_rescale = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_rescale", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}]);
export const Fl_Image_Surface_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_Image_Surface_draw_decorated_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Image_Surface_draw_decorated_window", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Image_Surface'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_SVG_File_Surface_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_File_Surface_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_File_Surface'}, 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_SVG_File_Surface_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_File_Surface_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_File_Surface'}]);
export const Fl_SVG_File_Surface_origin = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_File_Surface_origin", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_File_Surface'}, 'int', 'int']);
export const Fl_SVG_File_Surface_printable_rect = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_File_Surface_printable_rect", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_File_Surface'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}, {'kind': 'PtrDecl', 'name': None, 'type': 'int'}]);
export const Fl_SVG_File_Surface_draw = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_File_Surface_draw", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_File_Surface'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);
export const Fl_SVG_File_Surface_draw_decorated_window = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_SVG_File_Surface_draw_decorated_window", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_SVG_File_Surface'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}, 'int', 'int']);