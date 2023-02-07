"use strict";(self.webpackChunkbh_page_view=self.webpackChunkbh_page_view||[]).push([[389],{389:(C,o,r)=>{r.r(o),r.d(o,{ServicesModule:()=>f});var c=r(6895),a=r(4736);const v=[{id:"1",title:"services.corporate.title",label:"services.corporate.description",main:"services.corporate",childs:12},{id:"2",title:"services.commercial.title",label:"services.commercial.description",main:"services.commercial",childs:13},{id:"3",title:"services.labor.title",label:"services.labor.description",main:"services.labor",childs:9},{id:"4",title:"services.property.title",label:"services.property.description",main:"services.property",childs:10},{id:"5",title:"services.defense.title",label:"services.defense.description",main:"services.defense",childs:8},{id:"6",title:"services.immigration.title",label:"services.immigration.description",main:"services.immigration",childs:15},{id:"7",title:"services.training.title",label:"services.training.description",main:"services.training",childs:0}];var e=r(8256),l=r(4745);let m=(()=>{class i{constructor(){}ngOnInit(){}getMainText(t){const s=t.split(" ");return[s[0],s.slice(1).join(" ")]}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["bh-services-main"]],decls:13,vars:9,consts:[[1,"bh-services-main-container"],[1,"bh-services-main-text"],[1,"bh-services-main-text--small"],[1,"bh-services-main-text--bigger"],[1,"bh-services-main-text__first-letter"],[1,"bh-services-main"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"bhTranslate"),e.qZA(),e.TgZ(5,"div",3)(6,"span",4),e._uU(7),e.ALo(8,"bhTranslate"),e.qZA(),e.TgZ(9,"span"),e._uU(10),e.ALo(11,"bhTranslate"),e.qZA()()(),e._UZ(12,"div",5),e.qZA()),2&t&&(e.xp6(3),e.hij(" ",s.getMainText(e.lcZ(4,3,"services.phrase"))[1]," "),e.xp6(4),e.hij(" ",s.getMainText(e.lcZ(8,5,"services.phrase"))[0].charAt(0)," "),e.xp6(3),e.hij(" ",s.getMainText(e.lcZ(11,7,"services.phrase"))[0].slice(1)," "))},dependencies:[l.T],styles:[".bh-services-main[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:var(--color-tertiary-glass-light);background:url(services.848179ccf5b5f2ee.jpg) no-repeat;background-size:cover;opacity:.8}.bh-services-main-container[_ngcontent-%COMP%]{position:relative}.bh-services-main-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-shadow:0 1px 4px var(--color-text-dark);z-index:2;font-family:var(--font-family-primary)}.bh-services-main-text--bigger[_ngcontent-%COMP%]{font-size:4rem}.bh-services-main-text--bigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-primary)}.bh-services-main-text--small[_ngcontent-%COMP%]{font-size:1.1rem;letter-spacing:.3rem;position:absolute;top:8rem;left:6.3rem;color:var(--color-tertiary-dark);text-transform:uppercase}.bh-services-main-text__first-letter[_ngcontent-%COMP%]{letter-spacing:-1.5rem;font-size:12rem}@media (max-width: 600px){.bh-services-main-text__first-letter[_ngcontent-%COMP%]{letter-spacing:-20px;font-size:7rem}.bh-services-main-text--bigger[_ngcontent-%COMP%]{font-size:2rem;display:flex;align-items:baseline}.bh-services-main-text--small[_ngcontent-%COMP%]{font-size:.3rem;top:5.5rem;left:3.7rem}}@media (min-width: 601px) and (max-width: 1024px){.bh-services-main-text--bigger[_ngcontent-%COMP%]{font-size:3rem}.bh-services-main-text--small[_ngcontent-%COMP%]{top:9rem;font-size:.7rem}}@media (max-width: 600px){.bh-services-main[_ngcontent-%COMP%]{background-position:center}}"]}),i})();function p(i,n){if(1&i&&(e.TgZ(0,"li"),e._uU(1),e.ALo(2,"bhTranslate"),e.qZA()),2&i){const t=n.index,s=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,1,s.getService(t))," ")}}let d=(()=>{class i{constructor(){}get child(){return new Array(this.service.childs)}ngOnInit(){}getService(t){return`${this.service.main}.${t+1}`}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["bh-service"]],inputs:{service:"service",isEven:"isEven",isOdd:"isOdd"},decls:9,vars:11,consts:[[1,"bh-service"],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.ALo(3,"bhTranslate"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.ALo(6,"bhTranslate"),e.qZA(),e.TgZ(7,"ul"),e.YNc(8,p,3,3,"li",1),e.qZA()()),2&t&&(e.ekj("odd",s.isOdd)("even",s.isEven),e.xp6(2),e.Oqu(e.lcZ(3,7,s.service.title)),e.xp6(3),e.Oqu(e.lcZ(6,9,s.service.label)),e.xp6(3),e.Q6J("ngForOf",s.child))},dependencies:[c.sg,l.T],styles:[".bh-service[_ngcontent-%COMP%]{padding:10px 20px}.bh-service.odd[_ngcontent-%COMP%]{background-color:var(--color-tertiary-glass-dark);color:var(--color-text-light)}.bh-service.even[_ngcontent-%COMP%]{background-color:var(--color-secondary-glass-dark);color:var(--color-primary-dark)}"]}),i})();function g(i,n){if(1&i&&e._UZ(0,"bh-service",3),2&i){const s=n.even,x=n.odd;e.Q6J("service",n.$implicit)("isEven",s)("isOdd",x)}}const h=[{path:"",component:(()=>{class i{constructor(){this.services=v}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["bh-service-page"]],decls:4,vars:1,consts:[[1,"bh-service-page"],[1,"bh-services"],[3,"service","isEven","isOdd",4,"ngFor","ngForOf"],[3,"service","isEven","isOdd"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"bh-services-main"),e.TgZ(2,"div",1),e.YNc(3,g,1,3,"bh-service",2),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngForOf",s.services))},dependencies:[c.sg,m,d]}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(h),a.Bz]}),i})();var u=r(8642);let f=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,b,u.y]}),i})()}}]);