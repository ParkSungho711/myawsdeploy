"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[934],{3934:function(e,t,l){l.r(t),l.d(t,{default:function(){return x}});var s=l(641),n=l(33),a=l(3751);const o={class:"container mt-3"},i={class:"display-1 text-center"},m={class:"mb-3 mt-3"},d=(0,s.Lk)("label",{for:"id",class:"form-label"},"아이디:",-1),c={class:"input-group"},r=(0,s.Lk)("p",{style:{display:"none"},id:"idCheck-msg"},null,-1),u={class:"mb-3 mt-3"},p=(0,s.Lk)("label",{for:"name",class:"form-label"},"이름:",-1),b={class:"mb-3 mt-3"},k=(0,s.Lk)("label",{for:"pwd",class:"form-label"},"비밀번호:",-1),h={class:"mb-3 mt-3"},y=(0,s.Lk)("label",{for:"email",class:"form-label"},"email:",-1),f=(0,s.Lk)("div",{class:"mb-3 mt-3"},[(0,s.Lk)("button",{class:"btn btn-success w-100",type:"submit"},"가입하기")],-1);function L(e,t,l,L,g,v){return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("h1",i,(0,n.v_)(g.msg),1),(0,s.Lk)("form",{onSubmit:t[5]||(t[5]=(0,a.D$)(((...e)=>v.submit&&v.submit(...e)),["prevent"]))},[(0,s.Lk)("div",m,[d,(0,s.Lk)("div",c,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"id",name:"id",placeholder:"아이디 입력","onUpdate:modelValue":t[0]||(t[0]=e=>g.id=e)},null,512),[[a.Jo,g.id]]),(0,s.Lk)("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=(...e)=>v.idCheck&&v.idCheck(...e))},"아이디 확인")])]),r,(0,s.Lk)("div",u,[p,(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"name",name:"name","onUpdate:modelValue":t[2]||(t[2]=e=>g.name=e)},null,512),[[a.Jo,g.name]])]),(0,s.Lk)("div",b,[k,(0,s.bo)((0,s.Lk)("input",{type:"password",class:"form-control",id:"pwd",name:"pwd","onUpdate:modelValue":t[3]||(t[3]=e=>g.pwd=e)},null,512),[[a.Jo,g.pwd]])]),(0,s.Lk)("div",h,[y,(0,s.bo)((0,s.Lk)("input",{type:"email",class:"form-control",id:"email",name:"email","onUpdate:modelValue":t[4]||(t[4]=e=>g.email=e)},null,512),[[a.Jo,g.email]])]),f],32)])}l(4114);var g=l(4335),v={data(){return{msg:"SignUp",id:"",pwd:"",name:"",email:""}},methods:{idCheck(){const e=this.id,t=document.getElementById("idCheck-msg");if(""===e)return t.innerText="아이디는 필수 입력 사항입니다.",t.style.display="block",document.getElementById("id").focus(),!1;t.style.display="none",g.A.get(`http://192.168.0.107/myictstudy0529/members/idchk/${e}`).then((e=>{console.log(e),0===e.data?(t.innerText="사용 가능한 아이디입니다.",t.style.color="green"):(t.innerText="이미 사용 중인 아이디입니다.",t.style.color="red"),t.style.display="block"})).catch((e=>{}))},submit(){const e={id:this.id,pwd:this.pwd,name:this.name,email:this.email};g.A.post("http://192.168.0.107/myictstudy0529/members/signup",e).then((e=>{console.log(e),alert("회원가입이 완료되었습니다."),this.$router.push("/")})).catch((e=>{console.error(e),alert("회원가입 중 오류가 발생했습니다.")}))}}},w=l(6262);const C=(0,w.A)(v,[["render",L]]);var x=C}}]);
//# sourceMappingURL=934.8143e60b.js.map