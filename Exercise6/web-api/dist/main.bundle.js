webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 5rem;\n  }\n.content {\n    padding: 3rem 1.5rem;\n    text-align: center;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workout_list_workout_list_component__ = __webpack_require__("../../../../../src/app/workout-list/workout-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_workout_edit_workout_component__ = __webpack_require__("../../../../../src/app/edit-workout/edit-workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_workout_exercise_list_exercise_list_component__ = __webpack_require__("../../../../../src/app/edit-workout/exercise-list/exercise-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_workout_exercise_form_exercise_form_component__ = __webpack_require__("../../../../../src/app/edit-workout/exercise-form/exercise-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__log_workout_log_workout_component__ = __webpack_require__("../../../../../src/app/log-workout/log-workout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workout_log_list_workout_log_list_component__ = __webpack_require__("../../../../../src/app/workout-log-list/workout-log-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















const appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__workout_list_workout_list_component__["a" /* WorkoutListComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_6__edit_workout_edit_workout_component__["a" /* EditWorkoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__edit_workout_edit_workout_component__["a" /* EditWorkoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'log-workout', component: __WEBPACK_IMPORTED_MODULE_11__log_workout_log_workout_component__["a" /* LogWorkoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'workout-logs', component: __WEBPACK_IMPORTED_MODULE_13__workout_log_list_workout_log_list_component__["a" /* WorkoutLogListComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__workout_list_workout_list_component__["a" /* WorkoutListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__edit_workout_edit_workout_component__["a" /* EditWorkoutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__edit_workout_exercise_list_exercise_list_component__["a" /* ExerciseListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__edit_workout_exercise_form_exercise_form_component__["a" /* ExerciseFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__log_workout_log_workout_component__["a" /* LogWorkoutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__workout_log_list_workout_log_list_component__["a" /* WorkoutLogListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10_app_services_db_service__["a" /* DbService */], __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_15_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */],
            __WEBPACK_IMPORTED_MODULE_18_app_services_auth_guard_service__["a" /* AuthGuardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/edit-workout/edit-workout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-workout/edit-workout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form [formGroup]=\"workoutForm\">\n      <h3 for=\"name\">Title</h3>\n      <input class=\"form-control\" formControlName=\"name\"/>\n      <div class=\"mt-5\"></div>\n      <app-exercise-list\n        [workoutForm]=\"workoutForm\" \n        [exercises]=\"workout.exercises\">        \n      </app-exercise-list>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!workoutForm.valid\" (click)=\"onSubmit()\">\n        Save workout\n      </button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-workout/edit-workout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditWorkoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let EditWorkoutComponent = 
// The structure of this component is heavily inspired from http://brophy.org/post/nested-reactive-forms-in-angular2/
class EditWorkoutComponent {
    constructor(_fb, route, dbService, router) {
        this._fb = _fb;
        this.route = route;
        this.dbService = dbService;
        this.router = router;
    }
    ngOnInit() {
        this.workout = { name: "", exercises: [] };
        this.workoutForm = this.toFormGroup(this.workout);
        this.route.params.subscribe(value => {
            // If value is null we need to create a new workout, not edit an existing one
            if (value.id != null) {
                // actually fetch the data from dbService.getWorkout instead
                this.workout = this.getWorkoutData(value.id);
                //this.workout = this.getWorkout(value.id)    
                this.workoutForm = this.toFormGroup(this.workout);
            }
        });
    }
    // Returns mock data, remove this at some point
    getWorkoutData(id) {
        let exercise1 = {
            name: "Squat",
            description: "Lift the damn weight",
            reps: "5",
            sets: 5,
        };
        let exercise2 = {
            name: "Bench press",
            description: "Push the damn weight",
            reps: "5",
            sets: 5,
        };
        let quickWorkout = { exercises: [], name: "Quick workout" };
        quickWorkout.exercises = [exercise1, exercise2];
        return quickWorkout;
    }
    toFormGroup(workout) {
        const formGroup = this._fb.group({
            name: [workout.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
        });
        return formGroup;
    }
    onSubmit() {
        if (!this.workoutForm.valid) {
            console.error("Form invalid");
            return false;
        }
        this.dbService.createWorkout(this.workoutForm.value);
        this.router.navigateByUrl("");
    }
};
EditWorkoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-workout',
        template: __webpack_require__("../../../../../src/app/edit-workout/edit-workout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-workout/edit-workout.component.css")]
    })
    // The structure of this component is heavily inspired from http://brophy.org/post/nested-reactive-forms-in-angular2/
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_db_service__["a" /* DbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EditWorkoutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-workout.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-workout/exercise-form/exercise-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-workout/exercise-form/exercise-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"exerciseForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"description\">\n  </div>\n  <div class=\"row\">\n      <div class=\"form-group col-xs-6\">\n          <label for=\"sets\">Sets</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"sets\">\n        </div>\n        <div class=\"form-group col-xs-6\">\n          <label for=\"reps\">Reps</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"reps\">\n        </div>\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-workout/exercise-form/exercise-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models_exercise__ = __webpack_require__("../../../../../src/models/exercise.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models_exercise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_models_exercise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ExerciseFormComponent = class ExerciseFormComponent {
    constructor(_fb) {
        this._fb = _fb;
    }
    ngOnInit() {
        this.exerciseForm = this.toFormGroup(this.exercise);
        this.exercises.push(this.exerciseForm);
    }
    toFormGroup(exercise) {
        const formGroup = this._fb.group({
            name: [exercise.name],
            description: [exercise.description],
            sets: [exercise.sets],
            reps: [exercise.reps]
        });
        return formGroup;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('exercises'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]) === "function" && _a || Object)
], ExerciseFormComponent.prototype, "exercises", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('exercise'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_models_exercise__["Exercise"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_models_exercise__["Exercise"]) === "function" && _b || Object)
], ExerciseFormComponent.prototype, "exercise", void 0);
ExerciseFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exercise-form',
        template: __webpack_require__("../../../../../src/app/edit-workout/exercise-form/exercise-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-workout/exercise-form/exercise-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object])
], ExerciseFormComponent);

var _a, _b, _c;
//# sourceMappingURL=exercise-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-workout/exercise-list/exercise-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-workout/exercise-list/exercise-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"workoutForm\">\n  <div formArrayName=\"exercises\">\n    <div *ngFor=\"let exercise of exercises; let i = index\">\n      <h4>Exercise {{i + 1}}</h4>\n      <app-exercise-form\n        [exercises]=\"workoutForm.controls.exercises\"\n        [exercise]=\"exercise\">        \n      </app-exercise-form>\n      <br>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary\"(click)=\"addExercise()\">Add exercise</button>"

/***/ }),

/***/ "../../../../../src/app/edit-workout/exercise-list/exercise-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ExerciseListComponent = class ExerciseListComponent {
    constructor(_cd) {
        this._cd = _cd;
    }
    ngOnInit() {
        this.workoutForm.addControl('exercises', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]));
    }
    addExercise() {
        const exercise = {
            name: '',
            description: '',
            sets: null,
            reps: ''
        };
        this.exercises.push(exercise);
        this._cd.detectChanges();
        return false;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('workoutForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]) === "function" && _a || Object)
], ExerciseListComponent.prototype, "workoutForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('exercises'),
    __metadata("design:type", Array)
], ExerciseListComponent.prototype, "exercises", void 0);
ExerciseListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exercise-list',
        template: __webpack_require__("../../../../../src/app/edit-workout/exercise-list/exercise-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-workout/exercise-list/exercise-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object])
], ExerciseListComponent);

