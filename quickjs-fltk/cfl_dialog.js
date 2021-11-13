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


export const Fl_Native_File_Chooser_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, 'int']);
export const Fl_Native_File_Chooser_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}]);
export const Fl_Native_File_Chooser_filename = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_filename", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}]);
export const Fl_Native_File_Chooser_filenames = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_filenames", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, 'int']);
export const Fl_Native_File_Chooser_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}]);
export const Fl_Native_File_Chooser_set_directory = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_set_directory", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Native_File_Chooser_directory = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_directory", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}]);
export const Fl_Native_File_Chooser_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_show", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}]);
export const Fl_Native_File_Chooser_set_option = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_set_option", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, 'int']);
export const Fl_Native_File_Chooser_set_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_set_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, 'int']);
export const Fl_Native_File_Chooser_set_title = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_set_title", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Native_File_Chooser_set_filter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_set_filter", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Native_File_Chooser_set_preset_file = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_set_preset_file", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Native_File_Chooser_errmsg = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Native_File_Chooser_errmsg", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Native_File_Chooser'}]);
export const Fl_message = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_message", null, ...['void', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_alert = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_alert", null, ...['void', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_choice = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_choice", null, ...['int', 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_input = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_input", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_password = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_password", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_message2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_message2", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_alert2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_alert2", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_choice2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_choice2", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_input2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_input2", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_password2 = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_password2", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Help_Dialog_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}, 'void']);
export const Fl_Help_Dialog_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_h = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_h", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_hide = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_hide", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_load = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_load", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Help_Dialog_position = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_position", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}, 'int', 'int']);
export const Fl_Help_Dialog_resize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_resize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}, 'int', 'int', 'int', 'int']);
export const Fl_Help_Dialog_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_show", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_set_text_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_set_text_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}, 'int']);
export const Fl_Help_Dialog_text_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_text_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_set_value = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_set_value", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_Help_Dialog_value = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_value", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_w = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_w", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_x = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_x", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_Help_Dialog_y = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_Help_Dialog_y", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_Help_Dialog'}]);
export const Fl_beep = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_beep", null, ...['void', 'int']);
export const Fl_File_Chooser_new = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_new", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_delete = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_delete", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_newButton = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_newButton", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_previewButton = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_previewButton", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_showHiddenButton = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_showHiddenButton", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_callback = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_callback", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': {'kind': 'FuncDecl', 'name': 'cb', 'return_type': 'void', 'params_types': [{'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}}, {'kind': 'Typename', 'name': None, 'type': {'kind': 'PtrDecl', 'name': None, 'type': 'void'}}]}}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_File_Chooser_set_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'unsigned int']);
export const Fl_File_Chooser_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_count = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_count", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_directory = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_directory", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_directory = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_directory", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_filter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_filter", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_filter = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_filter", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_filter_value = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_filter_value", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_filter_value = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_filter_value", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'int']);
export const Fl_File_Chooser_hide = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_hide", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_iconsize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_iconsize", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'unsigned char']);
export const Fl_File_Chooser_iconsize = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_iconsize", null, ...['unsigned char', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_ok_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_ok_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_ok_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_ok_label", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_preview = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_preview", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'int']);
export const Fl_File_Chooser_preview = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_preview", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_rescan = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_rescan", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_rescan_keep_filename = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_rescan_keep_filename", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_show = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_show", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_shown = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_shown", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_text_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_text_color", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'unsigned int']);
export const Fl_File_Chooser_text_color = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_text_color", null, ...['unsigned int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_text_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_text_font", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'int']);
export const Fl_File_Chooser_text_font = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_text_font", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_text_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_text_size", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'int']);
export const Fl_File_Chooser_text_size = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_text_size", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_type", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'int']);
export const Fl_File_Chooser_type = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_type", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_user_data", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'void'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_user_data = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_user_data", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'void'}]);
export const Fl_File_Chooser_value = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_value", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, 'int']);
export const Fl_File_Chooser_set_value = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_value", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_visible = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_visible", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'Fl_File_Chooser'}]);
export const Fl_File_Chooser_set_add_favorites_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_add_favorites_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_all_files_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_all_files_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_custom_filter_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_custom_filter_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_existing_file_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_existing_file_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_favorites_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_favorites_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_filename_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_filename_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_filesystems_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_filesystems_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_manage_favorites_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_manage_favorites_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_new_directory_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_new_directory_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_new_directory_tooltip = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_new_directory_tooltip", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_preview_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_preview_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_save_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_save_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_show_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_show_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_File_Chooser_set_hidden_label = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_File_Chooser_set_hidden_label", null, ...['void', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}]);
export const Fl_dir_chooser = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_dir_chooser", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_file_chooser = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_file_chooser", null, ...[{'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, 'int']);
export const Fl_color_chooser = _quickjs_ffi_wrap_ptr_func_decl(LIB, "Fl_color_chooser", null, ...['int', {'kind': 'PtrDecl', 'name': None, 'type': 'char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, {'kind': 'PtrDecl', 'name': None, 'type': 'unsigned char'}, 'int']);