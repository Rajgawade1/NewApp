(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addn-education/addn-education.component.css":
/*!*************************************************************!*\
  !*** ./src/app/addn-education/addn-education.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG4tZWR1Y2F0aW9uL2FkZG4tZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/addn-education/addn-education.component.html":
/*!**************************************************************!*\
  !*** ./src/app/addn-education/addn-education.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addeduForm\" (ngSubmit)=\"submitData()\">\n        <mat-card class=\"mat-card-data-entry\">\n                <mat-card-header>\n        \n                    <!-- <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n                </mat-card-header>\n                <mat-card-content>\n            <div class=\"row\">\n                <div *ngFor=\"let lang of addeduForm.controls; let i=index\">\n                    <div class=\"row\" [formGroupName]=\"i\">\n                        <input type=\"text\" placeholder=\"First Name\" formControlName='userId' hidden>\n\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field>\n                                <mat-label>Qualification</mat-label>\n                                <mat-select type=\"text\" formControlName='degree'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">10th</mat-option>\n                                    <mat-option value=\"2\">12th</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field>\n                                <mat-label>Board / University</mat-label>\n                                <mat-select type=\"text\" formControlName='board'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">10th</mat-option>\n                                    <mat-option value=\"2\">12th</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field>\n                                <mat-label>Institute</mat-label>\n                                <mat-select type=\"text\" formControlName='institute'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">VJTI</mat-option>\n                                    <mat-option value=\"2\">SPIT</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput type=\"number\" formControlName='gpa' placeholder=\"% / GPA\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field class=\"example-full-width\">\n\n                                <input matInput type=\"text\" formControlName='speciality'\n                                    placeholder=\"Subject / Speciality\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-sm-2\" *ngIf=\"i>0\">\n\n                            <button (click)=\"removeEducation(i)\" color=\"warn\" mat-icon-button=\"\"\n                            class=\"mat-icon-button mat-button-base mat-warn\"><span class=\"mat-button-wrapper\">\n                                <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                    aria-hidden=\"true\">delete</mat-icon>\n                            </span>\n                            <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                            <div class=\"mat-button-focus-overlay\"></div>\n                        </button>\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"col-sm-12 form-group\">\n\n                        <button type=\"button\" (click)=\"addNewEducation()\" color=\"primary\" mat-icon-button=\"\"\n                        class=\"mat-icon-button mat-button-base mat-primary\"><span class=\"mat-button-wrapper\"\n                            title=\"Add Language\">\n                            <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                aria-hidden=\"true\">add_box</mat-icon>\n                        </span>\n                        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                        <div class=\"mat-button-focus-overlay\"></div>\n                    </button>\n                </div>\n            </div>\n        \n        </mat-card-content>\n\n        <mat-card-actions>\n\n            <div class=\"text-center\">\n                    <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n        </mat-card-actions>\n   </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/addn-education/addn-education.component.ts":
/*!************************************************************!*\
  !*** ./src/app/addn-education/addn-education.component.ts ***!
  \************************************************************/
/*! exports provided: AddnEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnEducationComponent", function() { return AddnEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _common_common_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/common-utility */ "./src/app/common/common-utility.ts");







let AddnEducationComponent = class AddnEducationComponent {
    constructor(dataSubmitService, fb, dataGetService, globals, _utils) {
        this.dataSubmitService = dataSubmitService;
        this.fb = fb;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._utils = _utils;
    }
    ngOnInit() {
        this.addeduForm = this.fb.array([
            this.addAddnEducation()
        ]);
        this.getData();
    }
    addAddnEducation() {
        return this.fb.group({
            degree: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            board: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            institute: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            gpa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            speciality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            //isPursuing:['',[Validators.required,Validators.minLength(5)]],
            isAdditionalCourse: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userId: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get educations() {
        return this.addeduForm;
    }
    addNewEducation() {
        this.educations.push(this.addAddnEducation());
    }
    removeEducation(index) {
        (this.addeduForm).removeAt(index);
    }
    submitData() {
        console.log(this.addeduForm.value);
        this.dataSubmitService.submitqualificationData(this.addeduForm.value).subscribe(data => {
            this.setSuccess(data);
            //this.getData();
        }, error => {
            console.log(error);
            this.setError(error);
        });
    }
    getData() {
        this.dataGetService.getAddEducationInfo(this.addeduForm.value[0].userId).subscribe(data => {
            console.log(data);
            this.setEducationData(data);
        }, error => {
            console.log(error);
        });
    }
    setEducationData(data) {
        for (let i = 1; i < data.length; i++) {
            this.educations.push(this.addAddnEducation());
        }
        this.addeduForm.patchValue(data);
    }
    setSuccess(data) {
        this._utils.openSnackBar("Data submitted successfully", "OK");
        console.log("Success");
        console.log(data);
    }
    setError(data) {
        console.log("Error Occured" + data.error);
        this.addeduForm.setErrors({});
    }
    get board() {
        return this.addeduForm.get('board');
    }
    get degree() {
        return this.addeduForm.get('degree');
    }
    get institute() {
        return this.addeduForm.get('institute');
    }
    get gpa() {
        return this.addeduForm.get('gpa');
    }
    get speciality() {
        return this.addeduForm.get('speciality');
    }
    get isPursuing() {
        return this.addeduForm.get('isPursuing');
    }
    get isAdditionalCourse() {
        return this.addeduForm.get('isAdditionalCourse');
    }
};
AddnEducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'addn-education',
        template: __webpack_require__(/*! ./addn-education.component.html */ "./src/app/addn-education/addn-education.component.html"),
        styles: [__webpack_require__(/*! ./addn-education.component.css */ "./src/app/addn-education/addn-education.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_submit_service__WEBPACK_IMPORTED_MODULE_3__["DataSubmitService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_get_service__WEBPACK_IMPORTED_MODULE_4__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _common_common_utility__WEBPACK_IMPORTED_MODULE_6__["CommonUtility"]])
], AddnEducationComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\r\n   height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:560px;\">\n<router-outlet></router-outlet>\n</div>\n<!--<navbar-footer></navbar-footer>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Pro Career';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pre-login/pre-login.component */ "./src/app/pre-login/pre-login.component.ts");
/* harmony import */ var _navbar_header_navbar_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navbar-header/navbar-header.component */ "./src/app/navbar-header/navbar-header.component.ts");
/* harmony import */ var _navbar_footer_navbar_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./navbar-footer/navbar-footer.component */ "./src/app/navbar-footer/navbar-footer.component.ts");
/* harmony import */ var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./personal-details/personal-details.component */ "./src/app/personal-details/personal-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./basic-details/basic-details.component */ "./src/app/basic-details/basic-details.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./other/other.component */ "./src/app/other/other.component.ts");
/* harmony import */ var _declaration_declaration_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./declaration/declaration.component */ "./src/app/declaration/declaration.component.ts");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./output/output.component */ "./src/app/output/output.component.ts");
/* harmony import */ var _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./loginmodal/loginmodal.component */ "./src/app/loginmodal/loginmodal.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _addn_education_addn_education_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./addn-education/addn-education.component */ "./src/app/addn-education/addn-education.component.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _common_common_utility__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./common/common-utility */ "./src/app/common/common-utility.ts");







































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_21__["PreLoginComponent"],
            _navbar_header_navbar_header_component__WEBPACK_IMPORTED_MODULE_22__["NavbarHeaderComponent"],
            _navbar_footer_navbar_footer_component__WEBPACK_IMPORTED_MODULE_23__["NavbarFooterComponent"],
            _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_24__["PersonalDetailsComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"],
            _basic_details_basic_details_component__WEBPACK_IMPORTED_MODULE_27__["BasicDetailsComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_28__["EducationComponent"],
            _experience_experience_component__WEBPACK_IMPORTED_MODULE_29__["ExperienceComponent"],
            _other_other_component__WEBPACK_IMPORTED_MODULE_30__["OtherComponent"],
            _declaration_declaration_component__WEBPACK_IMPORTED_MODULE_31__["DeclarationComponent"],
            _output_output_component__WEBPACK_IMPORTED_MODULE_32__["OutputComponent"],
            _loginmodal_loginmodal_component__WEBPACK_IMPORTED_MODULE_33__["LoginmodalComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_34__["RegisterComponent"],
            _addn_education_addn_education_component__WEBPACK_IMPORTED_MODULE_35__["AddnEducationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"].forRoot([
                { path: '', component: _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_21__["PreLoginComponent"] },
                { path: 'login', component: _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_21__["PreLoginComponent"] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
                { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_26__["NotFoundComponent"] },
            ]),
        ],
        providers: [_common_Globals__WEBPACK_IMPORTED_MODULE_36__["Globals"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_LOCALE"], useValue: 'it' }, _common_common_utility__WEBPACK_IMPORTED_MODULE_37__["CommonUtility"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/basic-details/basic-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/basic-details/basic-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLWRldGFpbHMvYmFzaWMtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/basic-details/basic-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/basic-details/basic-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"basicForm\" (ngSubmit)=\"submitBasicData()\">\n    <mat-card class=\"\">\n        <mat-card-header>\n\n            <!-- <mat-card-title>Shiba Inu</mat-card-title>\n            <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"row\">\n\n                <input type=\"text\" class=\"form-control\" formControlName='id' hidden>\n\n                <div class=\"form-group col-sm-7\">\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput formControlName='objective' placeholder=\"Objective\"></textarea>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-group col-sm-6\">\n\n                    <mat-form-field>\n                        <mat-label>Domain</mat-label>\n                        <mat-select formControlName='domain'>\n                            <mat-option value=\"null\">SELECT</mat-option>\n                            <mat-option value=\"1\">Banking</mat-option>\n                            <mat-option value=\"2\">Health Care</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-group col-sm-6\">\n                    <mat-form-field>\n                        <mat-label>Sub Domain</mat-label>\n                        <mat-select formControlName='subDomain'>\n                            <mat-option value=\"null\">SELECT</mat-option>\n                            <mat-option value=\"1\">Finance</mat-option>\n                            <mat-option value=\"2\">IT Care</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-group col-sm-6\">\n                    <label class=\"form-label\">Upload Resume</label>\n                    <input type=\"file\" class=\"form-control\" formControlName='resume'>\n                </div>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n            <div class=\"text-center\">\n                <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n\n\n        </mat-card-actions>\n\n\n\n    </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/basic-details/basic-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/basic-details/basic-details.component.ts ***!
  \**********************************************************/
/*! exports provided: BasicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDetailsComponent", function() { return BasicDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let BasicDetailsComponent = class BasicDetailsComponent {
    constructor(fb, dataSubmitService, dataGetService, globals, _snackBar) {
        this.fb = fb;
        this.dataSubmitService = dataSubmitService;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.basicForm = this.fb.group({
            domain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subDomain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            objective: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            resume: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getData();
    }
    submitBasicData() {
        console.log(this.basicForm.value);
        this.dataSubmitService.submitBasicData(this.basicForm.value).subscribe(data => {
            this.setSuccess(data);
            this.getData();
        }, error => {
            console.log(error);
            this.setError(error);
            this.getData();
        });
    }
    getData() {
        this.dataGetService.getBaiscInfo(this.basicForm.value.id).subscribe(data => {
            console.log(data);
            this.setBasicData(data);
        }, error => {
            this.globals.isBasicCreated = false;
            console.log(error);
        });
    }
    setBasicData(data) {
        this.globals.isBasicCreated = true;
        this.basicForm.patchValue(data);
    }
    setSuccess(data) {
        this.openSnackBar("Data submiteed successfully", "OK");
        console.log("Success");
        console.log(data);
    }
    setError(data) {
        console.log("Error Occured" + data.error);
        //  this.basicForm.setErrors({});
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
BasicDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'basic-details',
        template: __webpack_require__(/*! ./basic-details.component.html */ "./src/app/basic-details/basic-details.component.html"),
        styles: [__webpack_require__(/*! ./basic-details.component.css */ "./src/app/basic-details/basic-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_submit_service__WEBPACK_IMPORTED_MODULE_3__["DataSubmitService"],
        _data_get_service__WEBPACK_IMPORTED_MODULE_4__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], BasicDetailsComponent);



/***/ }),

/***/ "./src/app/check-user.service.ts":
/*!***************************************!*\
  !*** ./src/app/check-user.service.ts ***!
  \***************************************/
/*! exports provided: CheckUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUserService", function() { return CheckUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/service-urls */ "./src/app/common/service-urls.ts");




