import{a as x,b as ne}from"./chunk-BUYPTPHH.js";import"./chunk-GHHRZ5QT.js";import{a as re}from"./chunk-ZYCDTQGM.js";import{a as pe,b as v,c as ce,d as me,e as O,g as C,i as ae,j as se,k as le,l as de,m as ue,n as fe,s as ve,u as L}from"./chunk-TKH6U2ER.js";import{$ as j,Aa as oe,C as y,Ea as P,F as R,G as m,H as u,M as b,O as l,Q as J,R as p,S as o,T as a,U as K,V as f,W as Q,X as T,aa as c,ba as _,ca as W,da as Y,fa as A,j as z,ja as Z,ka as w,m as X,s as d,t as N,ta as F,ua as ee,v as B,va as S,w as H,wa as te,xa as ie,y as k,z as M,za as I}from"./chunk-XCSCIBJ5.js";function be(t,e){if(t&1&&(p(0,"li",10),c(1),o()),t&2){let g=e.$implicit;m(),Y(" ",g.name," - ",g.amount," ")}}var we=t=>({show:t}),ge=(()=>{let e=class e{ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.recipe=this.recipeService.getRecipe(this.id)})}constructor(r,i,n){this.recipeService=r,this.route=i,this.router=n}onAddToShoppingList(){this.recipeService.addIngredientsToShopping(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["./recipes"])}};e.\u0275fac=function(i){return new(i||e)(u(x),u(F),u(S))},e.\u0275cmp=d({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:8,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"dropdown-center"],["drop","appDropDown"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"dropdown-menu",3,"ngClass"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){if(i&1&&(p(0,"div",0)(1,"div",1),a(2,"img",2),o()(),p(3,"div",0)(4,"div",1)(5,"h1"),c(6),o()()(),p(7,"div",0)(8,"div",1)(9,"div",3,4)(11,"button",5),c(12," Manage Recipe "),o(),p(13,"ul",6)(14,"li")(15,"a",7),f("click",function(){return n.onAddToShoppingList()}),c(16,"To Shopping List"),o()(),p(17,"li")(18,"a",7),f("click",function(){return n.onEditRecipe()}),c(19,"Edit Recipe"),o()(),p(20,"li")(21,"a",7),f("click",function(){return n.onDeleteRecipe()}),c(22,"Delete Recipe"),o()()()()()(),p(23,"div",0)(24,"div",1),c(25),o()(),p(26,"div",0)(27,"div",1)(28,"ul",8),b(29,be,2,2,"li",9),o()()()),i&2){let s=j(10);m(2),T("alt",n.recipe.name),l("src",n.recipe.imagePath,R),m(4),_(n.recipe.name),m(7),l("ngClass",A(6,we,s.isOpen)),m(12),W(" ",n.recipe.description," "),m(4),l("ngForOf",n.recipe.ingredients)}},dependencies:[oe,Z,w]});let t=e;return t})();function Fe(t,e){if(t&1){let g=K();p(0,"div",18)(1,"div",19),a(2,"input",20),o(),p(3,"div",21),a(4,"input",22),o(),p(5,"div",21)(6,"button",23),f("click",function(){let n=B(g).index,s=Q();return H(s.onDeleteIngredient(n))}),c(7,"X"),o()()()}if(t&2){let g=e.index;l("formGroupName",g)}}var q=(()=>{let e=class e{constructor(r,i,n){this.route=r,this.recipeService=i,this.router=n,this.editMode=!1}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.editMode=r.id!=null,this.initForm()})}initForm(){let r="",i="",n="",s=new ve([]);if(this.editMode){let E=this.recipeService.getRecipe(this.id);if(r=E.name,i=E.imagePath,n=E.description,E.ingredients)for(let $ of E.ingredients)s.push(new O({name:new C($.name,v.required),amount:new C($.amount,[v.required,v.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new O({name:new C(r,v.required),imagePath:new C(i,v.required),description:new C(n,v.required),ingredients:s})}get controls(){return this.recipeForm.get("ingredients").controls}onAddIngredient(){this.recipeForm.get("ingredients").push(new O({name:new C(null,v.required),amount:new C(null,[v.required,v.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}onDeleteIngredient(r){this.recipeForm.get("ingredients").removeAt(r)}};e.\u0275fac=function(i){return new(i||e)(u(F),u(x),u(S))},e.\u0275cmp=d({type:e,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",2,"margin-left","5px",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control",2,"margin-top","5px"],["for","imagePath"],["type","text","formControlName","imagePath","id","imagePath",1,"form-control",2,"margin-top","5px"],["imagePath",""],[1,"img-responsive",2,"max-height","200px","max-width","200px",3,"src"],["for","description"],["type","text","formControlName","description","id","description","rows","6",1,"form-control",2,"margin-top","5px"],[1,"row",2,"margin-top","10px"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-md-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-md-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(i,n){if(i&1&&(p(0,"div",0)(1,"div",1)(2,"form",2),f("ngSubmit",function(){return n.onSubmit()}),p(3,"div",0)(4,"div",1)(5,"button",3),c(6,"Save"),o(),p(7,"button",4),f("click",function(){return n.onCancel()}),c(8,"Cancel"),o()()(),p(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),c(13,"Name"),o(),a(14,"input",7),o()()(),p(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),c(19,"Image URL"),o(),a(20,"input",9,10),o()()(),p(22,"div",0)(23,"div",1),a(24,"img",11),o()(),p(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),c(29,"Description"),o(),a(30,"textarea",13),o()()(),p(31,"div",14)(32,"div",15),b(33,Fe,8,1,"div",16),a(34,"hr"),p(35,"div",0)(36,"div",1)(37,"button",17),f("click",function(){return n.onAddIngredient()}),c(38,"Add Ingredient"),o()()()()()()()()),i&2){let s=j(21);m(2),l("formGroup",n.recipeForm),m(3),l("disabled",!n.recipeForm.valid),m(19),l("src",s.value,R),m(9),l("ngForOf",n.controls)}},dependencies:[ae,pe,se,ce,me,le,fe,de,ue,w],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]});let t=e;return t})();var Ie=t=>[t],Se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:9,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],["alt","",2,"max-height","50px","max-width","70px",3,"src"]],template:function(i,n){i&1&&(p(0,"a",0)(1,"div",1)(2,"h4",2),c(3),o(),p(4,"p",3),c(5),o()(),p(6,"span",4),a(7,"img",5),o()()),i&2&&(l("routerLink",A(7,Ie,n.index)),m(3),_(n.recipe.name),m(2),_(n.recipe.description),m(2),J(n.recipe.name),T("src",n.recipe.imagePath,R))},dependencies:[te,ie]});let t=e;return t})();function _e(t,e){if(t&1&&a(0,"app-recipe-item",4),t&2){let g=e.$implicit,r=e.index;l("recipe",g)("index",r)}}var xe=(()=>{let e=class e{constructor(r,i,n){this.recipeService=r,this.router=i,this.route=n,console.log(this.recipes)}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(r=>{this.recipes=r}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(u(x),u(S),u(F))},e.\u0275cmp=d({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return n.onNewRecipe()}),c(3,"New Recipe"),o()()(),a(4,"hr"),p(5,"div",0)(6,"div",1),b(7,_e,1,2,"app-recipe-item",3),o()()),i&2&&(m(7),l("ngForOf",n.recipes))},dependencies:[w,Se]});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){i&1&&(p(0,"h3"),c(1,"Please select a recipe!"),o())}});let t=e;return t})();var ye=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){i&1&&(p(0,"div",0)(1,"div",1),a(2,"app-recipe-list"),o(),p(3,"div",2),a(4,"router-outlet"),o()())},dependencies:[ee,xe]});let t=e;return t})();var Re=(()=>{let e=class e{constructor(r,i){this.authService=r,this.router=i}canActivate(r,i){return this.authService.user.pipe(X(1),z(n=>{let s=!!n;return s?!0:this.router.createUrlTree(["/auth"])}))}};e.\u0275fac=function(i){return new(i||e)(y(re),y(S))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var V=(()=>{let e=class e{constructor(r,i){this.dataStorageService=r,this.recipeService=i}resolve(r,i){let n=this.recipeService.getRecipes();return n.length===0?this.dataStorageService.fetchRecipes():n}};e.\u0275fac=function(i){return new(i||e)(y(ne),y(x))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ne=[{path:"",component:ye,canActivate:[Re],children:[{path:"",component:Ce},{path:"new",component:q},{path:":id",component:ge,resolve:[V]},{path:":id/edit",component:q,resolve:[V]}]}],U=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=N({type:e}),e.\u0275inj=M({imports:[I.forChild(Ne),I]});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=N({type:e}),e.\u0275inj=M({imports:[I,L,U,P,I,L,U,P]});let t=e;return t})();export{ut as RecipesModule};