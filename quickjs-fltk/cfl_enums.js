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


export const Fl_BrowserType = {'Fl_BrowserType_Normal': 0, 'Fl_BrowserType_Select': 1, 'Fl_BrowserType_Hold': 2, 'Fl_BrowserType_Multi': 3};
export const Fl_BrowserScrollbar = {'Fl_BrowserScrollbar_None': 0, 'Fl_BrowserScrollbar_Horizontal': 1, 'Fl_BrowserScrollbar_Vertical': 2, 'Fl_BrowserScrollbar_Both': 3, 'Fl_BrowserScrollbar_AlwaysOn': 4, 'Fl_BrowserScrollbar_HorizontalAlways': 5, 'Fl_BrowserScrollbar_VerticalAlways': 6, 'Fl_BrowserScrollbar_BothAlways': 7};
export const Fl_FileType = {'Fl_FileType_Files': 0, 'Fl_FileType_Dirs': 1};
export const Fl_ButtonType = {'Fl_ButtonType_Normal': 0, 'Fl_ButtonType_Toggle': 1, 'Fl_ButtonType_Radio': 102, 'Fl_ButtonType_Hidden': 3};
export const Fl_FileDialogType = {'Fl_FileDialogType_BrowseFile': 0, 'Fl_FileDialogType_BrowseDir': 1, 'Fl_FileDialogType_BrowseMultiFile': 2, 'Fl_FileDialogType_BrowseMultiDir': 3, 'Fl_FileDialogType_BrowseSaveFile': 4, 'Fl_FileDialogType_BrowseSaveDir': 5};
export const Fl_FileDialogOptions = {'Fl_FileDialogOptions_NoOptions': 0, 'Fl_FileDialogOptions_SaveAsConfirm': 1, 'Fl_FileDialogOptions_NewFolder': 2, 'Fl_FileDialogOptions_Preview': 4, 'Fl_FileDialogOptions_UseFilterExt': 8};
export const Fl_BeepType = {'Fl_BeepType_Default': 0, 'Fl_BeepType_Message': 1, 'Fl_BeepType_Error': 2, 'Fl_BeepType_Question': 3, 'Fl_BeepType_Password': 4, 'Fl_BeepType_Notification': 5};
export const Fl_FileChooserType = {'Fl_FileChooserType_Single': 0, 'Fl_FileChooserType_Multi': 1, 'Fl_FileChooserType_Create': 2, 'Fl_FileChooserType_Directory': 4};
export const Fl_LineStyle = {'Fl_LineStyle_Solid': 0, 'Fl_LineStyle_Dash': 1, 'Fl_LineStyle_Dot': 2, 'Fl_LineStyle_DashDot': 3, 'Fl_LineStyle_DashDotDot': 4, 'Fl_LineStyle_CapFlat': 100, 'Fl_LineStyle_CapRound': 200, 'Fl_LineStyle_CapSquare': 300, 'Fl_LineStyle_JoinMiter': 1000, 'Fl_LineStyle_JoinRound': 2000, 'Fl_LineStyle_JoinBevel': 3000};
export const Fl_LabelType = {'Fl_LabelType_Normal': 0, 'Fl_LabelType_None': 1, 'Fl_LabelType_Shadow': 2, 'Fl_LabelType_Engraved': 3, 'Fl_LabelType_Embossed': 4, 'Fl_LabelType_Multi': 5, 'Fl_LabelType_Icon': 6, 'Fl_LabelType_Image': 7, 'Fl_LabelType_FreeType': 8};
export const Fl_BoxType = {'Fl_BoxType_NoBox': 0, 'Fl_BoxType_FlatBox': 1, 'Fl_BoxType_UpBox': 2, 'Fl_BoxType_DownBox': 3, 'Fl_BoxType_UpFrame': 4, 'Fl_BoxType_DownFrame': 5, 'Fl_BoxType_ThinUpBox': 6, 'Fl_BoxType_ThinDownBox': 7, 'Fl_BoxType_ThinUpFrame': 8, 'Fl_BoxType_ThinDownFrame': 9, 'Fl_BoxType_EngraveBox': 10, 'Fl_BoxType_EmbossedBox': 11, 'Fl_BoxType_EngravedFrame': 12, 'Fl_BoxType_EmbossedFrame': 13, 'Fl_BoxType_BorderBox': 14, 'Fl_BoxType_ShadowBox': 15, 'Fl_BoxType_BorderFrame': 16, 'Fl_BoxType_ShadowFrame': 17, 'Fl_BoxType_RoundedBox': 18, 'Fl_BoxType_RShadowBox': 19, 'Fl_BoxType_RoundedFrame': 20, 'Fl_BoxType_RFlatBox': 21, 'Fl_BoxType_RoundUpBox': 22, 'Fl_BoxType_RoundDownBox': 23, 'Fl_BoxType_DiamondUpBox': 24, 'Fl_BoxType_DiamondDownBox': 25, 'Fl_BoxType_OvalBox': 26, 'Fl_BoxType_OShadowBox': 27, 'Fl_BoxType_OvalFrame': 28, 'Fl_BoxType_OFlatBox': 29, 'Fl_BoxType_PlasticUpBox': 30, 'Fl_BoxType_PlasticDownBox': 31, 'Fl_BoxType_PlasticUpFrame': 32, 'Fl_BoxType_PlasticDownFrame': 33, 'Fl_BoxType_PlasticThinUpBox': 34, 'Fl_BoxType_PlasticThinDownBox': 35, 'Fl_BoxType_PlasticRoundUpBox': 36, 'Fl_BoxType_PlasticRoundDownBox': 37, 'Fl_BoxType_GtkUpBox': 38, 'Fl_BoxType_GtkDownBox': 39, 'Fl_BoxType_GtkUpFrame': 40, 'Fl_BoxType_GtkDownFrame': 41, 'Fl_BoxType_GtkThinUpBox': 42, 'Fl_BoxType_GtkThinDownBox': 43, 'Fl_BoxType_GtkThinUpFrame': 44, 'Fl_BoxType_GtkThinDownFrame': 45, 'Fl_BoxType_GtkRoundUpFrame': 46, 'Fl_BoxType_GtkRoundDownFrame': 47, 'Fl_BoxType_GleamUpBox': 48, 'Fl_BoxType_GleamDownBox': 49, 'Fl_BoxType_GleamUpFrame': 50, 'Fl_BoxType_GleamDownFrame': 51, 'Fl_BoxType_GleamThinUpBox': 52, 'Fl_BoxType_GleamThinDownBox': 53, 'Fl_BoxType_GleamRoundUpBox': 54, 'Fl_BoxType_GleamRoundDownBox': 55, 'Fl_BoxType_FreeBoxType': 56};
export const Fl_Align = {'Fl_Align_Center': 0, 'Fl_Align_Top': 1, 'Fl_Align_Bottom': 2, 'Fl_Align_Left': 4, 'Fl_Align_Right': 8, 'Fl_Align_Inside': 16, 'Fl_Align_TextOverImage': 20, 'Fl_Align_Clip': 40, 'Fl_Align_Wrap': 80, 'Fl_Align_ImageNextToText': 100, 'Fl_Align_TextNextToImage': 120, 'Fl_Align_ImageBackdrop': 200, 'Fl_Align_TopLeft': 5, 'Fl_Align_TopRight': 9, 'Fl_Align_BottomLeft': 6, 'Fl_Align_BottomRight': 10, 'Fl_Align_LeftTop': 7, 'Fl_Align_RightTop': 11, 'Fl_Align_LeftBottom': 13, 'Fl_Align_RightBottom': 14, 'Fl_Align_PositionMask': 15, 'Fl_Align_ImageMask': 320};
export const Fl_Font = {'Fl_Font_Helvetica': 0, 'Fl_Font_HelveticaBold': 1, 'Fl_Font_HelveticaItalic': 2, 'Fl_Font_HelveticaBoldItalic': 3, 'Fl_Font_Courier': 4, 'Fl_Font_CourierBold': 5, 'Fl_Font_CourierItalic': 6, 'Fl_Font_CourierBoldItalic': 7, 'Fl_Font_Times': 8, 'Fl_Font_TimesBold': 9, 'Fl_Font_TimesItalic': 10, 'Fl_Font_TimesBoldItalic': 11, 'Fl_Font_Symbol': 12, 'Fl_Font_Screen': 13, 'Fl_Font_ScreenBold': 14, 'Fl_Font_Zapfdingbats': 15};
export const Fl_Color = {'Fl_Color_ForeGround': 0, 'Fl_Color_BackGround2': 7, 'Fl_Color_Inactive': 8, 'Fl_Color_Selection': 15, 'Fl_Color_Gray0': 32, 'Fl_Color_Dark3': 39, 'Fl_Color_Dark2': 45, 'Fl_Color_Dark1': 47, 'Fl_Color_FrameDefault': 49, 'Fl_Color_BackGround': 49, 'Fl_Color_Light1': 50, 'Fl_Color_Light2': 52, 'Fl_Color_Light3': 54, 'Fl_Color_Black': 56, 'Fl_Color_Red': 88, 'Fl_Color_Green': 63, 'Fl_Color_Yellow': 95, 'Fl_Color_Blue': 216, 'Fl_Color_Magenta': 248, 'Fl_Color_Cyan': 223, 'Fl_Color_DarkRed': 72, 'Fl_Color_DarkGreen': 60, 'Fl_Color_DarkYellow': 76, 'Fl_Color_DarkBlue': 136, 'Fl_Color_DarkMagenta': 152, 'Fl_Color_DarkCyan': 140, 'Fl_Color_White': 255};
export const Fl_Event = {'Fl_Event_None': 0, 'Fl_Event_Push': 1, 'Fl_Event_Released': 2, 'Fl_Event_Enter': 3, 'Fl_Event_Leave': 4, 'Fl_Event_Drag': 5, 'Fl_Event_Focus': 6, 'Fl_Event_Unfocus': 7, 'Fl_Event_KeyDown': 8, 'Fl_Event_KeyUp': 9, 'Fl_Event_Close': 10, 'Fl_Event_Move': 11, 'Fl_Event_Shortcut': 12, 'Fl_Event_Deactivate': 13, 'Fl_Event_Activate': 14, 'Fl_Event_Hide': 15, 'Fl_Event_Show': 16, 'Fl_Event_Paste': 17, 'Fl_Event_SelectionClear': 18, 'Fl_Event_MouseWheel': 19, 'Fl_Event_DndEnter': 20, 'Fl_Event_DndDrag': 21, 'Fl_Event_DndLeave': 22, 'Fl_Event_DndRelease': 23, 'Fl_Event_ScreenConfigChanged': 24, 'Fl_Event_Fullscreen': 25, 'Fl_Event_ZoomGesture': 26, 'Fl_Event_ZoomEvent': 27, 'Fl_Event_Resize': 28};
export const Fl_Key = {'Fl_Key_None': 0, 'Fl_Key_Button': 65256, 'Fl_Key_BackSpace': 65288, 'Fl_Key_Tab': 65289, 'Fl_Key_IsoKey': 65292, 'Fl_Key_Enter': 65293, 'Fl_Key_Pause': 65299, 'Fl_Key_ScrollLock': 65300, 'Fl_Key_Escape': 65307, 'Fl_Key_Kana': 65326, 'Fl_Key_Eisu': 65327, 'Fl_Key_Yen': 65328, 'Fl_Key_JISUnderscore': 65329, 'Fl_Key_Home': 65360, 'Fl_Key_Left': 65361, 'Fl_Key_Up': 65362, 'Fl_Key_Right': 65363, 'Fl_Key_Down': 65364, 'Fl_Key_PageUp': 65365, 'Fl_Key_PageDown': 65366, 'Fl_Key_End': 65367, 'Fl_Key_Print': 65377, 'Fl_Key_Insert': 65379, 'Fl_Key_Menu': 65383, 'Fl_Key_Help': 65384, 'Fl_Key_NumLock': 65407, 'Fl_Key_KP': 65408, 'Fl_Key_KPEnter': 65421, 'Fl_Key_KPLast': 65469, 'Fl_Key_FLast': 65504, 'Fl_Key_ShiftL': 65505, 'Fl_Key_ShiftR': 65506, 'Fl_Key_ControlL': 65507, 'Fl_Key_ControlR': 65508, 'Fl_Key_CapsLock': 65509, 'Fl_Key_MetaL': 65511, 'Fl_Key_MetaR': 65512, 'Fl_Key_AltL': 65513, 'Fl_Key_AltR': 65514, 'Fl_Key_Delete': 65535};
export const Fl_Shortcut = {'Fl_Shortcut_None': 0, 'Fl_Shortcut_Shift': 65536, 'Fl_Shortcut_CapsLock': 131072, 'Fl_Shortcut_Ctrl': 262144, 'Fl_Shortcut_Alt': 524288, 'Fl_Shortcut_Meta': 4194304, 'Fl_Shortcut_Button1': 16777216, 'Fl_Shortcut_Button2': 33554432, 'Fl_Shortcut_Button3': 67108864, 'Fl_Shortcut_Buttons': 2130706432};
export const Fl_CallbackTrigger = {'Fl_CallbackTrigger_Never': 0, 'Fl_CallbackTrigger_Changed': 1, 'Fl_CallbackTrigger_NotChanged': 2, 'Fl_CallbackTrigger_Release': 4, 'Fl_CallbackTrigger_ReleaseAlways': 6, 'Fl_CallbackTrigger_EnterKey': 8, 'Fl_CallbackTrigger_EnterKeyAlways': 10, 'Fl_CallbackTrigger_EnterKeyChanged': 11};
export const Fl_TextCursor = {'Fl_TextCursor_Normal': 0, 'Fl_TextCursor_Caret': 1, 'Fl_TextCursor_Dim': 2, 'Fl_TextCursor_Block': 3, 'Fl_TextCursor_Heavy': 4, 'Fl_TextCursor_Simple': 5};
export const Fl_Cursor = {'Fl_Cursor_Default': 0, 'Fl_Cursor_Arrow': 35, 'Fl_Cursor_Cross': 66, 'Fl_Cursor_Wait': 76, 'Fl_Cursor_Insert': 77, 'Fl_Cursor_Hand': 31, 'Fl_Cursor_Help': 47, 'Fl_Cursor_Move': 27, 'Fl_Cursor_NS': 78, 'Fl_Cursor_WE': 79, 'Fl_Cursor_NWSE': 80, 'Fl_Cursor_NESW': 81, 'Fl_Cursor_N': 70, 'Fl_Cursor_NE': 69, 'Fl_Cursor_E': 49, 'Fl_Cursor_SE': 8, 'Fl_Cursor_S': 9, 'Fl_Cursor_SW': 7, 'Fl_Cursor_W': 36, 'Fl_Cursor_NW': 68, 'Fl_Cursor_None': 255};
export const Fl_Mode = {'Fl_Mode_Rgb': 0, 'Fl_Mode_Index': 1, 'Fl_Mode_Double': 2, 'Fl_Mode_Accum': 4, 'Fl_Mode_Alpha': 8, 'Fl_Mode_Depth': 16, 'Fl_Mode_Stencil': 32, 'Fl_Mode_Rgb8': 64, 'Fl_Mode_MultiSample': 128, 'Fl_Mode_Stereo': 256, 'Fl_Mode_FakeSingle': 512, 'Fl_Mode_Opengl3': 1024};
export const Fl_PackType = {'Fl_PackType_Vertical': 0, 'Fl_PackType_Horizontal': 1};
export const Fl_ScrollType = {'Fl_ScrollType_None': 0, 'Fl_ScrollType_Horizontal': 1, 'Fl_ScrollType_Vertical': 2, 'Fl_ScrollType_Both': 3, 'Fl_ScrollType_AlwaysOn': 4, 'Fl_ScrollType_HorizontalAlways': 5, 'Fl_ScrollType_VerticalAlways': 6, 'Fl_ScrollType_BothAlways': 7};
export const Fl_InputType = {'Fl_InputType_Normal': 0, 'Fl_InputType_Float': 1, 'Fl_InputType_Int': 2, 'Fl_InputType_Multiline': 4, 'Fl_InputType_Secret': 5, 'Fl_InputType_Input': 7, 'Fl_InputType_Readonly': 8, 'Fl_InputType_Wrap': 16};
export const Fl_OutputType = {'Fl_OutputType_Normal': 8, 'Fl_OutputType_Multiline': 12};
export const Fl_MenuFlag = {'Fl_MenuFlag_Normal': 0, 'Fl_MenuFlag_Inactive': 1, 'Fl_MenuFlag_Toggle': 2, 'Fl_MenuFlag_Value': 4, 'Fl_MenuFlag_Radio': 8, 'Fl_MenuFlag_Invisible': 16, 'Fl_MenuFlag_SubmenuPointer': 32, 'Fl_MenuFlag_Submenu': 64, 'Fl_MenuFlag_MenuDivider': 128, 'Fl_MenuFlag_MenuHorizontal': 256};
export const Fl_ChartType = {'Fl_ChartType_Bar': 0, 'Fl_ChartType_HorizontalBar': 1, 'Fl_ChartType_Line': 2, 'Fl_ChartType_Fill': 3, 'Fl_ChartType_Spike': 4, 'Fl_ChartType_Pie': 5, 'Fl_ChartType_SpecialPie': 6};
export const Fl_ClockType = {'Fl_ClockType_Square': 0, 'Fl_ClockType_Round': 1};
export const Fl_TableContext = {'Fl_TableContext_None': 0, 'Fl_TableContext_StartPage': 1, 'Fl_TableContext_EndPage': 2, 'Fl_TableContext_RowHeader': 4, 'Fl_TableContext_ColHeader': 8, 'Fl_TableContext_Cell': 16, 'Fl_TableContext_Table': 32, 'Fl_TableContext_RcResize': 64};
export const Fl_TableRowSelectMode = {'Fl_TableRowSelectMode_None': 0, 'Fl_TableRowSelectMode_Single': 1, 'Fl_TableRowSelectMode_Multi': 2};
export const Fl_TreeSort = {'Fl_TreeSort_None': 0, 'Fl_TreeSort_Ascending': 1, 'Fl_TreeSort_Descending': 2};
export const Fl_TreeConnectorStyle = {'Fl_TreeConnectorStyle_None': 0, 'Fl_TreeConnectorStyle_Dotted': 1, 'Fl_TreeConnectorStyle_Solid': 2};
export const Fl_TreeSelect = {'Fl_TreeSelect_None': 0, 'Fl_TreeSelect_Single': 1, 'Fl_TreeSelect_Multi': 2, 'Fl_TreeSelect_SingleDraggable': 3};
export const Fl_TreeItemSelect = {'Fl_TreeItemSelect_Deselect': 0, 'Fl_TreeItemSelect_Select': 1, 'Fl_TreeItemSelect_Toggle': 2};
export const Fl_TreeReason = {'Fl_TreeReason_None': 0, 'Fl_TreeReason_Selected': 1, 'Fl_TreeReason_Deselected': 2, 'Fl_TreeReason_Reselected': 3, 'Fl_TreeReason_Opened': 4, 'Fl_TreeReason_Closed': 5, 'Fl_TreeReason_Dragged': 6};
export const Fl_TreeItemReselectMode = {'Fl_TreeItemReselectMode_Once': 0, 'Fl_TreeItemReselectMode_Always': 1};
export const Fl_TreeItemDrawMode = {'Fl_TreeItemDrawMode_Default': 0, 'Fl_TreeItemDrawMode_LabelAndWidget': 1, 'Fl_TreeItemDrawMode_HeightFromWidget': 2};
export const Fl_SliderType = {'Fl_SliderType_Vertical': 0, 'Fl_SliderType_Horizontal': 1, 'Fl_SliderType_VerticalFill': 2, 'Fl_SliderType_HorizontalFill': 3, 'Fl_SliderType_VerticalNice': 4, 'Fl_SliderType_HorizontalNice': 5};
export const Fl_DialType = {'Fl_DialType_Normal': 0, 'Fl_DialType_Line': 1, 'Fl_DialType_Fill': 2};
export const Fl_CounterType = {'Fl_CounterType_Normal': 0, 'Fl_CounterType_Simple': 1};
export const Fl_ScrollbarType = {'Fl_ScrollbarType_Vertical': 0, 'Fl_ScrollbarType_Horizontal': 1, 'Fl_ScrollbarType_VerticalFill': 2, 'Fl_ScrollbarType_HorizontalFill': 3, 'Fl_ScrollbarType_VerticalNice': 4, 'Fl_ScrollbarType_HorizontalNice': 5};
export const Fl_WindowType = {'Fl_WindowType_Normal': 240, 'Fl_WindowType_Double': 241};
export const Fl_WrapMode = {'Fl_Wrap_None': 0, 'Fl_Wrap_At_Column': 1, 'Fl_Wrap_At_Pixel': 2, 'Fl_Wrap_At_Bounds': 3};
export const Fl_DragType = {'Fl_Drag_None': -2, 'Fl_Drag_Start_Dnd': -1, 'Fl_Drag_Char': 0, 'Fl_Drag_Word': 1, 'Fl_Drag_Line': 2};
export const Fl_Damage = {'Fl_Damage_Child': 1, 'Fl_Damage_Expose': 2, 'Fl_Damage_Scroll': 4, 'Fl_Damage_Overlay': 8, 'Fl_Damage_User1': 16, 'Fl_Damage_User2': 32, 'Fl_Damage_All': 128};
export const Fl_MenuButtonType = {'Popup1': 1, 'Popup2': 2, 'Popup12': 3, 'Popup3': 4, 'Popup13': 5, 'Popup23': 6, 'Popup123': 7};
export const Fl_FlexType = {'Fl_FlexType_Row': 0, 'Fl_FlexType_Column': 1};
export const Fl_RgbScaling = {'Fl_RgbScaling_Nearest': 0, 'Fl_RgbScaling_Bilinear': 1};