import{r as u,j as e,d,F as x,L as I}from"./vendor.07a30449.js";import{A as w,I as h,B as N,g as r,a as C}from"./index.d60a0a5e.js";import{u as g,a as y,C as L}from"./Card.9d72600a.js";import{M as A,T as t,P as S}from"./Modal.07453fb5.js";import"./motion.b8bd9615.js";const _=({modalObj:o,editValue:l,setEditValue:s})=>{const[n,c]=u.exports.useState(null),[p,b]=u.exports.useState([]),{loadingDone:m,callback:f}=g();return u.exports.useEffect(()=>{f({method:"get",url:w,success:a=>{c(a.data)}})},[]),e(A,{...o,modalWidth:"700px",children:d("div",{className:"modal-body one-col-grid",children:[d("div",{className:"row",children:[e("div",{className:"col-md-6",children:e(h.LabelInput,{className:"form-control",type:"text",required:!0,value:l.first_name,onChange:a=>s({...l,first_name:a.target.value}),label:"First Name",invalidText:"First Name is required"})}),e("div",{className:"col-md-6",children:e(h.LabelInput,{className:"form-control",type:"text",value:l.last_name,onChange:a=>s({...l,last_name:a.target.value}),label:"Last Name",invalidText:"Last Name is required"})}),e("div",{className:"col-md-12",children:e(h.LabelInput,{className:"form-control",type:"text",required:!0,value:l.email,onChange:a=>s({...l,email:a.target.value}),label:"Email",invalidText:"Email is required"})})]}),d(h.LabelSelect,{required:!0,label:"Course",value:l.course,onChange:a=>{s({...l,course:a.target.value}),b(n.filter(T=>T.name==a.target.value)[0].types)},invalidText:"Need to select Course",children:[e("option",{value:"",children:"Select Course"}),n&&n.map(a=>e("option",{value:a.name,children:a.name},a.id))]}),d(h.LabelSelect,{value:l.completion,required:!0,label:"Type",onChange:a=>{s({...l,completion:a.target.value})},invalidText:"Need to select Type",children:[e("option",{value:"",children:"Select Type"}),n&&n.filter(a=>a.name==l.course)[0]?.types.map(a=>e("option",{value:a.name,children:a.name},a.id))]})]})})},P=()=>{const[o,l]=u.exports.useState({formId:"staff-member-form-edit",modalId:"staff-member-modal-edit",title:"Edit Certificate",visible:!1}),{isLoading:s,callback:n}=g(),{data:c,setData:p,loadingDone:b}=y({method:"get",url:C}),[m,f]=u.exports.useState({name:"",types:[]});function a(){n({method:"put",url:C+"/"+m._id,data:m,success:i=>{window.Notify({status:"success",message:"Certificate Updated Successfully"}),window.$(`#${o.modalId}`).modal("hide");let v={...m,...i.data};t.fn.updateTableWithId(c,v,p,"_id")},error:i=>{window.$(`#${o.modalId}`).modal("hide")}})}function T(i){i.types,f({...i}),l({...o,visible:!0}),window.$(`#${o.modalId}`).modal("show"),window.$(`#${o.formId}`).off("submit")}return d(x,{children:[e(N,{title:"Certificates",links:[{name:"Home",link:"/admin"},{name:"Certificates",link:"/admin/certificates"}],select:!0}),e(L,{title:"Certificates",button:{name:"Add",link:"certificates-add"},children:d(t,{tableId:".table-brand-staff",loadingDone:b,footerSelect:!0,children:[e(t.Header,{children:d(t.Row,{children:[e(t.TH,{children:"Id"}),e(t.TH,{children:"First Name"}),e(t.TH,{children:"Last Name"}),e(t.TH,{children:"Email"}),e(t.TH,{children:"Course"}),e(t.TH,{children:"Type"}),e(t.TH,{children:"Link"}),e(t.TH,{children:"url"}),e(t.TH,{children:"Created At"}),e(t.TH,{children:"Updated At"}),e(t.TH,{children:"Actions"})]})}),e(t.Body,{children:c&&c.map((i,v)=>d(t.Row,{children:[e(t.TH,{children:r(()=>i._id)}),e(t.TH,{children:r(()=>i.first_name)}),e(t.TH,{children:r(()=>i.last_name)}),e(t.TH,{children:r(()=>i.email)}),e(t.TH,{children:r(()=>i.course)}),e(t.TH,{children:r(()=>i.completion)}),e(t.TH,{children:r(()=>e(I,{to:"/"+i.course.replaceAll(" ","-").toLowerCase()+"/"+i._id,children:"Link"}))}),e(t.TH,{children:r(()=>"https://lj-phoenix.github.io/certificates/#/"+i.course.replaceAll(" ","-").toLowerCase()+"/"+i._id)}),e(t.TH,{children:r(()=>new Date(i.createdAt).toIndiaDate())}),e(t.TH,{children:r(()=>new Date(i.updatedAt).toIndiaDate())}),d(t.TH,{children:[e("i",{className:"feather icon-edit cursor-pointer",onClick:()=>T(i)}),e(S,{title:"Are you sure to delete this Certificate?",onConfirm:()=>new Promise(H=>{n({method:"delete",url:C+"/"+i._id,success:D=>(t.fn.deleteTableWithId(c,i,p,"_id"),window.Notify({status:"success",message:"Certificate Deleted Successfully"}),H())})}),okText:"Yes",cancelText:"No",children:e("i",{className:"feather pl-1 icon-trash cursor-pointer text-danger"})})]})]},i.id))})]})}),e(_,{editValue:m,setEditValue:f,modalObj:{...o,onSubmit:a,isLoading:s}})]})};export{P as default};