var _a, _b;
//# sourceMappingURL=exercise-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/log-workout/log-workout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    width: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-workout/log-workout.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mx-auto\">Log workout activity</h1>\n<div class=\"container\">\n    <form [formGroup]=\"workoutLogForm\">\n      <h3 for=\"date\">Date</h3>\n      <input class=\"form-control\" type=\"date\" formControlName=\"date\"/>\n      <div class=\"mt-5\"></div>\n      <app-exercise-list\n        [workoutForm]=\"workoutLogForm\" \n        [exercises]=\"workoutLog.exercises\">        \n      </app-exercise-list>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!workoutLogForm.valid\" (click)=\"onSubmit()\">\n        Save workout log\n      </button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/log-workout/log-workout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogWorkoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LogWorkoutComponent = class LogWorkoutComponent {
    constructor(_fb, dbService, router) {
        this._fb = _fb;
        this.dbService = dbService;
        this.router = router;
    }
    ngOnInit() {
        this.workoutLog = { date: new Date().toLocaleString(), exercises: [] };
        this.workoutLogForm = this.toFormGroup(this.workoutLog);
        console.log(this.workoutLogForm);
    }
    toFormGroup(workoutLog) {
        const formGroup = this._fb.group({
            date: [workoutLog.date],
        });
        return formGroup;
    }
    onSubmit() {
        if (!this.workoutLogForm.valid) {
            console.error("Form invalid");
            return false;
        }
        this.dbService.createWorkoutLog(this.workoutLogForm.value);
        this.router.navigateByUrl("workout-logs");
    }
};
LogWorkoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-log-workout',
        template: __webpack_require__("../../../../../src/app/log-workout/log-workout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/log-workout/log-workout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_db_service__["a" /* DbService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogWorkoutComponent);

var _a, _b, _c;
//# sourceMappingURL=log-workout.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" required [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" id=\"password\" required [(ngModel)]=\"user.password\" class=\"form-control\" name=\"password\">\n    </div>\n    <div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.form.valid\">Login</button>\n    </div>\n  </form>\n  "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models_user__ = __webpack_require__("../../../../../src/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1_models_user__["a" /* User */]();
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.authService.login(this.user)) {
            this.router.navigate(['']);
        }
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <span class=\"h1\" class=\"navbar-brand mb-0\">Workout tracker</span>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"\">Workout programs</a>\n      <a class=\"nav-item nav-link\" href=\"workout-logs\">Workout logs</a>\n      <a class=\"nav-item nav-link\" href=\"register\">Register</a>\n      <a class=\"nav-item nav-link\" href=\"login\">Login</a>\n      <button class=\"nav-item\" (click)=\"logout()\">Logout</button>\n    </div>    \n  </div>\n</nav>\n<!-- <h3 *ngIf=\"isLoggedIn()\">Logged in as {{name}}</h3> -->"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NavbarComponent = class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.name = "";
    }
    ngOnInit() {
    }
    isLoggedIn() {
        if (this.authService.isLoggedIn()) {
            this.name = this.authService.currentUser().name;
            return false;
        }
        else
            return false;
    }
    logout() {
        this.authService.logout();
    }
};
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"name\" >Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"user.name\" name=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" required [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" required [(ngModel)]=\"user.password\" class=\"form-control\" name=\"password\">\n  </div>\n  <div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.form.valid\">Register</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models_user__ = __webpack_require__("../../../../../src/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1_models_user__["a" /* User */]();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.register(this.user);
        this.router.navigate(['']);
    }
};
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__ = __webpack_require__("../../../../../src/app/services/auth-interceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
};
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_auth_interceptor_service__["a" /* AuthInterceptorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models_user__ = __webpack_require__("../../../../../src/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Service is mostly stolen from PER's slides from ITWEB lecture 12
let AuthInterceptorService = class AuthInterceptorService {
    constructor(dbService, http) {
        this.dbService = dbService;
        this.http = http;
    }
    intercept(req, next) {
        const authHeader = 'Bearer ' + this.getToken();
        const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        return next.handle(authReq);
    }
    setToken(token) {
        window.localStorage['loc8r-token'] = token;
    }
    getToken() {
        if (window.localStorage['loc8r-token']) {
            return window.localStorage['loc8r-token'];
        }
        else {
            return '';
        }
    }
    register(user) {
        const url = `${this.dbService.baseUrl}/register`;
        // Shoud be type AuthResponse
        this.http.post(url, user).subscribe(data => {
            this.setToken(data.token);
            return true;
        }, (err) => {
            if (err.error instanceof Error) {
                // clientside network error
                console.log("An error occured: ", err.error.message);
            }
            else {
                // backend unsuccessful response
                console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
            return false;
        });
    }
    login(user) {
        const url = `${this.dbService.baseUrl}/login`;
        this.http.post(url, user).subscribe(data => {
            this.setToken(data.token);
            return true;
        }, (err) => {
            if (err.error instanceof Error) {
                // clientside network error
                console.log("An error occured: ", err.error.message);
            }
            else {
                // backend unsuccessful response
                console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
            return false;
        });
    }
    logout() {
        window.localStorage['loc8r-token'] = "null";
    }
    isLoggedIn() {
        const token = this.getToken();
        if (token !== "null") {
            const payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    currentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const payload = JSON.parse(window.atob(token.split('.')[1]));
            const user = new __WEBPACK_IMPORTED_MODULE_1_models_user__["a" /* User */]();
            user.email = payload.email;
            user.name = payload.name;
            user.password = payload.password;
            return user;
        }
        else {
            return;
        }
    }
    addWorkoutById(data) {
        const url = `${this.dbService.baseUrl}/workouts`;
    }
};
AuthInterceptorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_db_service__["a" /* DbService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], AuthInterceptorService);

var _a, _b;
//# sourceMappingURL=auth-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DbService = class DbService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://polar-badlands-78608.herokuapp.com/api";
    }
    getAllWorkouts() {
        return this.http.get(this.baseUrl + '/workouts');
    }
    getWorkout(id) {
        return this.http.get(this.baseUrl + '/workout/' + id);
    }
    getAllWorkoutLogs() {
        return this.http.get(this.baseUrl + '/workoutLogs');
    }
    getWorkoutLog(id) {
        return this.http.get(this.baseUrl + '/workoutLog/' + id);
    }
    createWorkout(workout) {
        const req = this.http.post(this.baseUrl + '/createWorkout', workout);
        req.subscribe();
    }
    createWorkoutLog(workoutLog) {
        const req = this.http.post(this.baseUrl + '/createWorkoutLog', workoutLog);
        req.subscribe();
    }
};
DbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DbService);

var _a;
//# sourceMappingURL=db.service.js.map

/***/ }),

