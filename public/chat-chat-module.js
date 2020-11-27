(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/@vex/animations/scale-fade-in.animation.ts":
/*!********************************************************!*\
  !*** ./src/@vex/animations/scale-fade-in.animation.ts ***!
  \********************************************************/
/*! exports provided: scaleFadeInAnimation, scaleFadeIn400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleFadeInAnimation", function() { return scaleFadeInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleFadeIn400ms", function() { return scaleFadeIn400ms; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

function scaleFadeInAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scaleFadeIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(0.8)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'scale(1)',
                opacity: 1
            }))
        ])
    ]);
}
const scaleFadeIn400ms = scaleFadeInAnimation(400);


/***/ }),

/***/ "./src/app/chat/chat-conversation/chat-conversation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/chat/chat-conversation/chat-conversation.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatConversationComponent", function() { return ChatConversationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@vex/utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-vert */ "./node_modules/@iconify/icons-ic/twotone-more-vert.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-send */ "./node_modules/@iconify/icons-ic/twotone-send.js");
/* harmony import */ var _iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-circle */ "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-account-circle */ "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear-all */ "./node_modules/@iconify/icons-ic/twotone-clear-all.js");
/* harmony import */ var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_volume_mute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-volume-mute */ "./node_modules/@iconify/icons-ic/twotone-volume-mute.js");
/* harmony import */ var _iconify_icons_ic_twotone_volume_mute__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_volume_mute__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@vex/components/scrollbar/scrollbar.component */ "./src/@vex/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ "./node_modules/@iconify/icons-ic/twotone-menu.js");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _vex_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../@vex/services/auth.service */ "./src/@vex/services/auth.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");



























function ChatConversationComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/images/" + (ctx_r0.chat == null ? null : ctx_r0.chat.from == null ? null : ctx_r0.chat.from.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatConversationComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} }
function ChatConversationComponent_ic_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ic-icon", 26);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.icCheckCircle);
} }
function ChatConversationComponent_ng_container_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", message_r5.message, " ");
} }
function ChatConversationComponent_ng_container_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r5.message, "");
} }
function ChatConversationComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatConversationComponent_ng_container_16_ng_container_1_Template, 4, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatConversationComponent_ng_container_16_ng_container_2_Template, 4, 2, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r5.from === ctx_r3.userInfo.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r5.from != ctx_r3.userInfo.id);
} }
// import { chats } from '../../static_data/chats';
let ChatConversationComponent = class ChatConversationComponent {
    constructor(route, chatService, authService, cd) {
        this.route = route;
        this.chatService = chatService;
        this.authService = authService;
        this.cd = cd;
        this.messages = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]()
        });
        this.icAccountCircle = _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icClearAll = _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icVolumeMute = _iconify_icons_ic_twotone_volume_mute__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icCheckCircle = _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icMoreVert = _iconify_icons_ic_twotone_more_vert__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSend = _iconify_icons_ic_twotone_send__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackById"];
        this.userInfo = {
            id: ''
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.userInfo;
        this.route.params.subscribe((params) => {
            console.log(params);
            this.messages = [];
            this.getMessages(params.chatId);
            // this.cd.detectChanges();
            // this.chat = chats.find(chat => chat.id === chatId);
            // this.chat.unreadCount = 0;
            // this.filterMessages(chatId);
            // this.cd.detectChanges();
            // this.scrollToBottom();
        });
    }
    // filterMessages(id: ChatMessage['id']) {
    //   this.messages = chatMessages.filter(message => message.id === id);
    // }
    send() {
        console.log("FDgfsd");
        if (this.form.get("message").value) {
            let message = {
                from: this.userInfo.id,
                to: this.chat.from,
                message: this.form.get("message").value,
                post_id: this.chat.post_id
            };
            this.messages.push(Object.assign({}, message));
            this.form.get('message').setValue('');
            this.chatService.sendPostMessage(message).subscribe((res) => {
                console.log(res);
            });
        }
        // this.cd.detectChanges();
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.scrollbar.scrollbarRef.getScrollElement().scrollTo({
            behavior: 'smooth',
            top: this.scrollbar.scrollbarRef.getContentElement().clientHeight
        });
    }
    openDrawer() {
        this.chatService.drawerOpen.next(true);
        this.cd.markForCheck();
    }
    closeDrawer() {
        this.chatService.drawerOpen.next(false);
        this.cd.markForCheck();
    }
    getMessages(chat_id) {
        this.chatService.getChatMessages(chat_id).subscribe((resp) => {
            this.messages = resp.messages || [];
            this.chat = resp.chat;
            this.cd.detectChanges();
        });
    }
    getTitle(chat) {
        if (chat && chat.from && chat.post_id) {
            return `${chat.from.first_name} (${chat.post_id.title})`;
        }
        return '';
    }
};
ChatConversationComponent.ɵfac = function ChatConversationComponent_Factory(t) { return new (t || ChatConversationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
ChatConversationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatConversationComponent, selectors: [["vex-chat-conversation"]], viewQuery: function ChatConversationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_13__["ScrollbarComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollbar = _t.first);
    } }, decls: 37, vars: 20, consts: [["fxLayout", "column", 1, "w-full", "h-full", "overflow-hidden"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "bg-app-bar", "p-4", "border-b"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "block", "md:hidden", 3, "click"], ["size", "24px", 3, "icIcon"], [1, "relative"], ["class", "avatar", "fxFlex", "none", 3, "src", 4, "ngIf"], ["src", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png", "class", "avatar", 4, "ngIf"], ["class", "bg-card absolute -bottom-1 -right-1 rounded-full text-green", 3, "icon", 4, "ngIf"], ["fxFlex", "auto"], [1, "subheading-1"], [1, "caption", "leading-none", "text-secondary"], ["mat-icon-button", "", "type", "button", "disabled", "", 2, "width", "38px", "height", "38px", "line-height", "38px", 3, "matMenuTriggerFor"], [1, "text-secondary", 3, "icIcon"], [1, "p-4", "flex-auto"], [4, "ngFor", "ngForOf"], [1, "p-4", "bg-app-bar", "border-t"], [3, "formGroup", "ngSubmit"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "border", "rounded-full", "text-hint", "overflow-hidden", "bg-card", "ltr:pl-6", "rtl:pr-6"], ["formControlName", "message", "fxFlex", "auto", "placeholder", "Type a message...", "type", "text", 1, "outline-none", "border-0", "h-12", "w-240", "placeholder:text-secondary", "body-1", "bg-card"], ["mat-icon-button", "", "type", "submit", 1, "ltr:mr-4", "rtl:ml-4", "ltr:ml-3", "rtl:mr-3", 3, "disabled"], [3, "icIcon"], ["xPosition", "after", "yPosition", "below"], ["chatMenu", "matMenu"], ["mat-menu-item", ""], ["fxFlex", "none", 1, "avatar", 3, "src"], ["src", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png", 1, "avatar"], [1, "bg-card", "absolute", "-bottom-1", "-right-1", "rounded-full", "text-green", 3, "icon"], [4, "ngIf"], ["fxLayoutAlign", "end center", "fxLayout", "row", 1, "me", "w-full"], [1, "m-1", "mr-0", "py-2", "px-8", "shadow-1", "bg-card", "max-w-3/4", "message-bubble", "me"], ["fxLayoutAlign", "start", "fxLayout", "row", 1, "max-w-3/4", "partner"], [1, "m-1", "mr-0", "py-2", "px-8", "shadow-1", "bg-primary", "text-primary-contrast", "message-bubble", "notme"]], template: function ChatConversationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatConversationComponent_Template_button_click_2_listener() { return ctx.openDrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatConversationComponent_img_5_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChatConversationComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChatConversationComponent_ic_icon_7_Template, 1, 1, "ic-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "vex-scrollbar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ChatConversationComponent_ng_container_16_Template, 3, 2, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChatConversationComponent_Template_form_ngSubmit_18_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-menu", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mute Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Clear Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chat == null ? null : ctx.chat.from == null ? null : ctx.chat.from.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.chat == null ? null : ctx.chat.from == null ? null : ctx.chat.from.avatar));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.chat == null ? null : ctx.chat.from == null ? null : ctx.chat.from.status) === "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getTitle(ctx.chat));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-green", (ctx.chat == null ? null : ctx.chat.status) === "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.chat == null ? null : ctx.chat.status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icMoreVert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@stagger", ctx.messages.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-primary", ctx.form.get("message").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.get("message").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icAccountCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icVolumeMute);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icIcon", ctx.icClearAll);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuTrigger"], _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_13__["ScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuItem"]], styles: [".me[_ngcontent-%COMP%]    + .partner[_ngcontent-%COMP%], .partner[_ngcontent-%COMP%]    + .me[_ngcontent-%COMP%] {\n  margin-top: var(--padding);\n}\n\n.message-bubble[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  color: #303030;\n  position: relative;\n  font-size: 14px;\n}\n\n.message-bubble[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n.message-bubble[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.me.message-bubble[_ngcontent-%COMP%] {\n  background-color: #0199ff;\n  color: white;\n}\n\n.me.message-bubble[_ngcontent-%COMP%]:after {\n  background-color: #0199ff;\n  right: -4px;\n}\n\n.notme.message-bubble[_ngcontent-%COMP%] {\n  background-color: #d8dde1;\n}\n\n.notme.message-bubble[_ngcontent-%COMP%]:after {\n  background-color: #d8dde1;\n  left: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWNvbnZlcnNhdGlvbi9jaGF0LWNvbnZlcnNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC1jb252ZXJzYXRpb24vY2hhdC1jb252ZXJzYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWUgKyAucGFydG5lcixcbi5wYXJ0bmVyICsgLm1lIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5tZXNzYWdlLWJ1YmJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS1idWJibGU6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5tZXNzYWdlLWJ1YmJsZSAqIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWUubWVzc2FnZS1idWJibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE5OWZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZS5tZXNzYWdlLWJ1YmJsZTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTk5ZmY7XG4gIHJpZ2h0OiAtNHB4O1xufVxuXG4ubm90bWUubWVzc2FnZS1idWJibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkZGUxO1xufVxuXG4ubm90bWUubWVzc2FnZS1idWJibGU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkZGUxO1xuICBsZWZ0OiAtNHB4O1xufSJdfQ== */"], data: { animation: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"],
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__["stagger20ms"]
        ] }, changeDetection: 0 });
ChatConversationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], ChatConversationComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatConversationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'vex-chat-conversation',
                templateUrl: './chat-conversation.component.html',
                styleUrls: ['./chat-conversation.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_10__["fadeInUp400ms"],
                    _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_12__["stagger20ms"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"] }, { type: _vex_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { scrollbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_13__["ScrollbarComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/chat/chat-empty/chat-empty.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/chat/chat-empty/chat-empty.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatEmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEmptyComponent", function() { return ChatEmptyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@vex/animations/scale-fade-in.animation */ "./src/@vex/animations/scale-fade-in.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-menu */ "./node_modules/@iconify/icons-ic/twotone-menu.js");
/* harmony import */ var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");









class ChatEmptyComponent {
    constructor(chatService, cd) {
        this.chatService = chatService;
        this.cd = cd;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    ngOnInit() {
    }
    openDrawer() {
        this.chatService.drawerOpen.next(true);
        this.cd.markForCheck();
    }
    closeDrawer() {
        this.chatService.drawerOpen.next(false);
        this.cd.markForCheck();
    }
}
ChatEmptyComponent.ɵfac = function ChatEmptyComponent_Factory(t) { return new (t || ChatEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ChatEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatEmptyComponent, selectors: [["vex-chat-empty"]], decls: 121, vars: 2, consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "absolute", "top-0", "ltr:left-0", "ltr:ml-4", "rtl:right-0", "rtl:mr-4", "mt-4", "shadow", "block", "md:hidden", 3, "click"], ["size", "24px", 3, "icIcon"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-full", "h-full", "p-12"], ["viewBox", "0 0 432.68 384.05", "width", "100%", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["gradientUnits", "userSpaceOnUse", "id", "linear-gradient", "x1", "355.23", "x2", "378.79", "y1", "172.71", "y2", "172.71"], ["offset", "0", "stop-color", "#e5c5d5"], ["offset", "0.42", "stop-color", "#ead4d1"], ["offset", "1", "stop-color", "#f0e9cb"], ["gradientUnits", "userSpaceOnUse", "id", "linear-gradient-2", "x1", "374", "x2", "359.59", "y1", "164.44", "y2", "160.85"], ["offset", "0", "stop-opacity", "0"], ["offset", "0.99"], ["id", "linear-gradient-3", "x1", "311.63", "x2", "377.86", 0, "xlink", "href", "#linear-gradient-2", "y1", "217.67", "y2", "290.28"], ["id", "linear-gradient-4", "x1", "359.06", "x2", "281.46", 0, "xlink", "href", "#linear-gradient-2", "y1", "183.34", "y2", "220.85"], ["id", "linear-gradient-5", "x1", "329.39", "x2", "340.12", 0, "xlink", "href", "#linear-gradient", "y1", "134.53", "y2", "134.53"], ["id", "linear-gradient-6", "x1", "338.66", "x2", "297.66", 0, "xlink", "href", "#linear-gradient", "y1", "134.69", "y2", "129.1"], ["id", "linear-gradient-7", "x1", "159.94", "x2", "169.82", 0, "xlink", "href", "#linear-gradient-2", "y1", "257.05", "y2", "-24.82"], ["gradientUnits", "userSpaceOnUse", "id", "linear-gradient-8", "x1", "206.01", "x2", "202.42", "y1", "179.18", "y2", "74.65"], ["offset", "0.02", "stop-color", "#fff", "stop-opacity", "0"], ["offset", "0.58", "stop-color", "#fff", "stop-opacity", "0.39"], ["offset", "0.68", "stop-color", "#fff", "stop-opacity", "0.68"], ["offset", "1", "stop-color", "#fff"], ["id", "linear-gradient-9", "x1", "212.98", "x2", "168.69", 0, "xlink", "href", "#linear-gradient-2", "y1", "159.3", "y2", "346.02"], ["id", "linear-gradient-10", "x1", "193.71", "x2", "212.46", 0, "xlink", "href", "#linear-gradient-2", "y1", "259.62", "y2", "163.87"], ["id", "linear-gradient-11", "x1", "205.4", "x2", "210.48", 0, "xlink", "href", "#linear-gradient-2", "y1", "212.6", "y2", "314.94"], ["id", "linear-gradient-12", "x1", "195.06", "x2", "207.16", 0, "xlink", "href", "#linear-gradient", "y1", "266.51", "y2", "266.51"], ["id", "linear-gradient-13", "x1", "203.64", "x2", "215.42", 0, "xlink", "href", "#linear-gradient", "y1", "266.34", "y2", "266.34"], ["id", "linear-gradient-14", "x1", "207.62", "x2", "207.22", 0, "xlink", "href", "#linear-gradient-2", "y1", "170.06", "y2", "140.53"], ["id", "linear-gradient-15", "x1", "342.49", "x2", "340", 0, "xlink", "href", "#linear-gradient", "y1", "108.25", "y2", "131.59"], ["id", "linear-gradient-16", "x1", "340.04", "x2", "346.18", 0, "xlink", "href", "#linear-gradient-2", "y1", "102.97", "y2", "117.48"], ["id", "linear-gradient-17", "x1", "323.17", "x2", "371.17", 0, "xlink", "href", "#linear-gradient", "y1", "181.01", "y2", "181.01"], ["id", "linear-gradient-18", "x1", "201.47", "x2", "206.86", 0, "xlink", "href", "#linear-gradient-2", "y1", "263.23", "y2", "218.94"], ["id", "linear-gradient-19", "x1", "200.14", "x2", "208.3", 0, "xlink", "href", "#linear-gradient", "y1", "165.2", "y2", "165.2"], ["id", "linear-gradient-20", "x1", "198.55", "x2", "208.23", 0, "xlink", "href", "#linear-gradient-2", "y1", "160.2", "y2", "179.35"], ["id", "linear-gradient-21", "x1", "192.02", "x2", "216.6", 0, "xlink", "href", "#linear-gradient", "y1", "147.57", "y2", "147.57"], ["id", "linear-gradient-22", "x1", "203.73", "x2", "204.02", 0, "xlink", "href", "#linear-gradient-2", "y1", "131.16", "y2", "144.47"], ["id", "linear-gradient-23", "x1", "216.19", "x2", "220.16", 0, "xlink", "href", "#linear-gradient", "y1", "148.53", "y2", "148.53"], ["id", "linear-gradient-24", "x1", "188.68", "x2", "193.09", 0, "xlink", "href", "#linear-gradient", "y1", "147.92", "y2", "147.92"], ["id", "linear-gradient-25", "x1", "203.28", "x2", "229.27", 0, "xlink", "href", "#linear-gradient", "y1", "185.86", "y2", "185.86"], ["id", "linear-gradient-26", "x1", "183.58", "x2", "214.3", 0, "xlink", "href", "#linear-gradient-2", "y1", "207.1", "y2", "246.59"], ["id", "linear-gradient-27", "x1", "251.01", "x2", "457.48", 0, "xlink", "href", "#linear-gradient-2", "y1", "191.29", "y2", "184.11"], ["id", "linear-gradient-28", "x1", "242.87", "x2", "254.63", 0, "xlink", "href", "#linear-gradient-2", "y1", "341.17", "y2", "281.84"], ["id", "linear-gradient-29", "x1", "181.22", "x2", "205.05", 0, "xlink", "href", "#linear-gradient", "y1", "186.28", "y2", "186.28"], ["id", "linear-gradient-30", "x1", "333.43", "x2", "322.51", 0, "xlink", "href", "#linear-gradient", "y1", "122.82", "y2", "135.59"], ["id", "linear-gradient-31", "x1", "361.88", "x2", "342.16", 0, "xlink", "href", "#linear-gradient-2", "y1", "154.07", "y2", "160.5"], ["id", "linear-gradient-32", "x1", "330.75", "x2", "299.23", 0, "xlink", "href", "#linear-gradient-8", "y1", "163.51", "y2", "153.73"], ["id", "linear-gradient-33", "x1", "344.9", "x2", "300.42", 0, "xlink", "href", "#linear-gradient-2", "y1", "160.92", "y2", "182.86"], ["d", "M159.13,28c-11.33,13.37-18,30.64-31.27,42.05C115.8,80.37,99.77,84.6,85.9,92.37a91,91,0,0,0-28,134.39c5.59,7.37,12.46,14.15,15.29,23,5.38,16.71-5.38,35.19-1,52.18,2.42,9.34,9.09,16.9,15.56,24.06,13.51,15,28.14,30.69,47.62,36,24.17,6.59,50.45-4.37,74.74,1.8,11.5,2.92,21.69,9.49,32.6,14.15,39.71,17,89.74,5.58,118.19-26.92,5.92-6.75,11.07-14.39,18.47-19.48,17.85-12.29,42.67-6.18,62.87-14.05,23.34-9.1,36.16-38.81,26.75-62-5.71-14.09-17.86-24.77-23.85-38.74-17.29-40.3,22.16-88.77,4.49-128.91-13.11-29.78-51.05-39-83.58-38.17-18.33.46-37.21,2.8-54.6-3C259.94,29.28,211-33.25,159.13,28Z", "fill", "#5c77ff", "opacity", "0.18", "transform", "translate(-39.46 -1.67)", 2, "isolation", "isolate"], ["d", "M147.06,312c-7.48,0-16.09.54-20.58,6.52l29.24,6.94c1.76.41,3.68.93,4.74,2.4,1.79,2.49.11,6,.83,9,1.24,5.14,8.17,5.84,13.44,5.43l46.71-3.68c11.66-.92,24.18-1.64,34.21,4.36,4.71,2.82,8.54,7,13.37,9.58,10.36,5.58,23.26,3,34.06-1.65s20.83-11.4,32.26-14.2c9.46-2.32,19.41-1.85,28.93-3.9a55.85,55.85,0,0,0,26-13.51c-.58.54-25.67-5.42-28.76-5.54-7.23-.28-14.47.41-21.71.39-21.07-.06-42.16-.85-63.22-1.16Q211.85,312,147.06,312Z", "fill", "#5c77ff", "opacity", "0.18", "transform", "translate(-39.46 -1.67)", 2, "isolation", "isolate"], ["d", "M358.48,159.7a64.91,64.91,0,0,0,6.54,6.93.5.5,0,0,0,.26.15.45.45,0,0,0,.31-.09l.84-.45a29,29,0,0,0,9.72-1.41,2.29,2.29,0,0,1,1.83,0,1.59,1.59,0,0,1,.6.75,3.06,3.06,0,0,1-2.06,4,4,4,0,0,1-.75,4.43c-.87.85-2.09,1.26-3,2-2.25,1.88-2.27,5.26-3.47,7.94a3.16,3.16,0,0,1-1.09,1.43c-1.2.77-2.78,0-4-.82a45.18,45.18,0,0,1-5.13-4.15,7.48,7.48,0,0,1-1.89-2.37,8.36,8.36,0,0,1-.52-2.45l-1.44-13.19a1.47,1.47,0,0,1,.06-.78,1.32,1.32,0,0,1,.72-.54C357.05,160.69,357.37,159.61,358.48,159.7Z", "fill", "url(#linear-gradient)", "transform", "translate(-39.46 -1.67)"], ["d", "M365.79,164.49a20.33,20.33,0,0,1-1.3,2.14,9.45,9.45,0,0,0-1.09,1.58A6.39,6.39,0,0,0,363,171a2.72,2.72,0,0,0,.71,2.18,2.41,2.41,0,0,0,1.17.4,17.1,17.1,0,0,0,5.15,0,5.19,5.19,0,0,0,2.1-.71,5.67,5.67,0,0,0,1.57-1.83,118.67,118.67,0,0,0,8-14.7,1.26,1.26,0,0,0,.13-.43,1.1,1.1,0,0,0-.59-.92,5.62,5.62,0,0,0-2.55-.76,32.4,32.4,0,0,0-5-.22,4.42,4.42,0,0,0-1.62.28C371.22,154.67,366.9,162.49,365.79,164.49Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M365.79,164.49a20.33,20.33,0,0,1-1.3,2.14,9.45,9.45,0,0,0-1.09,1.58A6.39,6.39,0,0,0,363,171a2.72,2.72,0,0,0,.71,2.18,2.41,2.41,0,0,0,1.17.4,17.1,17.1,0,0,0,5.15,0,5.19,5.19,0,0,0,2.1-.71,5.67,5.67,0,0,0,1.57-1.83,118.67,118.67,0,0,0,8-14.7,1.26,1.26,0,0,0,.13-.43,1.1,1.1,0,0,0-.59-.92,5.62,5.62,0,0,0-2.55-.76,32.4,32.4,0,0,0-5-.22,4.42,4.42,0,0,0-1.62.28C371.22,154.67,366.9,162.49,365.79,164.49Z", "fill", "url(#linear-gradient-2)", "transform", "translate(-39.46 -1.67)"], ["d", "M367.08,165.43a17.87,17.87,0,0,1-1.29,2.14,9.53,9.53,0,0,0-1.09,1.59,6.37,6.37,0,0,0-.39,2.82,2.69,2.69,0,0,0,.71,2.18,2.48,2.48,0,0,0,1.17.4,17.36,17.36,0,0,0,5.14,0,5.18,5.18,0,0,0,2.11-.71A6,6,0,0,0,375,172a118.61,118.61,0,0,0,8-14.7,1.36,1.36,0,0,0,.14-.43,1.1,1.1,0,0,0-.59-.92,5.79,5.79,0,0,0-2.55-.77,32.52,32.52,0,0,0-5-.21,4.26,4.26,0,0,0-1.62.28C372.52,155.62,368.19,163.43,367.08,165.43Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M380.66,254.64a606.84,606.84,0,0,1-45.27,48.1,3,3,0,0,1-2.26,1.12,2.81,2.81,0,0,1-1.32-.74,35.61,35.61,0,0,1-8.48-10.54,1.22,1.22,0,0,1,.31-1.77Q341.51,272,358.73,252.5a3.27,3.27,0,0,0,.89-1.46,3.36,3.36,0,0,0-.8-2.36,155.83,155.83,0,0,1-15.08-29.2,3.12,3.12,0,0,1-.3-1.86,3,3,0,0,1,.9-1.32c3.64-3.59,14.8-11.88,19-5.63,2.59,3.87,4.1,9,5.88,13.28q2.94,7,5.62,14.18Q377.92,246.32,380.66,254.64Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M380.66,254.64a606.84,606.84,0,0,1-45.27,48.1,3,3,0,0,1-2.26,1.12,2.81,2.81,0,0,1-1.32-.74,35.61,35.61,0,0,1-8.48-10.54,1.22,1.22,0,0,1,.31-1.77Q341.51,272,358.73,252.5a3.27,3.27,0,0,0,.89-1.46,3.36,3.36,0,0,0-.8-2.36,155.83,155.83,0,0,1-15.08-29.2,3.12,3.12,0,0,1-.3-1.86,3,3,0,0,1,.9-1.32c3.64-3.59,14.8-11.88,19-5.63,2.59,3.87,4.1,9,5.88,13.28q2.94,7,5.62,14.18Q377.92,246.32,380.66,254.64Z", "fill", "url(#linear-gradient-3)", "transform", "translate(-39.46 -1.67)"], ["d", "M328.61,231.43c1.45,10.89,6.6,21,8.06,31.9.49,3.6.56,7.25,1.16,10.83.82,5,2.63,9.71,3.55,14.65,1.43,7.63.74,15.58,2.67,23.1a3.5,3.5,0,0,0,1,2,3.74,3.74,0,0,0,2.43.57l8.58.05a297.28,297.28,0,0,0-1.94-50.7c-.42-3.39-.9-6.79-1.12-10.2-.83-13,2.2-26.21.15-39.11a174,174,0,0,1-23.06.52c-1.71-.08-3.13-.69-3.56.89-.29,1,.9,4,1.06,5.17C328.07,224.51,328.15,228,328.61,231.43Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M364.16,211.33a4.55,4.55,0,0,1-1.62,1.49c-3.46,2.22-7,4.49-11.09,5.11-1.8.27-3.65.21-5.45.51-2.13.36-4.14,1.24-6.25,1.75a18.81,18.81,0,0,1-9.71-.26,17.29,17.29,0,0,1-3.52-1.42,11.18,11.18,0,0,1-1.66-1.07,5.55,5.55,0,0,1-1.8-2.3,8.14,8.14,0,0,1-.29-3.58v0c.72-10.23,2.21-21-2-30.34l-1.54.25a1.7,1.7,0,0,1-.22,0h0l-.16,0-.71.11A92.76,92.76,0,0,1,314.37,161c-.27-4.16-.22-8.56,1.85-12.18a16.62,16.62,0,0,1,7.52-6.4,18.88,18.88,0,0,1,5.32-1.5,56.13,56.13,0,0,1,10.61,0l7.09.45a6.71,6.71,0,0,1,2.39.45,5.33,5.33,0,0,1,1.66,1.33c3.68,4.06,4.77,10,8.28,14.12,0,0,0,0,0,0,.23.28.47.55.73.81.06.06.13.12.18.18l0,0a1,1,0,0,1,.37.86.19.19,0,0,1,0,.09v0a1.5,1.5,0,0,1-.42.59c-1.14,1.12-2.28,2.23-3.4,3.35.07.82.1,1.67.12,2.54.1,3.26,0,6.78.61,9.81q3.46,16.35,6.92,32.72A4.46,4.46,0,0,1,364.16,211.33Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M356.44,186.91a19.28,19.28,0,0,1-7,6c-3.22,1.59-6.8,2.24-10.29,3.08-2.12.51-4.42,1.23-5.63,3.06a9.26,9.26,0,0,0-1,4.95c-.07,4-.16,8-.23,12.06,0,1.23-.12,2.63-1.08,3.42a2.46,2.46,0,0,1-1.1.5,4.17,4.17,0,0,1-1.89-.14,6.79,6.79,0,0,1-3.29-2.35,9.92,9.92,0,0,1-1.82-4,12.71,12.71,0,0,1-.27-1.95c.72-10.23,2.21-21-2-30.34,5.27-7.66,7.7-3.33,13.61.53a22.83,22.83,0,0,0,4.14,2.06,18.2,18.2,0,0,0,8.06,1.61c3.16-.26,6-1.85,8.91-3.16C359.89,180.24,357.73,185.13,356.44,186.91Z", "fill", "url(#linear-gradient-4)", "transform", "translate(-39.46 -1.67)"], ["d", "M330.4,136c-.3,1.49-1,4.9-1,4.9a5.37,5.37,0,0,0,1.81,2,9.9,9.9,0,0,0,4.42,1.75c1.24.17,2.72,0,3.35-1.1a3.89,3.89,0,0,0,.4-1.52l.68-5.89a6.11,6.11,0,0,0,0-1.54,4.44,4.44,0,0,0-.6-1.48c-1.21-2-6.2-10.79-7.28-8.4S330.81,134,330.4,136Z", "fill", "url(#linear-gradient-5)", "transform", "translate(-39.46 -1.67)"], ["d", "M334.33,135.3a14.85,14.85,0,0,0,5.22,5.81,17.87,17.87,0,0,1,.59-4.77c.35-1.31.85-2.73.32-4a4.45,4.45,0,0,0-1-1.43c-1.44-1.44-4.57-3.77-6.81-3.08-.82.25-.63.38-.43,1.26.15.69.32,1.38.52,2.06A22.73,22.73,0,0,0,334.33,135.3Z", "fill", "url(#linear-gradient-6)", "transform", "translate(-39.46 -1.67)"], ["d", "M213.25,104.58a3.75,3.75,0,0,1-3.75-3.74V72.71a3.75,3.75,0,1,1,7.49,0v28.13A3.75,3.75,0,0,1,213.25,104.58Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["cx", "167.16", "cy", "195.4", "fill", "#5c77ff", "rx", "79.51", "ry", "95.74"], ["cx", "162.27", "cy", "190.69", "fill", "url(#linear-gradient-7)", "rx", "72.12", "ry", "80.79"], ["d", "M206.62,101.33c-43.91,0-79.5,42.87-79.5,95.75s35.59,95.74,79.5,95.74,79.51-42.87,79.51-95.74S250.54,101.33,206.62,101.33Zm-2.5,176.51c-41.14,0-74.5-37.47-74.5-83.67S163,110.5,204.12,110.5s74.51,37.46,74.51,83.67S245.27,277.84,204.12,277.84Z", "fill", "url(#linear-gradient-8)", "transform", "translate(-39.46 -1.67)"], ["d", "M172,205.71c1.82.1,1.42-3.36,1.58-5.18.52-5.92-.15-11.91.44-17.82s2.74-12.08,7.55-15.58c1.45-1,3.14-1.87,4.21-3.3,1.26-1.67,1.47-3.89,2.2-5.85,2-5.47,8.37-8.59,14.18-8s10.95,4.32,14.46,9c2,2.62,3.59,5.63,6.24,7.56,1.38,1,3,1.67,4.29,2.76a12.69,12.69,0,0,1,3.75,7c1.2,5.2.79,10.62,1.07,16s1.39,10.93,5,14.86c1.9,2.06,4.37,3.53,6.28,5.58s3.23,5.08,2.11,7.65-3.83,3.54-6.25,4.63c-9.71,4.34-17.93,12.09-28.28,14.5-9.28,2.16-19.13-.34-27.58-4.74S167.62,224,160,218.28C145.47,207.54,160,205,172,205.71Z", "fill", "url(#linear-gradient-9)", "transform", "translate(-39.46 -1.67)"], ["d", "M176.77,224.52c-3.4-6.55-9.06-13.48-16.42-12.82-1.86.17-3.67.85-5.54,1-3.74.23-7.22-1.75-10.84-2.73s-8.36-.42-9.86,3c-.93,2.14-.24,4.61.53,6.81,6,17,16.65,32.53,31.44,42.76s33.78,14.78,51.29,10.67c7.55-1.78,14.67-5.07,21.51-8.73,5.76-3.08,11.45-6.5,16-11.21,8.12-8.47,11.69-20.2,15-31.46,1-3.51,1.85-7.87-.83-10.36a7.34,7.34,0,0,0-4.82-1.66,14,14,0,0,0-10.2,4c-1.1,1.1-2.08,2.42-3.54,2.95-1.91.7-4-.18-6-.44-9.85-1.27-15.5,11.43-24.75,15.07-4.68,1.84-9.82,1.07-14.59,2.44-4.39,1.26-8.16,5.18-12.65,5.9C183.68,241.1,180.13,231,176.77,224.52Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M176.77,224.52c-3.4-6.55-9.06-13.48-16.42-12.82-1.86.17-3.67.85-5.54,1-3.74.23-7.22-1.75-10.84-2.73s-8.36-.42-9.86,3c-.93,2.14-.24,4.61.53,6.81,6,17,16.65,32.53,31.44,42.76s33.78,14.78,51.29,10.67c7.55-1.78,14.67-5.07,21.51-8.73,5.76-3.08,11.45-6.5,16-11.21,8.12-8.47,11.69-20.2,15-31.46,1-3.51,1.85-7.87-.83-10.36a7.34,7.34,0,0,0-4.82-1.66,14,14,0,0,0-10.2,4c-1.1,1.1-2.08,2.42-3.54,2.95-1.91.7-4-.18-6-.44-9.85-1.27-15.5,11.43-24.75,15.07-4.68,1.84-9.82,1.07-14.59,2.44-4.39,1.26-8.16,5.18-12.65,5.9C183.68,241.1,180.13,231,176.77,224.52Z", "fill", "url(#linear-gradient-10)", "transform", "translate(-39.46 -1.67)"], ["d", "M175.34,224.93c-1.44-.22-2.68,1.29-2.73,2.75a7.86,7.86,0,0,0,1.43,4.08l5.7,9.88c-6.36,1-11.93-3.8-17.31-7.33-1.86-1.21-4.7-2.16-6-.36-.92,1.27-.28,3.15.89,4.18a14.56,14.56,0,0,0,4.19,2.09c5.06,2.11,9,6.36,13.93,8.7,3.24,1.52,6.8,2.18,10.19,3.33,3.22,1.09,6.63,3,7.43,6.34.59,2.47-.45,5-.44,7.56s2.06,5.53,4.47,4.74c1.54-.51,2.23-2.25,2.73-3.79l3.66-11.3c4,2.65,3.61,9.49,7.91,11.55l1.05-7.21a5.3,5.3,0,0,1,.54-2,4.54,4.54,0,0,1,3.15-1.84c2.47-.5,5.07-.3,7.46-1.09,3.45-1.15,5.88-4.16,8.57-6.61,3.12-2.85,6.76-5.06,10.06-7.71a48,48,0,0,0,14.18-19c-2.33-.78-4.84.86-6.24,2.88s-2.12,4.46-3.53,6.49a11.62,11.62,0,0,1-10.64,4.8,6.32,6.32,0,0,1,1.85-6.9,8.8,8.8,0,0,0,1.44-1.21c1.71-2.06-.64-5.4-3.31-5.64s-5.1,1.36-7.37,2.8a81.28,81.28,0,0,1-14.37,7.24c-3.54,1.37-7.29,2.51-11.08,2.21-5.8-.45-10.74-4-16.43-4.91-2.2-.34-5.25.84-7.12-.1S177.74,225.29,175.34,224.93Z", "fill", "url(#linear-gradient-11)", "transform", "translate(-39.46 -1.67)"], ["d", "M196.66,268a10,10,0,0,0-1.58,3.74,7.49,7.49,0,0,0,1.1,4.14c.58,1.1,1.48,2.3,2.71,2.22a3.16,3.16,0,0,0,1.29-.48,7.91,7.91,0,0,0,2.06-1.55c1.4-1.58,1.64-3.86,1.58-6s-.35-4.27.23-6.29c.73-2.55,2.79-4.65,3.11-7.28-1.41-.39-4.17-1.79-5.59-1.54s-1.17,2.12-1.37,3.23A28.74,28.74,0,0,1,196.66,268Z", "fill", "url(#linear-gradient-12)", "transform", "translate(-39.46 -1.67)"], ["d", "M205.69,260.1a14.24,14.24,0,0,1,.82,2.38,14,14,0,0,1,.24,2.42l.49,10.47a6.07,6.07,0,0,0,.7,3.1c.91,1.4,2.8,1.81,4.45,1.61a2.71,2.71,0,0,0,1.47-.54,2.78,2.78,0,0,0,.68-1,8.7,8.7,0,0,0,.81-2.53c.33-2.31-.6-4.61-1.64-6.7s-2.22-4.19-2.45-6.52c-.19-1.84.25-3.71.06-5.55-.16-1.57-.78-3.11-.66-4.68a30.65,30.65,0,0,0-3.42.62c-.9.22-2.68.43-3.4,1C203,255,205.24,259,205.69,260.1Z", "fill", "url(#linear-gradient-13)", "transform", "translate(-39.46 -1.67)"], ["d", "M189.17,150.1a15.25,15.25,0,0,1-3.38-10.53,16.22,16.22,0,0,1,4.49-10.15c2-2.06,4.69-3.65,7.51-3.37,1.06-1.46,3.17-1.88,4.93-2.27a17.55,17.55,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.54,19.54,0,0,1,2.19,8.59,46,46,0,0,0,1,8.87c.79,2.88,2.48,5.67,5.16,7a2.57,2.57,0,0,1,1.11.76c.52.76,0,1.8-.72,2.42a6.56,6.56,0,0,1-5.5,1.54l.86,1.89a.45.45,0,0,1-.19.72,5.15,5.15,0,0,1-5.19.11,8,8,0,0,1-.11,2.24,13.45,13.45,0,0,1-5.77-2.06c0,1.21-1.32,2.07-2.52,2a8.44,8.44,0,0,1-3.35-1.31,2,2,0,0,0-1-.33c-.73,0-1.22.7-1.78,1.16a4.38,4.38,0,0,1-3.76.66,11.54,11.54,0,0,1-3.54-1.73c.18.72-.58,1.41-1.32,1.41a3.09,3.09,0,0,1-1.95-.95,7.76,7.76,0,0,1-2.59-4.28,4.81,4.81,0,0,1-1.6,1.38,1.64,1.64,0,0,1-1.94-.34c-.55-.71-.17-1.72.23-2.52l1.39-2.81C189,152.67,190.2,151.36,189.17,150.1Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M228,157.33a6.52,6.52,0,0,1-5.49,1.54l.87,1.89a.57.57,0,0,1,.07.44.63.63,0,0,1-.27.29,5.2,5.2,0,0,1-5.19.1,8.39,8.39,0,0,1-.11,2.24,13.45,13.45,0,0,1-5.77-2.06c.05,1.21-1.31,2.06-2.53,2a8,8,0,0,1-3.34-1.31,2.12,2.12,0,0,0-1-.33c-.73,0-1.22.71-1.78,1.17a4.38,4.38,0,0,1-3.76.66,11.65,11.65,0,0,1-3.54-1.73c.18.72-.57,1.4-1.32,1.41a3.09,3.09,0,0,1-1.95-.95,7.7,7.7,0,0,1-2.59-4.29,4.73,4.73,0,0,1-1.6,1.39,1.67,1.67,0,0,1-2-.34c-.54-.71-.15-1.73.24-2.52.47-.94.92-1.87,1.39-2.81.72-1.45,1.9-2.76.87-4a14.83,14.83,0,0,1-2.85-5.5,15.89,15.89,0,0,1-.53-5,16.27,16.27,0,0,1,4.49-10.15c2-2,4.68-3.64,7.51-3.36,1.05-1.46,3.17-1.88,4.93-2.27a17.56,17.56,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.53,19.53,0,0,1,2.18,8.59,52.45,52.45,0,0,0,.88,8.22c0,.23.1.44.16.65.8,2.88,2.49,5.68,5.17,7a2.93,2.93,0,0,1,1.12.76C229.21,155.67,228.64,156.71,228,157.33Z", "fill", "url(#linear-gradient-14)", "transform", "translate(-39.46 -1.67)"], ["d", "M352,128.59a14.52,14.52,0,0,1-3.65,7.2c-2,1.9-5,2.9-7.51,1.91a11,11,0,0,1-4.3-3.7,21.37,21.37,0,0,1-2.89-4.35,13.85,13.85,0,0,1-2.92-2.37,5.3,5.3,0,0,1-1.76-3.87c.12-1.45,1.66-2.8,3-2.24,1.32-1.89,1.55-4.34,2.6-6.4a9.8,9.8,0,0,1,7.68-5.1,12,12,0,0,1,8.87,3A5.46,5.46,0,0,1,353,115.2c.51,1.81.2,4.27,0,6.13A49.34,49.34,0,0,1,352,128.59Z", "fill", "url(#linear-gradient-15)", "transform", "translate(-39.46 -1.67)"], ["d", "M355.16,107.8c-3.29.34-6.26-1.81-9-3.71s-6.05-3.73-9.19-2.67a5.92,5.92,0,0,0-2.28,1.43,5.89,5.89,0,0,1-1.48,1.3,7.81,7.81,0,0,1-1.3.38c-2.61.78-3.59,4-3.81,6.68a33.31,33.31,0,0,0,0,5.19c.15,1.88.62,4,2.25,4.95.89.51,2.09.64,2.64,1.51.23.36.41.89.84.91a.78.78,0,0,0,.56-.25c1.68-1.47.83-4.2,1.24-6.4a1.76,1.76,0,0,1,.27-.7,2.5,2.5,0,0,1,1-.66,5.92,5.92,0,0,0,2.79-3.18,14.79,14.79,0,0,0,6.45,4.16,7.74,7.74,0,0,1,2.33,1,14.23,14.23,0,0,1,1.58,1.71c2.18,2.24,6.19,1.92,8.45-.24a9.18,9.18,0,0,0,2.12-8.7,2.89,2.89,0,0,1-2.82,0c.26.15,2.55-3.4,2-4S356,107.71,355.16,107.8Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M355.16,107.8c-3.29.34-6.26-1.81-9-3.71s-6.05-3.73-9.19-2.67a5.92,5.92,0,0,0-2.28,1.43,5.89,5.89,0,0,1-1.48,1.3,7.81,7.81,0,0,1-1.3.38c-2.61.78-3.59,4-3.81,6.68a33.31,33.31,0,0,0,0,5.19c.15,1.88.62,4,2.25,4.95.89.51,2.09.64,2.64,1.51.23.36.41.89.84.91a.78.78,0,0,0,.56-.25c1.68-1.47.83-4.2,1.24-6.4a1.76,1.76,0,0,1,.27-.7,2.5,2.5,0,0,1,1-.66,5.92,5.92,0,0,0,2.79-3.18,14.79,14.79,0,0,0,6.45,4.16,7.74,7.74,0,0,1,2.33,1,14.23,14.23,0,0,1,1.58,1.71c2.18,2.24,6.19,1.92,8.45-.24a9.18,9.18,0,0,0,2.12-8.7,2.89,2.89,0,0,1-2.82,0c.26.15,2.55-3.4,2-4S356,107.71,355.16,107.8Z", "fill", "url(#linear-gradient-16)", "transform", "translate(-39.46 -1.67)"], ["d", "M329.88,170.55a113.12,113.12,0,0,0,9.61,8.69,3,3,0,0,0,1.06.62,3,3,0,0,0,1.59-.19c1.15-.37,2.29-.75,3.43-1.14A65.93,65.93,0,0,0,355,174.8c3-1.57,5.51-6.65,8.37-6.59.06.58-.42,1.37-.36,1.95a.84.84,0,0,0,.18.52.77.77,0,0,0,.39.17c2,.41,3.93-.82,5.82-1.62a1.68,1.68,0,0,1,.95-.19c.8.15,1,1.3.58,2a11.18,11.18,0,0,1-1.7,1.74c-1.48,1.6-1.42,4.08-2.45,6a5.8,5.8,0,0,1-4.34,3,13,13,0,0,0-1.54.18,6.82,6.82,0,0,0-2.29,1.31,66.44,66.44,0,0,1-12.3,6.68,25.26,25.26,0,0,1-5.37,2,38.79,38.79,0,0,0-4.3.81c-1.28.42-2.5,1.18-3.85,1.1-1.93-.13-3.27-1.92-4.34-3.54-2-3.08-4.62-6.65-5.27-10.37-.31-1.76,1.32-3,2.4-4.24Z", "fill", "url(#linear-gradient-17)", "transform", "translate(-39.46 -1.67)"], ["d", "M346.08,321.55a2,2,0,0,0,.3,1.13,1.62,1.62,0,0,0,.67.45,9,9,0,0,0,3.06.51q10.25.48,20.5.16a16,16,0,0,0-9.34-5.27c-1.69-.29-3.43-.31-5.1-.73a1,1,0,0,1-.43-.2,1,1,0,0,1-.19-.52l-.42-2.68A.63.63,0,0,0,355,314a.65.65,0,0,0-.47-.13l-4.69-.08c-.92,0-2.22-.24-3,.34s-.72,1.9-.76,2.82Q346,319.27,346.08,321.55Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M317.43,298.65a2.08,2.08,0,0,0-.7,1,2,2,0,0,0,.18,1.14c1.77,4.66,5.27,8.41,8.7,12,2.76,2.92,5.58,5.89,9.11,7.81,1.68-4.94-.09-10.58-3.42-14.6a2.6,2.6,0,0,1-.78-1.55,6.15,6.15,0,0,1,.56-1.55,3.58,3.58,0,0,0-1-3,22.72,22.72,0,0,0-5.82-5.75c-1.64-1-2-.23-3.28,1Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M186.62,169.87a8,8,0,0,0-3.34,2.42,8.38,8.38,0,0,0-1.15,3.61c-1.95,13.2-.91,26.63.13,39.93l1.46,18.6c.27,3.52.6,7.2,2.51,10.17a14.46,14.46,0,0,0,5.42,4.69c7.21,3.84,15.86,3.24,24,2.55a15.78,15.78,0,0,0,5.25-1.05,11.45,11.45,0,0,0,5.36-6c1.94-4.29,2.27-9.12,2.38-13.84.29-12.55-.85-25.13-.07-37.67.44-7,1.29-14.69-2.84-20.34a17.86,17.86,0,0,0-10.57-6.39C206.1,164.52,195,166,186.62,169.87Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M179.81,229.27a32.43,32.43,0,0,0,.77,7.8,21.62,21.62,0,0,0,2.07,5.7A19.93,19.93,0,0,0,192.2,251a38.85,38.85,0,0,0,12.47,2.8,35.79,35.79,0,0,0,13.21-1,17.83,17.83,0,0,0,10.44-7.75c2.59-4.48,2.52-10,2.26-15.13-.29-5.54-.75-11.19-2.9-16.31a4.09,4.09,0,0,0-1-1.56,3,3,0,0,0-3.67.16,9,9,0,0,0-2.31,3.2L214,228.55a6.24,6.24,0,0,1-1.45,2.08c-1.36,1.12-3.4.88-5,.22a18.15,18.15,0,0,1-7.17-5.82c-1.93-2.44-3.52-5.13-5.37-7.63a11.84,11.84,0,0,0-2.5-2.64,11.16,11.16,0,0,0-6.05-1.65c-2.19-.09-2.7.24-3.55,2.3A39.18,39.18,0,0,0,179.81,229.27Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M179.81,229.27a32.43,32.43,0,0,0,.77,7.8,21.62,21.62,0,0,0,2.07,5.7A19.93,19.93,0,0,0,192.2,251a38.85,38.85,0,0,0,12.47,2.8,35.79,35.79,0,0,0,13.21-1,17.83,17.83,0,0,0,10.44-7.75c2.59-4.48,2.52-10,2.26-15.13-.29-5.54-.75-11.19-2.9-16.31a4.09,4.09,0,0,0-1-1.56,3,3,0,0,0-3.67.16,9,9,0,0,0-2.31,3.2L214,228.55a6.24,6.24,0,0,1-1.45,2.08c-1.36,1.12-3.4.88-5,.22a18.15,18.15,0,0,1-7.17-5.82c-1.93-2.44-3.52-5.13-5.37-7.63a11.84,11.84,0,0,0-2.5-2.64,11.16,11.16,0,0,0-6.05-1.65c-2.19-.09-2.7.24-3.55,2.3A39.18,39.18,0,0,0,179.81,229.27Z", "fill", "url(#linear-gradient-18)", "transform", "translate(-39.46 -1.67)"], ["d", "M183.75,171.82c-1.64.74-2.65,2.4-3.46,4a45.17,45.17,0,0,0-4.75,19.72c0,1.54.12,3.25,1.22,4.33,1.47,1.45,3.87,1.1,5.85.54,2.81-.79,5.92-2.21,6.65-5,.87-3.35-2.27-7.89-3.21-11.08C185.69,183.13,182.71,172.29,183.75,171.82Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M200.41,167.69a6.2,6.2,0,0,0,.55,2.14,4.21,4.21,0,0,0,2.51,1.95,2.29,2.29,0,0,0,.86.11,2.1,2.1,0,0,0,.69-.2,4.71,4.71,0,0,0,1.77-1.42,7.48,7.48,0,0,0,1.24-3.48,36.4,36.4,0,0,0,.24-6.35,1.86,1.86,0,0,0-.55-1.54,1.9,1.9,0,0,0-.78-.22,28.53,28.53,0,0,0-3.06-.17,13.47,13.47,0,0,0-3.11.15c-.48.11-.42.31-.47.79s-.08,1-.11,1.53c-.06,1.06-.07,2.12,0,3.17S200.27,166.52,200.41,167.69Z", "fill", "url(#linear-gradient-19)", "transform", "translate(-39.46 -1.67)"], ["d", "M200.34,167.38a3,3,0,0,1,.47-1.18,1.82,1.82,0,0,1,1.28-.56,27.58,27.58,0,0,1,7.7,0,2.26,2.26,0,0,1,1.74.88,3.94,3.94,0,0,1,.39,2.1,76.85,76.85,0,0,1-.76,11.76c-.29,1.84-.78,3.88-2.09,4.75s-2.58.35-3.85-.08l-3.43-1.19a3.67,3.67,0,0,1-1-.44c-1.55-1.14-1.71-4.49-1.67-6.51A44.91,44.91,0,0,1,200.34,167.38Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M200.34,167.38a3,3,0,0,1,.47-1.18,1.82,1.82,0,0,1,1.28-.56,27.58,27.58,0,0,1,7.7,0,2.26,2.26,0,0,1,1.74.88,3.94,3.94,0,0,1,.39,2.1,76.85,76.85,0,0,1-.76,11.76c-.29,1.84-.78,3.88-2.09,4.75s-2.58.35-3.85-.08l-3.43-1.19a3.67,3.67,0,0,1-1-.44c-1.55-1.14-1.71-4.49-1.67-6.51A44.91,44.91,0,0,1,200.34,167.38Z", "fill", "url(#linear-gradient-20)", "transform", "translate(-39.46 -1.67)"], ["d", "M201.24,168.65a2.87,2.87,0,0,1,.47-1.18,1.85,1.85,0,0,1,1.27-.56,27.66,27.66,0,0,1,7.71,0,2.31,2.31,0,0,1,1.74.88,4,4,0,0,1,.39,2.1,76.85,76.85,0,0,1-.77,11.76c-.28,1.85-.78,3.88-2.09,4.75-1.16.78-2.58.36-3.85-.08l-3.42-1.19a3.53,3.53,0,0,1-1-.44c-1.55-1.14-1.71-4.49-1.67-6.51A44.28,44.28,0,0,1,201.24,168.65Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M193.43,152.55a17.4,17.4,0,0,0,2.78,3.57c1.46,1.56,3,3.16,5.09,3.72a10.32,10.32,0,0,0,5.87-.57,15.06,15.06,0,0,0,2.43-1,15.7,15.7,0,0,0,4.9-4.77,10.47,10.47,0,0,0,1.36-2.24,9.71,9.71,0,0,0,.63-2.94,28.6,28.6,0,0,0,0-4.44,9.07,9.07,0,0,0-1.71-5.31,7.66,7.66,0,0,0-2.61-1.92c-3.95-1.91-8.55-1.77-12.92-1.33-2,.21-4.12.54-5.55,1.94-1.87,1.83-1.85,4.07-1.64,6.43C192.38,146.79,191.89,149.68,193.43,152.55Z", "fill", "url(#linear-gradient-21)", "transform", "translate(-39.46 -1.67)"], ["d", "M222.24,146.51c-1.53,0-3.13-.11-3.34.2a1.78,1.78,0,0,1-2.31.25c0-.78,0-1.56,0-2.35A1.7,1.7,0,0,1,214.4,143a9.46,9.46,0,0,1-5.38.81,20.55,20.55,0,0,1-4.75-.75,13.43,13.43,0,0,1-8.47-9.4c-.11,1.8-1.82,3.37-2.49,5a18.8,18.8,0,0,0-.71,3.2,7.17,7.17,0,0,1-1.2,2.89,4.1,4.1,0,0,1-2.58,1.68,4.34,4.34,0,0,0-2.5-1.83,15.89,15.89,0,0,1-.53-5,16.27,16.27,0,0,1,4.49-10.15c2-2,4.68-3.64,7.51-3.36,1.05-1.46,3.17-1.88,4.93-2.27a17.56,17.56,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.53,19.53,0,0,1,2.18,8.59A52.45,52.45,0,0,0,222.24,146.51Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M222.24,146.51c-1.53,0-3.13-.11-3.34.2a1.78,1.78,0,0,1-2.31.25c0-.78,0-1.56,0-2.35A1.7,1.7,0,0,1,214.4,143a9.46,9.46,0,0,1-5.38.81,20.55,20.55,0,0,1-4.75-.75,13.43,13.43,0,0,1-8.47-9.4c-.11,1.8-1.82,3.37-2.49,5a18.8,18.8,0,0,0-.71,3.2,7.17,7.17,0,0,1-1.2,2.89,4.1,4.1,0,0,1-2.58,1.68,4.34,4.34,0,0,0-2.5-1.83,15.89,15.89,0,0,1-.53-5,16.27,16.27,0,0,1,4.49-10.15c2-2,4.68-3.64,7.51-3.36,1.05-1.46,3.17-1.88,4.93-2.27a17.56,17.56,0,0,1,9.24.3,13,13,0,0,1,7.22,5.62,19.53,19.53,0,0,1,2.18,8.59A52.45,52.45,0,0,0,222.24,146.51Z", "fill", "url(#linear-gradient-22)", "transform", "translate(-39.46 -1.67)"], ["d", "M218.14,151a2.89,2.89,0,0,0,1.61-1.12,3,3,0,0,0,.41-1.67,2.61,2.61,0,0,0-.9-2.12,1.72,1.72,0,0,0-2.67,1,3.8,3.8,0,0,0-.06,1.12,11.92,11.92,0,0,1-.3,2.6c-.11.56,0,.51.57.46A5.62,5.62,0,0,0,218.14,151Z", "fill", "url(#linear-gradient-23)", "transform", "translate(-39.46 -1.67)"], ["d", "M189.8,150.2a4.24,4.24,0,0,1-1.12-2.86,3.23,3.23,0,0,1,.3-1.56,2.44,2.44,0,0,1,.86-1,1.78,1.78,0,0,1,2.3.19,2.12,2.12,0,0,1,.34.69,10.1,10.1,0,0,1,.36,2.32c.06.73.12,1.46.17,2.18.05.57.27,1-.29,1.13C191.59,151.59,190.66,150.63,189.8,150.2Z", "fill", "url(#linear-gradient-24)", "transform", "translate(-39.46 -1.67)"], ["d", "M230.66,193.24a13.27,13.27,0,0,1,3,4,6.51,6.51,0,0,1,.31,4.84,4.35,4.35,0,0,1-3.69,2.91A6.29,6.29,0,0,1,227,204a25.29,25.29,0,0,1-6.6-4.88,1.84,1.84,0,0,1-.59-1,1.91,1.91,0,0,1,.57-1.35c1.47-1.88,3.06-5,5-6.36,1.14-.85,1.11-.64,2.41.33A26.32,26.32,0,0,1,230.66,193.24Z", "fill", "#fff", "transform", "translate(-39.46 -1.67)"], ["d", "M206.81,184.08a6.69,6.69,0,0,1-1.33-1.43c-1.17-1.87-.36-4.45-1.36-6.43-.37-.73-1-1.48-.79-2.27.27-1,1.69-1.19,2.74-1a13.14,13.14,0,0,1,4.75,1.88,5.41,5.41,0,0,0,1.81-2.51c1.25,1.34.63,3.5,1,5.3s2,3.31,3.42,4.59l10.46,9.16a3.15,3.15,0,0,1,.35,5.43c-1.14,1.35-2.38,3.2-4.12,2.37-2-.93-4-3.56-5.65-5Z", "fill", "url(#linear-gradient-25)", "transform", "translate(-39.46 -1.67)"], ["d", "M181.21,214.19l21.25,40.75,8.11-2.57s-10.53-52-16.44-54.88c-1.45-.7-4.87.44-8.6,2.49A10.63,10.63,0,0,0,181.21,214.19Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M181.21,214.19l21.25,40.75,8.11-2.57s-10.53-52-16.44-54.88c-1.45-.7-4.87.44-8.6,2.49A10.63,10.63,0,0,0,181.21,214.19Z", "fill", "url(#linear-gradient-26)", "transform", "translate(-39.46 -1.67)"], ["d", "M219.85,198.19s-5.22.42-6,3.75-14.26,52.58-14.26,52.58l10,2.5s19.15-41.63,20-47.46S219.85,198.19,219.85,198.19Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M191.78,279.55a6.16,6.16,0,0,0,1.61,4.33,5,5,0,0,0,5.43.74,7.56,7.56,0,0,0,3.75-4.27,16.11,16.11,0,0,0,.85-5.73,3.87,3.87,0,0,0-.3-1.79,3.48,3.48,0,0,0-1.42-1.29c-1.87-1.08-5.71-2.46-7.37-.78C192.49,272.62,191.7,277.06,191.78,279.55Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M208.72,282.62a7.55,7.55,0,0,0,6.64,3.88,4.23,4.23,0,0,0,2.73-1.09,5.36,5.36,0,0,0,1.15-4.31,10.62,10.62,0,0,0-.67-3.15,16.51,16.51,0,0,0-3.69-5.09.51.51,0,0,0-.31-.21.59.59,0,0,0-.34.14,16.16,16.16,0,0,1-3.37,2.09c-2.09.82-3.61-.66-3.59,2.18A11.15,11.15,0,0,0,208.72,282.62Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M191.78,279.55a6.16,6.16,0,0,0,1.61,4.33,5,5,0,0,0,5.43.74,7.56,7.56,0,0,0,3.75-4.27,16.11,16.11,0,0,0,.85-5.73,3.87,3.87,0,0,0-.3-1.79,3.48,3.48,0,0,0-1.42-1.29c-1.87-1.08-5.71-2.46-7.37-.78C192.49,272.62,191.7,277.06,191.78,279.55Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M208.72,282.62a7.55,7.55,0,0,0,6.64,3.88,4.23,4.23,0,0,0,2.73-1.09,5.36,5.36,0,0,0,1.15-4.31,10.62,10.62,0,0,0-.67-3.15,16.51,16.51,0,0,0-3.69-5.09.51.51,0,0,0-.31-.21.59.59,0,0,0-.34.14,16.16,16.16,0,0,1-3.37,2.09c-2.09.82-3.61-.66-3.59,2.18A11.15,11.15,0,0,0,208.72,282.62Z", "fill", "#3e3e54", "transform", "translate(-39.46 -1.67)"], ["d", "M302,265.4c-13.78,24.63-33.71,40.35-49.53,51.31a3.73,3.73,0,0,1-2.13.67,3.58,3.58,0,0,1-1.25-.22,3.74,3.74,0,0,1-.88-6.61c15.15-10.49,34.23-25.53,47.25-48.8,14.78-26.42,19.36-59.48,13.61-98.26-5.31-35.84-25.64-61.73-60.43-76.94A155,155,0,0,0,197,74.28a3.75,3.75,0,0,1,.19-7.5,160.31,160.31,0,0,1,54.27,12.8c36.92,16.07,59.41,44.71,65.07,82.81C322.47,202.85,317.59,237.52,302,265.4Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M298.4,266c-13.71,24.5-33.53,40.2-49.32,51.15a3.74,3.74,0,0,1-.88-6.61c15.15-10.49,34.23-25.53,47.25-48.8,14.78-26.42,19.36-59.48,13.61-98.26-5.31-35.84-25.64-61.73-60.43-76.94A155,155,0,0,0,197,74.28a3.75,3.75,0,0,1-2-6.84,161.68,161.68,0,0,1,52.88,12.75c36.92,16,59.42,44.7,65.08,82.81C318.88,203.45,314,238.11,298.4,266Z", "fill", "url(#linear-gradient-27)", "transform", "translate(-39.46 -1.67)"], ["d", "M296.56,351.75l-.05.06a3.74,3.74,0,0,1-2.89,1.36,3.68,3.68,0,0,1-2.39-.86l-41.6-34.39-57.89,22.51a3.74,3.74,0,0,1-2.71-7l62-24.1,45,37.19A3.75,3.75,0,0,1,296.56,351.75Z", "fill", "#5c77ff", "transform", "translate(-39.46 -1.67)"], ["d", "M296.56,351.75l-.05.06a3.74,3.74,0,0,1-2.89,1.36,3.68,3.68,0,0,1-2.39-.86l-41.6-34.39-57.89,22.51a3.72,3.72,0,0,1-4.29-1.17,3.77,3.77,0,0,1,1.58-1.18L251,314l45,37.2A3.29,3.29,0,0,1,296.56,351.75Z", "fill", "url(#linear-gradient-28)", "transform", "translate(-39.46 -1.67)"], ["d", "M201.81,175.78a1.9,1.9,0,0,1-1.76-1.14c-.12-.34-.09-.72-.22-1.07s-.49-.66-.83-.51a.72.72,0,0,0-.31.29c-.76,1.11-.51,2.6-.82,3.92a8.06,8.06,0,0,1-1.33,2.65,37.29,37.29,0,0,1-11.32,10.18,9.63,9.63,0,0,0-3.19,2.55,5.53,5.53,0,0,0-.26,5.31,2.47,2.47,0,0,0,2.65,1.59,12.64,12.64,0,0,0,6.64-2.27,32.93,32.93,0,0,0,9.4-8.78,14.5,14.5,0,0,1,1.68-2.12,12.85,12.85,0,0,0,2.41-2.3,5.58,5.58,0,0,0,.13-4.31,14.1,14.1,0,0,1-.71-3.34c0-.46.14-1-.43-1S202.4,175.81,201.81,175.78Z", "fill", "url(#linear-gradient-29)", "transform", "translate(-39.46 -1.67)"], ["d", "M331.86,123a.78.78,0,0,0-1,0,1.16,1.16,0,0,0-.34,1,2.31,2.31,0,0,0,.41,1c.28.42.91,1.36,1.47,1.42s.78-.28.63-.76-.7-.67-.85-1.14S332.27,123.35,331.86,123Z", "fill", "url(#linear-gradient-30)", "transform", "translate(-39.46 -1.67)"], ["d", "M360.4,159.3v0a1.5,1.5,0,0,1-.42.59c-1.14,1.12-2.28,2.23-3.4,3.35.07.82-3.36-8.38-4-13.67,1,.23,2.4,3.26,3.12,4.11,1.07,1.26,2.24,2.43,3.39,3.61,0,0,0,0,0,0l.39.39a6.05,6.05,0,0,1,.52.6l0,0a1.82,1.82,0,0,1,.33.83S360.4,159.26,360.4,159.3Z", "fill", "url(#linear-gradient-31)", "transform", "translate(-39.46 -1.67)"], ["d", "M319.25,181.43a1.7,1.7,0,0,1-.22,0A.18.18,0,0,1,319.25,181.43Z", "fill", "none", "transform", "translate(-39.46 -1.67)"], ["d", "M329.06,141a2.8,2.8,0,0,1-.9,1.73c-2.3,2.37-5.45,3.09-7.3,6.15a20.61,20.61,0,0,0-2,5.31,56,56,0,0,0-2,9.49,18.44,18.44,0,0,0,1.37,9.5c.92,2,2.31,3.78,2.47,5.92a2.37,2.37,0,0,1-.2,1.27,2.76,2.76,0,0,1-1.18,1l-.45.2-.71.11A92.76,92.76,0,0,1,314.37,161c-.27-4.16-.22-8.56,1.85-12.18a16.62,16.62,0,0,1,7.52-6.4A18.88,18.88,0,0,1,329.06,141Z", "fill", "url(#linear-gradient-32)", "transform", "translate(-39.46 -1.67)"], ["d", "M329.57,157.21l3.82,7.54a22.06,22.06,0,0,1,1.65,3.88c.71,2.53.5,5.28,1.47,7.71-.47-1.17-3.75-2.61-4.69-3.63-2.16-2.34-.2-1.66.12-4.06.19-1.4-1.41-3.73-1.78-5.17A19.78,19.78,0,0,1,329.57,157.21Z", "fill", "url(#linear-gradient-33)", "transform", "translate(-39.46 -1.67)"], ["fill", "#fff", "height", "29.86", "rx", "5.46", "width", "65.33", "x", "305.12", "y", "59.33"], ["fill", "#fff", "points", "305.39 68.9 305.39 100.05 312.81 72.88 305.39 68.9"], ["fill", "#fff", "height", "29.86", "rx", "5.46", "transform", "translate(268.39 198.87) rotate(-180)", "width", "65.33", "x", "121.26", "y", "85.34"], ["fill", "#fff", "points", "146.86 93.24 146.86 124.38 139.44 97.22 146.86 93.24"], ["fill", "#5c77ff", "font-family", "Arial-Black, Arial Black", "font-size", "12.75", "font-weight", "800", "transform", "translate(331.85 76.41)"], ["fill", "#5c77ff", "font-family", "Arial-Black, Arial Black", "font-size", "12.75", "font-weight", "800", "transform", "translate(103.69 99.89)"], [1, "display-1"]], template: function ChatEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatEmptyComponent_Template_button_click_0_listener() { return ctx.openDrawer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "linearGradient", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "stop", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "linearGradient", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "linearGradient", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "linearGradient", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "linearGradient", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "linearGradient", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "linearGradient", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "stop", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "stop", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "stop", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "stop", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "linearGradient", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "linearGradient", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "linearGradient", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "linearGradient", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "linearGradient", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "linearGradient", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "linearGradient", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "linearGradient", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "linearGradient", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "linearGradient", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "linearGradient", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "linearGradient", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "linearGradient", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "linearGradient", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "linearGradient", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "linearGradient", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "linearGradient", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "linearGradient", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "linearGradient", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "linearGradient", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "linearGradient", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "linearGradient", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "linearGradient", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "linearGradient", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "linearGradient", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "ellipse", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "ellipse", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "rect", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "polygon", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "rect", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "polygon", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "text", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ". . . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "text", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, ". . . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Start a conversation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icIcon", ctx.icMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleFadeIn", undefined);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"]], encapsulation: 2, data: { animation: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["scaleFadeIn400ms"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatEmptyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vex-chat-empty',
                templateUrl: './chat-empty.component.html',
                animations: [_vex_animations_scale_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["scaleFadeIn400ms"]]
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-conversation/chat-conversation.component */ "./src/app/chat/chat-conversation/chat-conversation.component.ts");
/* harmony import */ var _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-empty/chat-empty.component */ "./src/app/chat/chat-empty/chat-empty.component.ts");







const routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        data: {
            scrollDisabled: true
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_4__["ChatEmptyComponent"]
            },
            {
                path: ':chatId',
                component: _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_3__["ChatConversationComponent"]
            }
        ]
    }
];
class ChatRoutingModule {
}
ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-chat */ "./node_modules/@iconify/icons-ic/twotone-chat.js");
/* harmony import */ var _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@vex/utils/track-by */ "./src/@vex/utils/track-by.ts");
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-circle */ "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-access-time */ "./node_modules/@iconify/icons-ic/twotone-access-time.js");
/* harmony import */ var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-do-not-disturb */ "./node_modules/@iconify/icons-ic/twotone-do-not-disturb.js");
/* harmony import */ var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-offline-bolt */ "./node_modules/@iconify/icons-ic/twotone-offline-bolt.js");
/* harmony import */ var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var _vex_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@vex/services/auth.service */ "./src/@vex/services/auth.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../@vex/components/scrollbar/scrollbar.component */ "./src/@vex/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _vex_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../@vex/pipes/relative-date-time/relative-date-time.pipe */ "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");




























function ChatComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/images/" + (ctx_r0.userInfo == null ? null : ctx_r0.userInfo.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 23);
} }
function ChatComponent_a_20_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const chat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/images/" + (chat_r5 == null ? null : chat_r5.from == null ? null : chat_r5.from.avatar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_a_20_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 35);
} }
const _c0 = function (a0) { return [a0]; };
function ChatComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatComponent_a_20_img_3_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatComponent_a_20_img_4_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "relativeDateTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, chat_r5._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r5 == null ? null : chat_r5.from == null ? null : chat_r5.from.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(chat_r5 == null ? null : chat_r5.from == null ? null : chat_r5.from.avatar));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("font-medium", (chat_r5 == null ? null : chat_r5.unreadCount) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", chat_r5.from.first_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("font-medium", (chat_r5 == null ? null : chat_r5.unreadCount) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", chat_r5 == null ? null : chat_r5.message == null ? null : chat_r5.message.message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, chat_r5.message.updatedAt));
} }
function ChatComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const status_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.setStatus(status_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ic-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", status_r9.icon)("ngClass", status_r9.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r9.label);
} }
let ChatComponent = class ChatComponent {
    constructor(cd, router, authService, mediaMatcher, chatService) {
        this.cd = cd;
        this.router = router;
        this.authService = authService;
        this.mediaMatcher = mediaMatcher;
        this.chatService = chatService;
        // chats$: Observable<Chat[]> = of(chats).pipe(
        //   // Fix to allow stagger animations with static data
        //   delay(0)
        // );
        this.chats = [];
        this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 959px)');
        this.drawerOpen$ = this.chatService.drawerOpen$;
        this.statuses = [
            {
                id: 'online',
                label: 'Online',
                icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default.a,
                colorClass: 'text-green'
            },
            {
                id: 'away',
                label: 'Away',
                icon: _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_9___default.a,
                colorClass: 'text-orange'
            },
            {
                id: 'dnd',
                label: 'Do not disturb',
                icon: _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_10___default.a,
                colorClass: 'text-red'
            },
            {
                id: 'offline',
                label: 'Offline',
                icon: _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_11___default.a,
                colorClass: 'text-gray'
            }
        ];
        this.activeStatus = this.statuses[0];
        this.icCheckCircle = _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icChat = _iconify_icons_ic_twotone_chat__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_6__["trackById"];
        this.userInfo = {
            id: "",
            avatar: ""
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.userInfo;
        this.getChats();
        this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
        this._mobileQueryListener = () => {
            this.mobileQuery.matches ? this.closeDrawer() : this.openDrawer();
            this.cd.detectChanges();
        };
        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(() => this.mobileQuery.matches), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__["untilDestroyed"])(this)).subscribe(() => this.closeDrawer());
    }
    setStatus(status) {
        this.activeStatus = status;
        this.cd.markForCheck();
    }
    drawerChange(drawerOpen) {
        this.chatService.drawerOpen.next(drawerOpen);
    }
    openDrawer() {
        this.chatService.drawerOpen.next(true);
        this.cd.markForCheck();
    }
    closeDrawer() {
        this.chatService.drawerOpen.next(false);
        this.cd.markForCheck();
    }
    ngOnDestroy() {
        this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    }
    getChats() {
        this.chatService.getChats().subscribe(chats => {
            this.chats = chats || [];
            this.cd.detectChanges();
        });
    }
};
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["vex-chat"]], decls: 26, vars: 14, consts: [["fxLayout", "column", 1, "w-full", "h-full", "p-gutter", "container"], [1, "w-full", "h-64", "absolute", "top-0", "left-0", "right-0"], ["fxFlex", "auto", 1, "card", "overflow-hidden"], ["position", "start", 1, "drawer", 3, "mode", "opened", "openedChange"], ["fxLayout", "column", 1, "h-full"], ["fxFlex", "none", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "p-4", "border-b", "bg-app-bar"], [1, "relative", "cursor-pointer", 3, "matMenuTriggerFor"], ["class", "avatar bg-card", "fxFlex", "none", 3, "src", 4, "ngIf"], ["class", "avatar bg-card", "fxFlex", "none", "src", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png", 4, "ngIf"], [1, "bg-card", "absolute", "-bottom-1", "-right-1", "rounded-full", 3, "icon", "ngClass"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "border", "rounded-full", "text-hint", "overflow-hidden", "bg-card"], ["height", "18px", "width", "18px", 1, "ml-4", "mr-3", 3, "icon"], ["fxFlex", "auto", "placeholder", "Search for a chat", "type", "text", "disabled", "", 1, "outline-none", "border-0", "h-10", "w-full", "placeholder:text-secondary", "caption", "bg-card"], ["fxFlex", "none", "fxLayout", "row", 1, "headline", "font-normal", "m-0", "p-4", "text-primary", "border-b"], [1, "block"], ["height", "28px", "inline", "true", "width", "28px", 1, "mr-5", "ml-1", 3, "icon"], [1, "flex-auto"], ["class", "border-b px-4 py-6 hover:bg-hover cursor-pointer relative select-none block no-underline text-dark", "matRipple", "", "routerLinkActive", "bg-hover", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "chat-pattern", "relative"], ["xPosition", "after", "yPosition", "below"], ["statusMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["fxFlex", "none", 1, "avatar", "bg-card", 3, "src"], ["fxFlex", "none", "src", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png", 1, "avatar", "bg-card"], ["matRipple", "", "routerLinkActive", "bg-hover", 1, "border-b", "px-4", "py-6", "hover:bg-hover", "cursor-pointer", "relative", "select-none", "block", "no-underline", "text-dark", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px"], ["fxFlex", "none", 1, "relative"], ["class", "avatar", 3, "src", 4, "ngIf"], ["src", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png", "class", "avatar", 4, "ngIf"], ["fxFlex", "auto", 1, "overflow-hidden"], [1, "subheading-2", "leading-snug"], [1, "body-1", "text-secondary", "truncate"], ["fxFlex", "none", "fxLayout", "column", "fxLayoutAlign", "center end"], [1, "caption", "font-medium", "text-secondary"], [1, "avatar", 3, "src"], ["src", "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png", 1, "avatar"], ["mat-menu-item", "", 3, "click"], ["inline", "true", "size", "24px", 3, "icon", "ngClass"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-drawer-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-drawer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function ChatComponent_Template_mat_drawer_openedChange_3_listener($event) { return ctx.drawerChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChatComponent_img_8_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ChatComponent_img_9_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ic-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ic-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ic-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "vex-scrollbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ChatComponent_a_20_Template, 14, 15, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-drawer-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-menu", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ChatComponent_button_25_Template, 4, 3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 12, ctx.drawerOpen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userInfo == null ? null : ctx.userInfo.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.userInfo == null ? null : ctx.userInfo.avatar));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.activeStatus.icon)("ngClass", ctx.activeStatus.colorClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.icChat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatDrawerContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultFlexDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatDrawer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultLayoutGapDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_21__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"], _vex_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_23__["ScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"], _vex_pipes_relative_date_time_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_25__["RelativeDateTimePipe"]], styles: [".drawer[_ngcontent-%COMP%] {\n  max-width: 90%;\n  width: 400px;\n}\n\n.drawer[_ngcontent-%COMP%]     .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.chat-pattern[_ngcontent-%COMP%] {\n  background-color: var(--background-base);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23eeeeee' fill-opacity='0.2' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLG9wQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XG4gIG1heC13aWR0aDogOTAlO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5kcmF3ZXIgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jaGF0LXBhdHRlcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDgwIDgwJyB3aWR0aD0nODAnIGhlaWdodD0nODAnJTNFJTNDcGF0aCBmaWxsPSclMjNlZWVlZWUnIGZpbGwtb3BhY2l0eT0nMC4yJyBkPSdNMTQgMTZIOXYtMmg1VjkuODdhNCA0IDAgMSAxIDIgMFYxNGg1djJoLTV2MTUuOTVBMTAgMTAgMCAwIDAgMjMuNjYgMjdsLTMuNDYtMiA4LjItMi4yLTIuOSA1YTEyIDEyIDAgMCAxLTIxIDBsLTIuODktNSA4LjIgMi4yLTMuNDcgMkExMCAxMCAwIDAgMCAxNCAzMS45NVYxNnptNDAgNDBoLTV2LTJoNXYtNC4xM2E0IDQgMCAxIDEgMiAwVjU0aDV2MmgtNXYxNS45NUExMCAxMCAwIDAgMCA2My42NiA2N2wtMy40Ny0yIDguMi0yLjItMi44OCA1YTEyIDEyIDAgMCAxLTIxLjAyIDBsLTIuODgtNSA4LjIgMi4yLTMuNDcgMkExMCAxMCAwIDAgMCA1NCA3MS45NVY1NnptLTM5IDZhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0em00MC00MGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6TTE1IDhhMiAyIDAgMSAwIDAtNCAyIDIgMCAwIDAgMCA0em00MCA0MGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcbn0iXX0= */"], data: { animation: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"],
            _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__["stagger80ms"]
        ] }, changeDetection: 0 });
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__["UntilDestroy"])()
], ChatComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'vex-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"],
                    _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__["stagger80ms"]
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: _vex_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_16__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/__ivy_ngcc__/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-conversation/chat-conversation.component */ "./src/app/chat/chat-conversation/chat-conversation.component.ts");
/* harmony import */ var _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-empty/chat-empty.component */ "./src/app/chat/chat-empty/chat-empty.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@vex/components/scrollbar/scrollbar.module */ "./src/@vex/components/scrollbar/scrollbar.module.ts");
/* harmony import */ var _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../@vex/pipes/relative-date-time/relative-date-time.module */ "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");



















class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_16__["ScrollbarModule"],
            _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_17__["RelativeDateTimeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_9__["ChatConversationComponent"], _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_10__["ChatEmptyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_16__["ScrollbarModule"],
        _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_17__["RelativeDateTimeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_conversation_chat_conversation_component__WEBPACK_IMPORTED_MODULE_9__["ChatConversationComponent"], _chat_empty_chat_empty_component__WEBPACK_IMPORTED_MODULE_10__["ChatEmptyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                    _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _vex_components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_16__["ScrollbarModule"],
                    _vex_pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_17__["RelativeDateTimeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ChatService {
    constructor(http) {
        this.http = http;
        this.token = '';
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.drawerOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.drawerOpen$ = this.drawerOpen.asObservable();
        this.token = localStorage.getItem("_A_tro_ee");
        this.header = this.header.set('Authorization', 'Bearer ' + this.token);
    }
    getChats() {
        return this.http.get('/post-messages/get-my-chats', { headers: this.header });
    }
    getChatMessages(chat_id) {
        return this.http.get('/post-messages/get-my-chats-messages/' + chat_id, { headers: this.header });
    }
    sendPostMessage(message) {
        return this.http.post('/post-messages/send-my-message', message, { headers: this.header });
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map