let CheckUserService = class CheckUserService {
    constructor(http) {
        this.http = http;
        //baseUrl="http://http://100.83.14.249:8000";
        this.baseUrl = _common_service_urls__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.data = [{ "title": "Lion king" }];
    }
    getMovies() {
        return this.http.get(this.baseUrl + '/movies/', { headers: this.httpHeaders });
    }
    getRecruiters() {
        return this.http.get(this.baseUrl + '/movies/', { headers: this.httpHeaders });
    }
    getJobs() {
        return this.http.get(this.baseUrl + '/movies/', { headers: this.httpHeaders });
    }
    getCareers() {
        return this.http.get(this.baseUrl + '/movies/', { headers: this.httpHeaders });
    }
    getMCQ() {
        return this.http.get(this.baseUrl + '/movies/', { headers: this.httpHeaders });
    }
    getCVs() {
        return this.http.get(this.baseUrl + '/movies/', { headers: this.httpHeaders });
    }
    getPosts() {
        let url = "https://jsonplaceholder.typicode.com/posts";
        return this.http.get(url);
    }
    getListOfRecruiters() {
        return [{ "title": "TCS", "jobs": 1 }, { "title": "Infosys", "jobs": 6 }, { "title": "IBM", "jobs": 8 }, { "title": "HDFC Bank", "jobs": 6 },];
    }
};
CheckUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CheckUserService);



/***/ }),

/***/ "./src/app/common/Globals.ts":
/*!***********************************!*\
  !*** ./src/app/common/Globals.ts ***!
  \***********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Globals = class Globals {
    get isDeclrCreated() {
        return this._isDeclrCreated;
    }
    set isDeclrCreated(isBasicCreated) {
        this._isDeclrCreated = isBasicCreated;
    }
    get userId() {
        return this._userId;
    }
    set userId(userId) {
        this._userId = userId;
    }
    get isBasicCreated() {
        return this._isBasicCreated;
    }
    set isBasicCreated(isBasicCreated) {
        this._isBasicCreated = isBasicCreated;
    }
    get expCreated() {
        return this._expCreated;
    }
    set expCreated(expCreated) {
        this._expCreated = expCreated;
    }
    get token() {
        return this._token;
    }
    set token(_token) {
        this._token = _token;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get Authorization() {
        return this._Authorization;
    }
    set Authorization(email) {
        this._Authorization = email;
    }
    set contentType(contentType) {
        this._contentType = "application/json";
    }
};
Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/common/common-utility.ts":
/*!******************************************!*\
  !*** ./src/app/common/common-utility.ts ***!
  \******************************************/
/*! exports provided: CommonUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtility", function() { return CommonUtility; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let CommonUtility = class CommonUtility {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
CommonUtility = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CommonUtility);



/***/ }),

/***/ "./src/app/common/format-datepicker.ts":
/*!*********************************************!*\
  !*** ./src/app/common/format-datepicker.ts ***!
  \*********************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");

class AppDateAdapter extends _angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"] {
    format(date, displayFormat) {
        if (displayFormat === 'input') {
            let day = date.getDate().toString();
            day = +day < 10 ? '0' + day : day;
            let month = (date.getMonth() + 1).toString();
            month = +month < 10 ? '0' + month : month;
            let year = date.getFullYear();
            return `${day}-${month}-${year}`;
        }
        return date.toDateString();
    }
}
const APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
        },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "./src/app/common/service-urls.ts":
/*!****************************************!*\
  !*** ./src/app/common/service-urls.ts ***!
  \****************************************/
/*! exports provided: baseUrl, httpHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpHeaders", function() { return httpHeaders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

const baseUrl = "http://18.136.200.90";
//export const baseUrl="http://192.168.0.101:8000";
const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json', "Authorization": "Token ABC" });


/***/ }),

/***/ "./src/app/data-get.service.ts":
/*!*************************************!*\
  !*** ./src/app/data-get.service.ts ***!
  \*************************************/
/*! exports provided: DataGetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGetService", function() { return DataGetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/service-urls */ "./src/app/common/service-urls.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/Globals */ "./src/app/common/Globals.ts");





let DataGetService = class DataGetService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
        this.baseUrl = _common_service_urls__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
        //httpHeaders=basrUrls.httpHeaders;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', "Authorization": "Token " + this.globals.token });
    }
    getPinfoData(userId) {
        return this.http.get(this.baseUrl + '/personalinfo/' + userId + '/', { headers: this.httpHeaders });
    }
    getBaiscInfo(userId) {
        return this.http.get(this.baseUrl + '/otherinfo/' + userId + '/', { headers: this.httpHeaders });
    }
    getDeclrInfo(userId) {
        return this.http.get(this.baseUrl + '/declaration/' + userId + '/', { headers: this.httpHeaders });
    }
    getEducationInfo(userId) {
        return this.http.get(this.baseUrl + '/qualification/?userId=' + userId + '&isAdditionalCourse=False', { headers: this.httpHeaders });
    }
    getAddEducationInfo(userId) {
        return this.http.get(this.baseUrl + '/qualification/?userId=' + userId + '&isAdditionalCourse=True', { headers: this.httpHeaders });
    }
    getAddnEducationInfo(userId) {
        return this.http.get(this.baseUrl + '/addnEducationInfo/' + userId + '/', { headers: this.httpHeaders });
    }
    getExperienceInfo(userId) {
        return this.http.get(this.baseUrl + '/experience/?userId=' + userId, { headers: this.httpHeaders });
    }
};
DataGetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"]])
], DataGetService);



/***/ }),

/***/ "./src/app/data-submit.service.ts":
/*!****************************************!*\
  !*** ./src/app/data-submit.service.ts ***!
  \****************************************/