/***/ "../../../../../src/app/workout-list/workout-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workout-list/workout-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>All workout programs</h1>\n<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['edit']\">Create new workout</button>\n<h3 *ngIf=\"workouts.length < 1\">You currently have no workout programs</h3>\n\n<div class=\"container\">\n  <div *ngFor=\"let workout of workouts; let i = index\">\n    <div class=\"card\">\n          <h4>{{workout.name}}</h4>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Exercise</th>\n                <th>Description</th>\n                <th>Sets</th>\n                <th>Reps/time</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let exercise of workout.exercises; let j = index\">\n                <td>{{workout.exercises[j].name}}</td>\n                <td>{{workout.exercises[j].description}}</td>\n                <td>{{workout.exercises[j].sets}}</td>\n                <td>{{workout.exercises[j].reps}}</td>\n              </tr>\n              <!-- <tr>\n                <button class=\"btn btn-primary\" [routerLink]=\"['edit', i]\">Edit</button>\n              </tr> -->\n            </tbody>\n          </table>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/workout-list/workout-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let WorkoutListComponent = class WorkoutListComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.workouts = [];
        this.dbService.getAllWorkouts().subscribe(data => {
            this.workouts = data.workouts;
        });
        // Fetch data from server
        // this.workouts = this.dbService.getAllWorkouts()
        // Mock data
        // let exercise1: Exercise = {
        //   name: "Squat",
        //   description: "Lift the damn weight",
        //   reps: "5",
        //   sets: 5,
        // }
        // let exercise2: Exercise = {
        //   name: "Bench press",
        //   description: "Push the damn weight",
        //   reps: "5",
        //   sets: 5,
        // }
        // let quickWorkout: Workout = {exercises: [], name: "Quick workout"};
        // let anotherQuickWorkout: Workout = {exercises: [], name: "Another quick workout"};
        // quickWorkout.exercises = [exercise1, exercise2];
        // anotherQuickWorkout.exercises = [exercise1, exercise2]
        // this.workouts.push(quickWorkout, anotherQuickWorkout);
    }
    ngOnInit() {
    }
    createWorkout() {
    }
};
WorkoutListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-workout-list',
        template: __webpack_require__("../../../../../src/app/workout-list/workout-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workout-list/workout-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_db_service__["a" /* DbService */]) === "function" && _a || Object])
], WorkoutListComponent);

