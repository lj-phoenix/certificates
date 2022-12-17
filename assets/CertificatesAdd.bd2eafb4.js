import{u as F,r as a,d as s,F as q,j as t}from"./vendor.07a30449.js";import{A as E,B as j,F as w,I as i,a as _}from"./index.d60a0a5e.js";import{u,C as P}from"./Card.9d72600a.js";const R=()=>{const p="Add Certificate",f=[{name:"Home",link:"/Admin"},{name:"Certificates",link:"/Admin/certificates"},{name:"Add Certificate",link:"/Admin/certificate-add"}];let b=F();const{isLoading:v,callback:h}=u(),{loadingDone:C,callback:N}=u(),[r,g]=a.exports.useState(null);a.exports.useState("");const[l,x]=a.exports.useState(""),[n,y]=a.exports.useState(""),[o,A]=a.exports.useState(""),[c,S]=a.exports.useState([]),[d,T]=a.exports.useState(""),[m,L]=a.exports.useState(""),k=function(){h({method:"post",url:_,data:{first_name:l,last_name:n,course:d,completion:o,email:m},success:e=>{window.Notify({message:"Certificate Added Successfully",status:"success"}),b.push("/admin/certificates")}}),console.log("Add Certificate")};return a.exports.useEffect(()=>{N({method:"get",url:E,success:e=>{g(e.data)}})},[]),s(q,{children:[t(j,{title:p,links:f}),t(w,{id:"form-certificate-validation",onSubmit:e=>{e.preventDefault(),window.formValidate("form-certificate-validation")(k)},children:s("div",{className:"row",children:[t("div",{className:"col-md-8",children:s(P,{loadingDone:C,title:"Certificate Information",iconLeft:"feather icon-certificate",children:[s("div",{className:"row",children:[t("div",{className:"col-md-6",children:t(i.LabelInput,{className:"form-control",type:"text",required:!0,value:l,onChange:e=>x(e.target.value),label:"First Name",invalidText:"First Name is required"})}),t("div",{className:"col-md-6",children:t(i.LabelInput,{className:"form-control",type:"text",value:n,onChange:e=>y(e.target.value),label:"Last Name",invalidText:"Last Name is required"})}),t("div",{className:"col-md-12",children:t(i.LabelInput,{className:"form-control",type:"email",required:!0,value:m,onChange:e=>L(e.target.value),label:"Email",invalidText:"Email is required"})})]}),s(i.LabelSelect,{value:d,required:!0,label:"Course",onChange:e=>{T(e.target.value),S(r.filter(I=>I.name==e.target.value)[0].types)},invalidText:"Need to select Course",children:[t("option",{value:"",children:"Select Course"}),console.log(r),r&&r.map(e=>t("option",{value:e.name,children:e.name},e.id))]}),s(i.LabelSelect,{value:o,required:!0,label:"Type",onChange:e=>A(e.target.value),invalidText:"Need to select Type",children:[t("option",{value:"",children:"Select Type"}),c&&c.map(e=>t("option",{value:e.name,children:e.name},e.id))]})]})}),t("div",{className:"col-md-3"}),t("div",{className:"col-md-2",children:v?s("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):s("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("i",{className:"feather icon-plus"})," Add Certificate"]})})]})})]})};export{R as default};