/*! exports provided: DataSubmitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSubmitService", function() { return DataSubmitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_service_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/service-urls */ "./src/app/common/service-urls.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/Globals */ "./src/app/common/Globals.ts");







let DataSubmitService = class DataSubmitService {
    constructor(http, globals) {
        this.http = http;
        this.globals = globals;
        this.baseUrl = _common_service_urls__WEBPACK_IMPORTED_MODULE_5__["baseUrl"];
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', "Authorization": "Token " + this.globals.token });
        this.httpHeaders1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" });
    }
    ngOnInit() {
    }
    submitBasicData(basicData) {
        if (this.globals.isBasicCreated) {
            return this.http.put(this.baseUrl + '/otherinfo/' + basicData.id + '/', basicData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        else {
            return this.http.post(this.baseUrl + '/otherinfo/', basicData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
    }
    submitDeclrData(basicData) {
        if (this.globals.isBasicCreated) {
            return this.http.put(this.baseUrl + '/declaration/' + basicData.id + '/', basicData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        else {
            return this.http.post(this.baseUrl + '/declaration/', basicData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
    }
    generateResume(resumeData) {
        return this.http.post(this.baseUrl + '/generate_resume/', resumeData, { headers: this.httpHeaders1 });
    }
    submitPersoanlData(personalData) {
        return this.http.put(this.baseUrl + '/personalinfo/' + personalData.id + '/', personalData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    submitqualificationData(qualificationData) {
        return this.http.post(this.baseUrl + '/qualification/', qualificationData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    submitExperiencenData(qualificationData) {
        return this.http.post(this.baseUrl + '/experience/', qualificationData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log(error);
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            errorMessage = error.error;
        }
        window.alert(JSON.stringify(errorMessage));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
DataSubmitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_Globals__WEBPACK_IMPORTED_MODULE_6__["Globals"]])
], DataSubmitService);



/***/ }),

/***/ "./src/app/declaration/declaration.component.css":
/*!*******************************************************!*\
  !*** ./src/app/declaration/declaration.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlY2xhcmF0aW9uL2RlY2xhcmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/declaration/declaration.component.html":
/*!********************************************************!*\
  !*** ./src/app/declaration/declaration.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"declrForm\" (ngSubmit)=\"submitData()\">\n    <mat-card class=\"mat-card-data-entry\">\n        <mat-card-header>\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"row\">\n\n                <input type=\"text\" class=\"form-control\" formControlName='id' hidden>\n                <div class=\"form-group col-sm-3\">\n                    <mat-form-field>\n                        <mat-label>Company</mat-label>\n                        <mat-select type=\"text\" formControlName='rating'>\n                            <mat-option value=\"null\">Rating</mat-option>\n                            <mat-option value=\"1\">1</mat-option>\n                            <mat-option value=\"2\">2</mat-option>\n                            <mat-option value=\"3\">3</mat-option>\n                            <mat-option value=\"4\">4</mat-option>\n                            <mat-option value=\"5\">5</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"form-group col-sm-3\">\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea matInput formControlName='suggestions'\n                            placeholder=\"Roles & Responsibilities\"></textarea>\n                    </mat-form-field>\n                </div>\n            </div>\n                <div class=\"row\">\n                    <div class=\"form-check form-check-inline\">\n                            <mat-checkbox type=\"checkbox\" value=\"mat-option1\" formControlName='canSpeak'> I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately.\n                            </mat-checkbox>\n                        </div>\n\n                </div>\n               \n        </mat-card-content>\n        <mat-card-actions>\n            <div class=\"text-center\">\n                <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n        </mat-card-actions>\n\n    </mat-card>\n\n</form>"

/***/ }),

/***/ "./src/app/declaration/declaration.component.ts":
/*!******************************************************!*\
  !*** ./src/app/declaration/declaration.component.ts ***!
  \******************************************************/
/*! exports provided: DeclarationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationComponent", function() { return DeclarationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _common_common_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common-utility */ "./src/app/common/common-utility.ts");








let DeclarationComponent = class DeclarationComponent {
    constructor(fb, dataSubmitService, dataGetService, globals, _snackBar, _utils) {
        this.fb = fb;
        this.dataSubmitService = dataSubmitService;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._snackBar = _snackBar;
        this._utils = _utils;
    }
    ngOnInit() {
        this.declrForm = this.fb.group({
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            suggestions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getData();
    }
    submitData() {
        console.log(this.declrForm.value);
        this.dataSubmitService.submitDeclrData(this.declrForm.value).subscribe(data => {
            this.setSuccess(data);
            this.getData();
        }, error => {
            console.log(error);
            this.setError(error);
            this.getData();
        });
    }
    getData() {
        this.dataGetService.getDeclrInfo(this.declrForm.value.id).subscribe(data => {
            console.log(data);
            this.setDeclData(data);
        }, error => {
            this.globals.isBasicCreated = false;
            console.log(error);
        });
    }
    setDeclData(data) {
        this.globals.isDeclrCreated = true;
        this.declrForm.patchValue(data);
    }
    setSuccess(data) {
        this._utils.openSnackBar("Data submiteed successfully", "OK");
        console.log("Success");
        console.log(data);
    }
    setError(data) {
        console.log("Error Occured" + data.error);
    }
};
DeclarationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'declaration',
        template: __webpack_require__(/*! ./declaration.component.html */ "./src/app/declaration/declaration.component.html"),
        styles: [__webpack_require__(/*! ./declaration.component.css */ "./src/app/declaration/declaration.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_submit_service__WEBPACK_IMPORTED_MODULE_6__["DataSubmitService"],
        _data_get_service__WEBPACK_IMPORTED_MODULE_3__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _common_common_utility__WEBPACK_IMPORTED_MODULE_7__["CommonUtility"]])
], DeclarationComponent);



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"educationForm\" (ngSubmit)=\"submitData()\">\n    <mat-card class=\"\">\n        <mat-card-header>\n\n            <!-- <mat-card-title>Shiba Inu</mat-card-title>\n                    <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"row\">\n                <div *ngFor=\"let lang of educationForm.controls; let i=index\">\n                    <div class=\"row\" [formGroupName]=\"i\">\n                        <input type=\"text\" placeholder=\"First Name\" formControlName='userId' hidden>\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field>\n                                <mat-label>Qualification</mat-label>\n                                <mat-select type=\"text\" formControlName='degree'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">10th</mat-option>\n                                    <mat-option value=\"2\">12th</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field>\n                                <mat-label>Board / University</mat-label>\n                                <mat-select type=\"text\" formControlName='board'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">10th</mat-option>\n                                    <mat-option value=\"2\">12th</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field class=\"example-full-width\">\n                                <!-- <input matInput type=\"date\" formControlName='startDate' placeholder=\"Start Date\"> -->\n                                <input matInput [matDatepicker]=\"picker\" placeholder=\"Start Date\"\n                                    formControlName='startDate'>\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>\n\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field class=\"example-full-width\">\n                                <!-- <input matInput type=\"date\" formControlName='startDate' placeholder=\"Start Date\"> -->\n                                <input matInput [matDatepicker]=\"picker1\" placeholder=\"End Date\"\n                                    formControlName='endDate'>\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field>\n                                <mat-label>Institute</mat-label>\n                                <mat-select type=\"text\" formControlName='institute'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">VJTI</mat-option>\n                                    <mat-option value=\"2\">SPIT</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput type=\"number\" formControlName='gpa' placeholder=\"% / GPA\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field class=\"example-full-width\">\n\n                                <input matInput type=\"text\" formControlName='speciality'\n                                    placeholder=\"Subject / Speciality\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"col-sm-3\" *ngIf=\"i>0\">\n                            <!-- <button class=\"btn btn-sm btn-danger pull-right\" type=\"button\" (click)=\"removeEducation(i)\">\n                                <i class=\"material-icons md-44\">delete</i>\n                            </button> -->\n                            <button (click)=\"removeEducation(i)\" color=\"warn\" mat-icon-button=\"\"\n                                class=\"mat-icon-button mat-button-base mat-warn\"><span class=\"mat-button-wrapper\">\n                                    <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                        aria-hidden=\"true\">delete</mat-icon>\n                                </span>\n                                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                            </button>\n                        </div>\n\n                    </div>\n                </div>\n                <hr>\n                <div class=\"col-sm-12 form-group\">\n                    <button type=\"button\" (click)=\"addNewEducation()\" color=\"primary\" mat-icon-button=\"\"\n                        class=\"mat-icon-button mat-button-base mat-primary\"><span class=\"mat-button-wrapper\"\n                            title=\"Add Education\">\n                            <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                aria-hidden=\"true\">add_box</mat-icon>\n                        </span>\n                        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                        <div class=\"mat-button-focus-overlay\"></div>\n                    </button>\n                </div>\n            </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n\n            <div class=\"text-center\">\n                    <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n            <div *ngFor=\"let item of errorData | keyvalue\">\n                <div class=\"invalid-feedback d-inline \">\n                    Eroor: {{item.value}}\n                </div>\n            </div>\n        </mat-card-actions>\n    </mat-card>\n\n</form>"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _common_format_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/format-datepicker */ "./src/app/common/format-datepicker.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _common_common_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/common-utility */ "./src/app/common/common-utility.ts");










let EducationComponent = class EducationComponent {
    constructor(dataSubmitService, fb, dataGetService, _globals, _snackBar, _utils) {
        this.dataSubmitService = dataSubmitService;
        this.fb = fb;
        this.dataGetService = dataGetService;
        this._globals = _globals;
        this._snackBar = _snackBar;
        this._utils = _utils;
    }
    ngOnInit() {
        this.educationForm = this.fb.array([
            this.addEducation()
        ]);
        this.getData();
    }
    addEducation() {
        return this.fb.group({
            degree: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            board: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            institute: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            gpa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            speciality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            startDate: ['2010-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: ['2010-01-01', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            //isPursuing:['',[Validators.required,Validators.minLength(5)]],
            isAdditionalCourse: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userId: [this._globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    get educations() {
        return this.educationForm;
    }
    addNewEducation() {
        this.educations.push(this.addEducation());
    }
    removeEducation(index) {
        (this.educationForm).removeAt(index);
    }
    submitData() {
        console.log(this.educationForm.value);
        this.dataSubmitService.submitqualificationData(this.educationForm.value).subscribe(data => {
            this.setSuccess(data);
            // this.getData();
        }, error => {
            console.log(error);
            this.setError(error);
        });
    }
    getData() {
        this.dataGetService.getEducationInfo(this.educationForm.value[0].userId).subscribe(data => {
            console.log(data);
            this.setEducationData(data);
        }, error => {
            console.log(error);
        });
    }
    setEducationData(data) {
        for (let i = 1; i < data.length; i++) {
            this.educations.push(this.addEducation());
        }
        this.educationForm.patchValue(data);
    }
    setSuccess(data) {
        this._utils.openSnackBar("Data submitted successfully", "OK");
        console.log("Success");
        console.log(data);
    }
    setError(data) {
        console.log("Error Occured" + data);
        //this.educationForm.setErrors({});
        this.errorData = data[0];
    }
    get board() {
        return this.educationForm.get('board');
    }
    get degree() {
        return this.educationForm.get('degree');
    }
    get institute() {
        return this.educationForm.get('institute');
    }
    get gpa() {
        return this.educationForm.get('gpa');
    }
    get speciality() {
        return this.educationForm.get('speciality');
    }
    get startDate() {
        return this.educationForm.get('startDate');
    }
    get endDate() {
        return this.educationForm.get('endDate');
    }
    get isPursuing() {
        return this.educationForm.get('isPursuing');
    }
    get isAdditionalCourse() {
        return this.educationForm.get('isAdditionalCourse');
    }
};
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'education',
        template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _common_format_datepicker__WEBPACK_IMPORTED_MODULE_7__["AppDateAdapter"] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: _common_format_datepicker__WEBPACK_IMPORTED_MODULE_7__["APP_DATE_FORMATS"] }
        ],
        styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_submit_service__WEBPACK_IMPORTED_MODULE_3__["DataSubmitService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_get_service__WEBPACK_IMPORTED_MODULE_4__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_8__["Globals"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _common_common_utility__WEBPACK_IMPORTED_MODULE_9__["CommonUtility"]])
], EducationComponent);



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addExprForm\" (ngSubmit)=\"submitData()\">\n    <mat-card class=\"mat-card-data-entry\">\n        <mat-card-header>\n\n            <!-- <mat-card-title>Shiba Inu</mat-card-title>\n                            <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"row\">\n                <div *ngFor=\"let lang of addExprForm.controls; let i=index\">\n                    <div class=\"row\" [formGroupName]=\"i\">\n\n                        <input type=\"text\" class=\"form-control\" formControlName='userId' hidden>\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field>\n                                <mat-label>Company</mat-label>\n                                <mat-select type=\"text\" formControlName='company'>\n                                    <mat-option value=\"null\">SELECT</mat-option>\n                                    <mat-option value=\"1\">Google</mat-option>\n                                    <mat-option value=\"2\">Microsoft</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field>\n                                <mat-label>Designation</mat-label>\n                                <mat-select matInput formControlName='designation'>\n                                    <mat-option value=\"null\" selected>SELECT</mat-option>\n                                    <mat-option *ngFor=\"let designation of designationMatser\" [value]=\"designation.mid\">\n                                        {{designation.mvalue}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n\n                        <div class=\"form-check form-check-inline\">\n\n                            <mat-checkbox type=\"checkbox\" value=\"mat-option1\" formControlName='isCurrentlyWorking'>Is\n                                Current Job\n                            </mat-checkbox>\n\n                        </div>\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput type=\"date\" formControlName='startDate' placeholder=\"Start Date\">\n                            </mat-form-field>\n                        </div>\n\n\n\n\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput type=\"date\" formControlName='endDate' placeholder=\"End Data\">\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"form-group col-sm-3\">\n                            <mat-form-field class=\"example-full-width\">\n                                <textarea matInput formControlName='responsibilites'\n                                    placeholder=\"Roles & Responsibilities\"></textarea>\n                        </mat-form-field>\n\n                        </div>\n                        <div class=\"col-sm-3\" *ngIf=\"i>0\">\n\n                            <button (click)=\"removeExperience(i)\" color=\"warn\" mat-icon-button=\"\"\n                                class=\"mat-icon-button mat-button-base mat-warn\"><span class=\"mat-button-wrapper\">\n                                    <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                        aria-hidden=\"true\">delete</mat-icon>\n                                </span>\n                                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                            </button>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                    <button type=\"button\" (click)=\"addNewExperience()\" color=\"warn\" mat-icon-button=\"\"\n                        class=\"mat-icon-button mat-button-base mat-warn\"><span class=\"mat-button-wrapper\"\n                            title=\"Add Language\">\n                            <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                aria-hidden=\"true\">add_box</mat-icon>\n                        </span>\n                        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                        <div class=\"mat-button-focus-overlay\"></div>\n                    </button>\n\n                    <!-- <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"addNewEducation()\"> <i\n                            class=\"material-icons md-44\">add</i></button> -->\n                </div>\n\n            </div>\n\n\n        </mat-card-content>\n        <mat-card-actions>\n            <div class=\"text-center\">\n                <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n\n        </mat-card-actions>\n\n\n\n    </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _master_drop_downs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../master-drop-downs.service */ "./src/app/master-drop-downs.service.ts");
/* harmony import */ var _common_common_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common-utility */ "./src/app/common/common-utility.ts");








let ExperienceComponent = class ExperienceComponent {
    constructor(dataSubmitService, fb, _masterDpDn, dataGetService, globals, _utils) {
        this.dataSubmitService = dataSubmitService;
        this.fb = fb;
        this._masterDpDn = _masterDpDn;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._utils = _utils;
    }
    ngOnInit() {
        this.getDesignation();
        this.addExprForm = this.fb.array([
            this.addExperience()
        ]);
        this.getData();
    }
    getDesignation() {
        this._masterDpDn.getLanguages('master_designation').subscribe(data => { this.designationMatser = data; }, error => { console.log(error); });
    }
    addExperience() {
        return this.fb.group({
            company: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,]],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            responsibilites: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userId: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isCurrentlyWorking: [false,],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    submitData() {
        console.log(this.addExprForm.value);
        this.dataSubmitService.submitExperiencenData(this.addExprForm.value).subscribe(data => {
            this.setSuccess(data);
            this.getData();
        }, error => {
            console.log(error);
            this.setError(error);
        });
    }
    getData() {
        this.dataGetService.getExperienceInfo(this.globals.userId).subscribe(data => {
            console.log(data);
            this.globals.expCreated = true;
            this.setExperienceData(data);
        }, error => {
            console.log(error);
        });
    }
    setExperienceData(data) {
        this.addExprForm.patchValue(data);
    }
    setSuccess(data) {
        this._utils.openSnackBar("Data submiteed successfully", "OK");
        console.log("Success");
        console.log(data);
    }
    setError(data) {
        console.log("Error Occured" + data.error);
        this.addExprForm.setErrors({});
    }
    get experiences() {
        return this.addExprForm;
    }
    addNewExperience() {
        this.experiences.push(this.addExperience());
    }
    removeExperience(index) {
        (this.experiences).removeAt(index);
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'experience',
        template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
        styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_submit_service__WEBPACK_IMPORTED_MODULE_3__["DataSubmitService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _master_drop_downs_service__WEBPACK_IMPORTED_MODULE_6__["MasterDropDownsService"], _data_get_service__WEBPACK_IMPORTED_MODULE_4__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _common_common_utility__WEBPACK_IMPORTED_MODULE_7__["CommonUtility"]])
], ExperienceComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100vh;\">\n    <mat-toolbar color=\"warn\">\n        <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n            <a (click)=\"sidenav.toggle()\" mat-button>  <mat-icon>reorder</mat-icon></a>\n        </div>\n        <span>Pro Career</span>\n\n        <span class=\"example-spacer\"></span>\n\n        <div fxShow=\"true\" fxHide.lt-md=\"true\">\n            <a mat-button>Dashboard</a>\n        </div>\n        <!-- This fills the remaining space of the current row -->\n        <span class=\"fill-remaining-space \"></span>\n\n        <div fxShow=\"true\" >\n            <a mat-button (click)=\"logOut()\" style=\"float: right\"><mat-icon>power_settings_new</mat-icon></a>\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                            <mat-icon>more_vert</mat-icon>\n                          </button>\n                          <mat-menu #menu=\"matMenu\">\n                            <button mat-menu-item>\n                              <mat-icon>email</mat-icon>\n                              <span>{{data.userEmail}}</span>\n                            </button>\n                            <!-- <button mat-menu-item disabled>\n                              <mat-icon>voicemail</mat-icon>\n                              <span>Check voicemail</span>\n                            </button> -->\n                            <button mat-menu-item>\n                              <mat-icon>account_circle</mat-icon>\n                              <span>Profile</span>\n                            </button>\n                          </mat-menu>\n        </div>\n    </mat-toolbar>\n\n    <mat-sidenav-container fxFlexFill class=\"example-container\">\n        <mat-sidenav #sidenav fxLayout=\"column\">\n            <div fxLayout=\"column\">\n                <a (click)=\"sidenav.toggle()\" mat-button><i class=\"material-icons  md-24\">clear</i></a>\n                <a mat-button>Dashoboard</a>\n                <a mat-button>My Profile</a>\n\n            </div>\n        </mat-sidenav>\n        <mat-sidenav-content fxFlexFill>\n            <mat-tab-group>\n                <mat-tab label=\"Basic Details\">\n                    <basic-details></basic-details>\n                </mat-tab>\n                <mat-tab label=\"Personal Details\">\n                    <personal-details></personal-details>\n                </mat-tab>\n                <mat-tab label=\"Education\">\n                    <education></education>\n                </mat-tab>\n                <mat-tab label=\"Additional Education\">\n                    <addn-education></addn-education>\n                </mat-tab>\n                <mat-tab label=\"Experience\">\n                    <experience></experience>\n                </mat-tab>\n                <mat-tab label=\"Other \">\n                    <other></other>\n                </mat-tab>\n                <mat-tab label=\"Declaration\">\n                    <declaration></declaration>\n                </mat-tab>\n                <mat-tab label=\"Output\"><output></output></mat-tab>\n            </mat-tab-group>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(globals, router) {
        this.globals = globals;
        this.router = router;
        this.setData();
    }
    ngOnInit() {
        if (this.globals.userId == undefined || this.globals.userId == null) {
            this.setData();
            //this.logOut();
        }
    }
    setData() {
        this.globals.token = "95741a50a08e3904948774f5c1eae9e37581bee8";
        this.globals.userId = 9;
        this.globals.email = "urvil.kat@gmail.com";
        this.globals.Authorization = "95741a50a08e3904948774f5c1eae9e37581bee8";
        this.data = {
            "userEmail": this.globals.email,
            "userToken": this.globals.token,
            "userId": this.globals.userId,
        };
    }
    logOut() {
        this.globals.token = null;
        this.globals.userId = null;
        this.globals.email = null;
        this.globals.Authorization = null;
        console.log("You are not logged in");
        this.router.navigate(['']);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_Globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/loginmodal/loginmodal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/loginmodal/loginmodal.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-snack-bar-container {\r\n    max-width: 800px!important;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5tb2RhbC9sb2dpbm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbm1vZGFsL2xvZ2lubW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4IWltcG9ydGFudDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/loginmodal/loginmodal.component.html":
/*!******************************************************!*\
  !*** ./src/app/loginmodal/loginmodal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n                <mat-form-field>\n                    <input matInput placeholder=\"email\" type=\"text\" formControlName=\"email\" />\n                </mat-form-field>\n\n                <div class=\"invalid-feedback d-inline\"\n                    *ngIf=\"loginForm.get('email').touched && loginForm.get('email').invalid\">Email is mandatory</div>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field>\n                    <input matInput placeholder=\"password\" type=\"password\" formControlName=\"password\" />\n                </mat-form-field>\n                <div class=\"invalid-feedback d-inline\"\n                    *ngIf=\"loginForm.get('password').touched && loginForm.get('password').invalid\">Password is mandatory\n                </div>\n\n            </div>\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-sm btn-primary\" style=\"float: left\">Login</button> &nbsp;\n                <button type=\"button\" class=\"btn  btn-sm btn-success\" style=\"float: right\">Gmail</button>\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" style=\"float: right\"> Facebook</button><br><br>\n                <a><u>Forgot password</u></a>&nbsp; <a data-toggle=\"modal\"\n                    data-target=\"#registerModal\"><u>Register</u></a>\n\n            </div>\n\n\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/loginmodal/loginmodal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/loginmodal/loginmodal.component.ts ***!
  \****************************************************/
/*! exports provided: LoginmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginmodalComponent", function() { return LoginmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let LoginmodalComponent = class LoginmodalComponent {
    constructor(registerService, router, globals, _snackBar) {
        this.registerService = registerService;
        this.router = router;
        this.globals = globals;
        this._snackBar = _snackBar;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    login() {
        console.log(this.loginForm.value);
        this.registerService.login(this.loginForm.value).subscribe(data => {
            this.setSuccess(data);
        }, error => {
            console.log(error);
            this.setError(error);
        });
    }
    setSuccess(data) {
        console.log(data);
        if (data.detail == "Wrong Password.") {
            this.openSnackBar("Invalid User ID or Password", "Try Again");
            return;
        }
        else {
            $("#loginModal").modal('hide');
            this.globals.token = data.token;
            this.globals.userId = data.userId;
            this.globals.email = data.email;
            this.globals.Authorization = data.token;
            this.router.navigate(['/home']);
        }
    }
    setError(data) {
        console.log("Error Occured" + data.error);
        //this.loginForm.setErrors({invalidLogin:true});
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
LoginmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loginmodal',
        template: __webpack_require__(/*! ./loginmodal.component.html */ "./src/app/loginmodal/loginmodal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./loginmodal.component.css */ "./src/app/loginmodal/loginmodal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_Globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], LoginmodalComponent);



/***/ }),

/***/ "./src/app/master-drop-downs.service.ts":
/*!**********************************************!*\
  !*** ./src/app/master-drop-downs.service.ts ***!
  \**********************************************/
/*! exports provided: MasterDropDownsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDropDownsService", function() { return MasterDropDownsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/service-urls */ "./src/app/common/service-urls.ts");




let MasterDropDownsService = class MasterDropDownsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _common_service_urls__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
        //httpHeaders=new HttpHeaders({'Content-Type':'application/json'});
        this.httpHeaders = _common_service_urls__WEBPACK_IMPORTED_MODULE_3__["httpHeaders"];
    }
    getLanguages(masterTable) {
        // debugger;
        return this.http.get(this.baseUrl + '/' + masterTable + '/', { headers: this.httpHeaders });
    }
};
MasterDropDownsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MasterDropDownsService);



/***/ }),