var _a;
//# sourceMappingURL=workout-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/workout-log-list/workout-log-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workout-log-list/workout-log-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Workout logs</h1>\n<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/log-workout']\">Log workout activity</button>\n<h3 *ngIf=\"!workoutLogs\">You currently have no workout activity logged</h3>\n<div *ngIf=\"workoutLogs\" class=\"container\">\n  <div *ngFor=\"let workoutLog of workoutLogs; let i = index\">\n    <div class=\"card\">\n          <h4>{{workoutLog.date}}</h4>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Exercise</th>\n                <th>Description</th>\n                <th>Sets</th>\n                <th>Reps/time</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let exercise of workoutLog.exercises; let j = index\">\n                <td>{{workoutLog.exercises[j].name}}</td>\n                <td>{{workoutLog.exercises[j].description}}</td>\n                <td>{{workoutLog.exercises[j].sets}}</td>\n                <td>{{workoutLog.exercises[j].reps}}</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/workout-log-list/workout-log-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutLogListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_db_service__ = __webpack_require__("../../../../../src/app/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let WorkoutLogListComponent = class WorkoutLogListComponent {
    constructor(dbService) {
        this.dbService = dbService;
        dbService.getAllWorkoutLogs().subscribe(data => {
            this.workoutLogs = data.workoutLogs;
        });
    }
    ngOnInit() {
    }
};
WorkoutLogListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-workout-log-list',
        template: __webpack_require__("../../../../../src/app/workout-log-list/workout-log-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/workout-log-list/workout-log-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_db_service__["a" /* DbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_db_service__["a" /* DbService */]) === "function" && _a || Object])
], WorkoutLogListComponent);

var _a;
//# sourceMappingURL=workout-log-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/models/exercise.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ "../../../../../src/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class User {
    constructor() {
        this.name = "";
        this.email = "";
        this.password = "";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map