/***/ "./src/app/navbar-footer/navbar-footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/navbar-footer/navbar-footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci1mb290ZXIvbmF2YmFyLWZvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navbar-footer/navbar-footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/navbar-footer/navbar-footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"row \">\n        <div class=\"col-sm-3 \">\n            <span class=\"w-t\">About Us!</span><br>\n            <span class=\"w-t\"><a href=\"#\"></a>Pro Career Limited<a></a></span>\n        </div>\n        <div class=\"col-sm-3 \">\n            <span class=\"w-t\">Our Products</span><br>\n            <span class=\"w-t\"><a href=\"#\"></a>Pro Career Limited<a></a></span>\n        </div>\n       \n\n    </div>\n    <hr>\n   <!-- <div class=\"container text-center\">\n        <span class=\"text-muted\"><i class=\"material-icons md-light md-18\">copyright</i> Pro Career</span>\n    </div>-->\n</footer>"

/***/ }),

/***/ "./src/app/navbar-footer/navbar-footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/navbar-footer/navbar-footer.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarFooterComponent", function() { return NavbarFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarFooterComponent = class NavbarFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-footer',
        template: __webpack_require__(/*! ./navbar-footer.component.html */ "./src/app/navbar-footer/navbar-footer.component.html"),
        styles: [__webpack_require__(/*! ./navbar-footer.component.css */ "./src/app/navbar-footer/navbar-footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarFooterComponent);



/***/ }),

/***/ "./src/app/navbar-header/navbar-header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/navbar-header/navbar-header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci1oZWFkZXIvbmF2YmFyLWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navbar-header/navbar-header.component.html":
/*!************************************************************!*\
  !*** ./src/app/navbar-header/navbar-header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <i class=\"material-icons md md-light md-48\">school</i>&nbsp;<a class=\"navbar-brand\" href=\"#\"> | Pro Career | <span style=\"font-size: 15px\">World of Porgrees</span></a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        </ul>\n            <a data-toggle=\"modal\" data-target=\"#loginModal\"><i class=\"material-icons md-light md-24\">perm_identity</i></a>&nbsp;\n             <a data-toggle=\"modal\" data-target=\"#registerModal\"><i class=\"material-icons md-light md-24\">create</i></a> | \n        \n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar-header/navbar-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/navbar-header/navbar-header.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarHeaderComponent", function() { return NavbarHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarHeaderComponent = class NavbarHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'navbar-header',
        template: __webpack_require__(/*! ./navbar-header.component.html */ "./src/app/navbar-header/navbar-header.component.html"),
        styles: [__webpack_require__(/*! ./navbar-header.component.css */ "./src/app/navbar-header/navbar-header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavbarHeaderComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  No Such u URL found\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/other/other.component.css":
/*!*******************************************!*\
  !*** ./src/app/other/other.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL290aGVyL290aGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/other/other.component.html":
/*!********************************************!*\
  !*** ./src/app/other/other.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"otherForm\" (ngSubmit)=\"submitData()\">\n        <mat-card class=\"mat-card-data-entry\">\n                <mat-card-header>\n        \n                    <!-- <mat-card-title>Shiba Inu</mat-card-title>\n                                    <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n                </mat-card-header>\n                <mat-card-content>\n            <div class=\"row\">\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Current Location\" formControlName='currentLocation'>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Prefered Location\" formControlName='preferredLocation'>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Current CTC\" formControlName='currentCTC'>\n                    </mat-form-field>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Expected CTC\" formControlName='expectedCTC'>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Interested Working Areas\"\n                            formControlName='intrestedWorkingArea'>\n                    </mat-form-field>\n                </div>\n            </div>\n        </mat-card-content>\n    <mat-card-actions>\n            <div class=\"text-center\">\n                    <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n        </mat-card-actions>\n    </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/other/other.component.ts":
/*!******************************************!*\
  !*** ./src/app/other/other.component.ts ***!
  \******************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let OtherComponent = class OtherComponent {
    constructor(fb, dataSubmitService, dataGetService, globals, _snackBar) {
        this.fb = fb;
        this.dataSubmitService = dataSubmitService;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.otherForm = this.fb.group({
            currentLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            preferredLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            expectedCTC: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            currentCTC: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            intrestedWorkingArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getData();
    }
    submitData() {
        console.log(this.otherForm.value);
        this.dataSubmitService.submitBasicData(this.otherForm.value).subscribe(data => {
            this.setSuccess(data);
            this.getData();
        }, error => {
            console.log(error);
            this.setError(error);
            this.getData();
        });
    }
    getData() {
        this.dataGetService.getBaiscInfo(this.otherForm.value.id).subscribe(data => {
            console.log(data);
            this.setBasicData(data);
        }, error => {
            this.globals.isBasicCreated = false;
            console.log(error);
        });
    }
    setBasicData(data) {
        this.globals.isBasicCreated = true;
        this.otherForm.patchValue(data);
    }
    setSuccess(data) {
        this.openSnackBar("Data submiteed successfully", "OK");
        console.log("Success");
        console.log(data);
    }
    setError(data) {
        console.log("Error Occured" + data.error);
        //  this.otherForm.setErrors({});
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'other',
        template: __webpack_require__(/*! ./other.component.html */ "./src/app/other/other.component.html"),
        styles: [__webpack_require__(/*! ./other.component.css */ "./src/app/other/other.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_submit_service__WEBPACK_IMPORTED_MODULE_3__["DataSubmitService"],
        _data_get_service__WEBPACK_IMPORTED_MODULE_5__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_4__["Globals"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], OtherComponent);



/***/ }),

/***/ "./src/app/output/output.component.css":
/*!*********************************************!*\
  !*** ./src/app/output/output.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dHB1dC9vdXRwdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/output/output.component.html":
/*!**********************************************!*\
  !*** ./src/app/output/output.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"resumeForm\" (ngSubmit)=\"downloadResume()\">\n    <mat-card class=\"mat-card-data-entry\">\n        <mat-card-header>\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"row\">\n                <div class=\"col-sm-12 \">\n                    <input type=\"text\" class=\"form-control\" formControlName='userId' hidden>\n                </div>\n                <div class=\"text-center col-sm-12 \">\n                      \n                    <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                        class=\"mat-raised-button mat-button-base mat-primary\">\n                        <span class=\"mat-button-wrapper\">Download Resume</span>\n                        <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                        <div class=\"mat-button-focus-overlay\"></div>\n                    </button>\n                    \n                </div>\n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n            \n        </mat-card-actions>\n    </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/output/output.component.ts":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let OutputComponent = class OutputComponent {
    constructor(fb, dataSubmitService, dataGetService, globals, _snackBar) {
        this.fb = fb;
        this.dataSubmitService = dataSubmitService;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.resumeForm = this.fb.group({
            userId: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    downloadResume() {
        //this.resumeForm.submit;
        this.dataSubmitService.generateResume(this.resumeForm.value).subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
};
OutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'output',
        template: __webpack_require__(/*! ./output.component.html */ "./src/app/output/output.component.html"),
        styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/output/output.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _data_submit_service__WEBPACK_IMPORTED_MODULE_4__["DataSubmitService"],
        _data_get_service__WEBPACK_IMPORTED_MODULE_5__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_3__["Globals"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], OutputComponent);



/***/ }),

/***/ "./src/app/personal-details/personal-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLWRldGFpbHMvcGVyc29uYWwtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/personal-details/personal-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"pForm\" (ngSubmit)=\"submitData()\">\n    <mat-card class=\"\">\n        <mat-card-header>\n\n            <!-- <mat-card-title>Shiba Inu</mat-card-title>\n                    <mat-card-subtitle>Dog Breed</mat-card-subtitle> -->\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"row\">\n                <input type=\"text\" placeholder=\"First Name\" formControlName='id' hidden=\"\" readonly>\n                <div class=\"form-group col-sm-2 \" [ngClass]=\"{'has-error': firstName.touched && firstName.invalid}\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"First Name\" formControlName='firstName'>\n                    </mat-form-field>\n                    <div *ngIf=\"firstName.touched && firstName.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.firstName}}\n                        <!-- <div *ngIf=\"firstName.errors.required\" >\n                            First Name is required\n                        </div>\n                        <div *ngIf=\"firstName.errors.minlength\"> \n                            Minimum 5 Characters\n                        </div> -->\n\n                    </div>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Last Name\" id='lastName' name=\"lastName\"\n                            formControlName='lastName'>\n                    </mat-form-field>\n\n                    <div *ngIf=\"lastName.touched && lastName.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.lastName}}\n                    </div>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Mobile No\" id=\"mobileNo\" formControlName='mobileNo'>\n                    </mat-form-field>\n\n                    <div *ngIf=\"mobileNo.touched && mobileNo.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.mobileNo}}\n                    </div>\n\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"number\" placeholder=\"Phone No\" id='phoneNo' name=\"phoneNo\"\n                            formControlName='phoneNo'>\n                    </mat-form-field>\n\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Email ID\" id='emailId' name=\"emailId\"\n                            formControlName='emailId' readonly>\n                    </mat-form-field>\n                    <div *ngIf=\"emailId.touched && emailId.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.emailId}}\n                    </div>\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <input matInput type=\"text\" placeholder=\"Alternate Email ID\" id='alterEmailId'\n                            name=\"alterEmailId\" formControlName='alterEmailId'>\n                    </mat-form-field>\n\n                </div>\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <!-- <input matInput type=\"date\" placeholder=\"DOB\" formControlName='dob'> -->\n\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"DOB\" formControlName='dob'>\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <div *ngIf=\"dob.touched && dob.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.dob}}\n                    </div>\n                </div>\n\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <mat-label>Nationality</mat-label>\n                        <mat-select matInput formControlName='nationality'>\n                            <mat-option value=\"null\" selected>SELECT</mat-option>\n                            <mat-option *ngFor=\"let nationality of nationalityMaster\" [value]=\"nationality.mid\">\n                                {{nationality.mvalue}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <div *ngIf=\"nationality.touched && nationality.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.nationality}}\n                    </div>\n                </div>\n\n\n\n                <div class=\"form-group col-sm-2\">\n                    <mat-form-field>\n                        <mat-label>Status</mat-label>\n                        <mat-select id='maritalStatus' name=\"maritalStatus\" formControlName='maritalStatus'>\n                            <mat-option value=\"null\">SELECT</mat-option>\n                            <mat-option value=\"1\">Single</mat-option>\n                            <mat-option value=\"2\">Married</mat-option>\n                            <mat-option value=\"3\">Not to Disclosed</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n\n                    <div *ngIf=\"maritalStatus.touched && maritalStatus.invalid\" class=\"invalid-feedback d-inline \">\n                        {{formErrors.maritalStatus}}\n                    </div>\n                </div>\n\n\n            </div>\n            <div class=\"row card\" formArrayName=\"user_languages\">\n\n                <div *ngFor=\"let lang of languages.controls; let i=index\" class=\"col-sm-12\">\n                    <hr>\n                    <div class=\"row\" [formGroupName]=\"i\">\n\n                        <input type=\"text\" formControlName='userId' hidden>\n                        <div class=\"form-group col-sm-2\">\n                            <mat-form-field>\n                                <mat-label>Language {{i+1}}</mat-label>\n\n                                <mat-select type=\"text\" [id]=\"'languageId'+i\" formControlName='languageId'>\n                                    <mat-option value=\"null\" selected>SELECT</mat-option>\n                                    <mat-option *ngFor=\"let language of languageMaster\" [value]=\"language.mid\">\n                                        {{language.mvalue}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n\n                            <div *ngIf=\"lang.controls.languageId.invalid && lang.controls.languageId.touched\"\n                                class=\"invalid-feedback d-inline \">\n                                Language is required\n                            </div>\n\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n\n                            <mat-checkbox type=\"checkbox\" value=\"mat-option1\" formControlName='canSpeak'>Speak\n                            </mat-checkbox>\n\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <mat-checkbox type=\"checkbox\" [id]=\"'inlineCheckbox2'+i\" value=\"option2\"\n                                formControlName='canRead'>Read</mat-checkbox>\n\n                        </div>\n                        <div class=\"form-check form-check-inline\">\n                            <mat-checkbox type=\"checkbox\" [id]=\"'inlineCheckbox3'+i\" value=\"option3\"\n                                formControlName='canWrite'>Write</mat-checkbox>\n\n                        </div>\n                        <div class=\"col-sm-3\" *ngIf='i>0'>\n                            <button (click)=\"removeNewLanguage(i)\" color=\"warn\" mat-icon-button=\"\"\n                                class=\"mat-icon-button mat-button-base mat-warn\"><span class=\"mat-button-wrapper\">\n                                    <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                        aria-hidden=\"true\">delete</mat-icon>\n                                </span>\n                                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                                <div class=\"mat-button-focus-overlay\"></div>\n                            </button>\n\n                        </div>\n\n\n                    </div>\n\n                    <hr>\n                </div>\n                <div>\n                    <button type=\"button\" (click)=\"addNewLanguage()\" color=\"primary\" mat-icon-button=\"\"\n                        class=\"mat-icon-button mat-button-base mat-primary\"><span class=\"mat-button-wrapper\"\n                            title=\"Add Language\">\n                            <mat-icon class=\"mat-icon notranslate material-icons mat-icon-no-color\" role=\"img\"\n                                aria-hidden=\"true\">add_box</mat-icon>\n                        </span>\n                        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\n                        <div class=\"mat-button-focus-overlay\"></div>\n                    </button>\n                </div>\n\n            </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <div class=\"text-center\">\n                <button type=\"submit\" color=\"primary\" mat-raised-button=\"\"\n                    class=\"mat-raised-button mat-button-base mat-primary\">\n                    <span class=\"mat-button-wrapper\">Save</span>\n                    <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n                    <div class=\"mat-button-focus-overlay\"></div>\n                </button>\n            </div>\n        </mat-card-actions>\n\n\n\n       </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/personal-details/personal-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/personal-details/personal-details.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function() { return PersonalDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_submit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-submit.service */ "./src/app/data-submit.service.ts");
/* harmony import */ var _master_drop_downs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-drop-downs.service */ "./src/app/master-drop-downs.service.ts");
/* harmony import */ var _data_get_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-get.service */ "./src/app/data-get.service.ts");
/* harmony import */ var _common_Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Globals */ "./src/app/common/Globals.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _common_format_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/format-datepicker */ "./src/app/common/format-datepicker.ts");
/* harmony import */ var _common_common_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/common-utility */ "./src/app/common/common-utility.ts");










let PersonalDetailsComponent = class PersonalDetailsComponent {
    constructor(dataSubmitService, fb, masterDpDn, dataGetService, globals, _utils) {
        this.dataSubmitService = dataSubmitService;
        this.fb = fb;
        this.masterDpDn = masterDpDn;
        this.dataGetService = dataGetService;
        this.globals = globals;
        this._utils = _utils;
        this.formErrors = {};
        this.validationMessages = {
            'firstName': {
                'required': 'First Name is required',
                'minlength': 'Minumum length is 5 charecters'
            },
            'lastName': {
                'required': 'Last Name is required',
                'minlength': 'Minumum length is 5 charecters'
            },
            'mobileNo': {
                'required': 'Mobile No is required',
                'minlength': 'Minumum length is 10 charecters'
            },
            'phoneNo': '',
            'emailId': {
                'required': 'Email is required',
                'minlength': 'Minumum length is 5 charecters',
                'email': 'Email id is invalid'
            },
            'alterEmailId': {
                'email': 'Email id is invalid'
            },
            'dob': {
                'required': 'DOB is required',
            },
            'nationality': {
                'required': 'Nationality is required'
            },
            'maritalStatus': {
                'required': 'Mariital is required',
            },
            'id': {
                'required': 'User ID is required',
            }
        };
        this.APP_DATE_FORMATS = {
            parse: {
                dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
            },
            display: {
                dateInput: 'input',
                monthYearLabel: { year: 'numeric', month: 'numeric' },
                dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric'
                },
                monthYearA11yLabel: { year: 'numeric', month: 'long' },
            }
        };
    }
    ngOnInit() {
        this.getLanguages();
        this.getNationalityMaster();
        this.pForm = this.cretaePform();
        this.pForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.pForm);
            console.log(this.formErrors);
        });
        const controlArray = this.pForm.get('user_languages');
        this.getData();
    }
    cretaePform() {
        return this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            phoneNo: ['',],
            emailId: [this.globals.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            alterEmailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            dob: ['2019-01-01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nationality: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maritalStatus: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            id: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user_languages: this.fb.array([this.addLanguage()]),
        });
    }
    logValidationErrors(group) {
        Object.keys(group.controls).forEach((key) => {
            const abstarctControl = group.get(key);
            this.formErrors[key] = '';
            if (abstarctControl && !abstarctControl.valid &&
                abstarctControl.touched || abstarctControl.dirty) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstarctControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
        });
    }
    getLanguages() {
        this.masterDpDn.getLanguages('master_language').subscribe(data => { this.languageMaster = data; }, error => { console.log(error); });
    }
    getNationalityMaster() {
        this.masterDpDn.getLanguages('master_nationality').subscribe(data => { this.nationalityMaster = data; }, error => { console.log(error); });
    }
    addLanguage() {
        return this.fb.group({
            userId: [this.globals.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            languageId: ['null', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            canSpeak: false,
            canRead: false,
            canWrite: false,
        });
    }
    createCheckBoxes() {
        return this.fb.group({
            canSpeak: '',
            canRead: '',
            canWrite: ''
        });
    }
    addNewLanguage() {
        this.languages.push(this.addLanguage());
    }
    removeNewLanguage(index) {
        this.pForm.get('user_languages').removeAt(index);
    }
    getData() {
        this.dataGetService.getPinfoData(this.pForm.value.id).subscribe(data => {
            console.log(data);
            this.setPinfoData(data);
        }, error => {
            console.log(error);
        });
    }
    setPinfoData(data) {
        // for (let i = 1; i < data.user_languages.length; i++){
        //     this.languages.push(this.languages);
        //   }
        this.pForm.patchValue(data);
    }
    submitData() {
        console.log(this.pForm.value);
        this.dataSubmitService.submitPersoanlData(this.pForm.value).subscribe(data => {
            this.setSuccess(data);
            //this.submitLangData()
        }, error => {
            console.log(error);
            this.setError(error);
        });
        //this.submitLangData();
    }
    // submitLangData() {
    //     console.log(this.pForm.value.user_languages)
    //     console.log(this.pForm.value);
    //     this.dataSubmitService.submitLangData(this.pForm.value.user_languages).subscribe(
    //         data => { this.setSuccess(data) },
    //         error => {
    //             console.log(error);
    //             this.setError(error)
    //         });
    // }
    setSuccess(data) {
        this._utils.openSnackBar("Data submitted successfully", "OK");
        console.log("Success");
        //this.pForm.patchValue(data);
    }
    setError(data) {
        console.log("Error Occured" + data.error);
        this.pForm.setErrors({ invalidLogin: true });
    }
    get languages() {
        return this.pForm.get('user_languages');
    }
    get firstName() {
        return this.pForm.get('firstName');
    }
    get lastName() {
        return this.pForm.get('lastName');
    }
    get mobileNo() {
        return this.pForm.get('mobileNo');
    }
    get phoneNo() {
        return this.pForm.get('phoneNo');
    }
    get emailId() {
        return this.pForm.get('emailId');
    }
    get alterEmailId() {
        return this.pForm.get('alterEmailId');
    }
    get dob() {
        return this.pForm.get('dob');
    }
    get nationality() {
        return this.pForm.get('nationality');
    }
    get maritalStatus() {
        return this.pForm.get('maritalStatus');
    }
    get languageId() {
        return this.pForm.get('languageId');
    }
    format(date, displayFormat) {
        if (displayFormat === 'input') {
            let day = date.getDate().toString();
            day = +day < 10 ? '0' + day : day;
            let month = (date.getMonth() + 1).toString();
            month = +month < 10 ? '0' + month : month;
            let year = date.getFullYear();
            return `${day}-${month}-${year}`;
        }
        return date.toDateString();
    }
};
PersonalDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'personal-details',
        template: __webpack_require__(/*! ./personal-details.component.html */ "./src/app/personal-details/personal-details.component.html"),
        providers: [
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _common_format_datepicker__WEBPACK_IMPORTED_MODULE_8__["AppDateAdapter"] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: _common_format_datepicker__WEBPACK_IMPORTED_MODULE_8__["APP_DATE_FORMATS"] }
        ],
        styles: [__webpack_require__(/*! ./personal-details.component.css */ "./src/app/personal-details/personal-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_submit_service__WEBPACK_IMPORTED_MODULE_3__["DataSubmitService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _master_drop_downs_service__WEBPACK_IMPORTED_MODULE_4__["MasterDropDownsService"], _data_get_service__WEBPACK_IMPORTED_MODULE_5__["DataGetService"], _common_Globals__WEBPACK_IMPORTED_MODULE_6__["Globals"], _common_common_utility__WEBPACK_IMPORTED_MODULE_9__["CommonUtility"]])
], PersonalDetailsComponent);



/***/ }),

/***/ "./src/app/pre-login/pre-login.component.css":
/*!***************************************************!*\
  !*** ./src/app/pre-login/pre-login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZS1sb2dpbi9wcmUtbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pre-login/pre-login.component.html":
/*!****************************************************!*\
  !*** ./src/app/pre-login/pre-login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar-header></navbar-header>\n\n<div class=\"m-1 p-1 row\">\n    <div class=\"col-sm-4\">\n        <div class=\"card bg-light \">\n            <!-- <div class=\"card-header\">Header</div>-->\n            <div class=\"custom-card-body card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let post of posts\">\n                        <a>  {{ post.title }}</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-footer\"><a>Career news</a></div>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n        <div class=\"card bg-light \">\n            <!-- <div class=\"card-header\">Header</div>-->\n            <div class=\"custom-card-body card-body\">\n                <h5 class=\"card-title\">Light card title</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n            <div class=\"card-footer\"><a>MCQ</a></div>\n        </div>\n    </div>\n    <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"card bg-light \">\n            <!-- <div class=\"card-header\">Header</div>-->\n            <div class=\"custom-card-body card-body\">\n                <!-- <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let movie of movies\">\n                        <a>  {{ movie.title }}</a>\n                    </li>\n                </ul>-->\n            </div>\n            <div class=\"card-footer\"><a>Google adds!</a></div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"m-1 p-1 row\">\n    <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"card bg-light \">\n            <!-- <div class=\"card-header\">Header</div>-->\n            <div class=\"custom-card-body card-body\">\n                <h5 class=\"card-title\">Light card title</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            </div>\n            <div class=\"card-footer\"><a>Thought of the Day</a></div>\n        </div>\n    </div>\n    <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"card bg-light \">\n            <!-- <div class=\"card-header\">Header</div>-->\n            <div class=\"custom-card-body card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let recruiter of recruiters\">\n                        <i class=\"material-icons\">computer</i> &nbsp;<a>  {{ recruiter.title }}</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-footer\"><a>{{ recruiterList }}</a></div>\n        </div>\n    </div>\n    <div class=\"col-sm-4 col-xs-6\">\n        <div class=\"card bg-light \">\n            <!-- <div class=\"card-header\">Header</div>-->\n            <div class=\"custom-card-body card-body\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let recruiter of recruiters\">\n                        <a> &nbsp;{{ recruiter.title }} - <i class=\"\">{{recruiter.jobs}}</i></a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card-footer\"><a>{{jobOfferings}}</a></div>\n        </div>\n    </div>\n\n\n    <!-- Login Modal -->\n    <div class=\"modal fade \" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"col-sm-12 \">\n                        <loginmodal></loginmodal>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Register Modal -->\n    <div class=\"modal fade \" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Register</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"col-sm-12 \">\n\n                        <app-register></app-register>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pre-login/pre-login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pre-login/pre-login.component.ts ***!
  \**************************************************/
/*! exports provided: PreLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoginComponent", function() { return PreLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _check_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check-user.service */ "./src/app/check-user.service.ts");



let PreLoginComponent = class PreLoginComponent {
    constructor(service) {
        this.service = service;
        this.recruiterList = "List of recruiters";
        this.mcq = "MCQ";
        this.jobOfferings = "Job Availability";
        this.getPosts = () => {
            this.service.getPosts().subscribe(data => { this.posts = data; }, error => { console.log("Server Error : " + error); });
        };
        this.getRecruiters = () => {
            this.service.getMovies().subscribe(data => { this.recruiters = data; }, error => { console.log("Server Error : " + error); });
        };
        //this.recruiters=service.getListOfRecruiters();
        //this.getRecruiters();
        //this.getPosts();
    }
};
PreLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pre-login',
        template: __webpack_require__(/*! ./pre-login.component.html */ "./src/app/pre-login/pre-login.component.html"),
        providers: [_check_user_service__WEBPACK_IMPORTED_MODULE_2__["CheckUserService"]],
        styles: [__webpack_require__(/*! ./pre-login.component.css */ "./src/app/pre-login/pre-login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_check_user_service__WEBPACK_IMPORTED_MODULE_2__["CheckUserService"]])
], PreLoginComponent);



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_service_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/service-urls */ "./src/app/common/service-urls.ts");






let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
        //baseUrl="http://http://100.83.14.249:8000";
        this.baseUrl = _common_service_urls__WEBPACK_IMPORTED_MODULE_5__["baseUrl"];
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.data = [{ "title": "Lion king" }];
    }
    registerUser(userData) {
        return this.http.post(this.baseUrl + '/users/', userData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    login(userData) {
        return this.http.post(this.baseUrl + '/login/', userData, { headers: this.httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.log(error);
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            errorMessage = error.error;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegisterService);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n            <div class=\"invalid-feedback d-inline \" *ngIf=\"registerForm.errors\">Form has one or more errors</div>\n            <div *ngFor=\"let item of errorData | keyvalue\">\n                <div class=\"invalid-feedback d-inline \">\n                    Eroor: {{item.key}} : {{item.value}}\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput required placeholder=\"email\" id=\"email\" type=\"text\" formControlName=\"email\" />\n                </mat-form-field>\n                <div class=\"invalid-feedback d-inline\" *ngIf=\"email.touched && email.invalid\">\n                    {{formErrors.email}}\n                </div>\n            </div>\n\n            <div class=\"form-group none\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput required placeholder=\"user name\" type=\"text\" formControlName=\"username\"\n                        [value]=\"email.value\" />\n                </mat-form-field>\n                <div class=\"invalid-feedback d-inline\" *ngIf=\"username.touched && username.invalid\">\n                    {{formErrors.username}}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput required placeholder=\"password\" type=\"password\" formControlName=\"password\" />\n                </mat-form-field>\n                <div class=\"invalid-feedback d-inline \" *ngIf=\"password.touched && password.invalid\">\n                    {{formErrors.password}}\n                </div>\n\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput name=\"password\" placeholder=\"confirm password\" id=\"confirmPassword\" type=\"password\"\n                        formControlName=\"confirmPassword\" />\n                </mat-form-field>\n                <div class=\"invalid-feedback d-inline \" *ngIf=\"confirmPassword.touched && confirmPassword.invalid\">\n                        {{formErrors.confirmPassword}}\n                </div>\n            </div>\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-sm btn-primary\" style=\"float: left\"> Let me in </button> &nbsp;\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(registerService) {
        this.registerService = registerService;
        this.sucRegister = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "username": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            "confirmPassword": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
        });
        this.validationMessages = {
            'username': {
                'required': 'User Name is required',
                'minlength': 'Minumum length is 5 charecters'
            },
            'email': {
                'required': 'Email is required',
                'email': 'Email id is invalid'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Minumum length is 8 charecters'
            },
            'confirmPassword': {
                'required': 'Confirm Password is required',
                'minlength': 'Minumum length is 8 charecters'
            },
        };
        this.formErrors = {};
    }
    ngOnInit() {
        this.registerForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.registerForm);
            console.log(this.formErrors);
        });
    }
    get username() {
        return this.registerForm.get('username');
    }
    get email() {
        return this.registerForm.get('email');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get confirmPassword() {
        return this.registerForm.get('confirmPassword');
    }
    register() {
        this.logValidationErrors(this.registerForm);
        if (this.registerForm.valid) {
            console.log(this.registerForm.value);
            this.registerService.registerUser(this.registerForm.value).subscribe(data => { this.setSuccess(data); }, error => { console.log(error); this.setError(error); });
        }
        else {
            this.logValidationErrors(this.registerForm);
        }
    }
    setSuccess(data) {
        console.log(data);
        this.sucRegister = true;
        alert("Registration Successfull, please check your mail");
        this.registerForm.reset();
        this.formErrors = "";
        //this.logValidationErrors(this.registerForm);
    }
    setError(data) {
        console.log("Error Occured" + data);
        this.errorData = data;
    }
    sucRegisters() {
        return this.sucRegister;
    }
    logValidationErrors(group) {
        Object.keys(group.controls).forEach((key) => {
            const abstarctControl = group.get(key);
            this.formErrors[key] = '';
            if (abstarctControl && !abstarctControl.valid && abstarctControl.dirty) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstarctControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
        });
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular Development\new-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map