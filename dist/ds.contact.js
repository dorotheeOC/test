!function(){document.querySelector("body");const e=document.getElementById("contact-form"),t=document.getElementById("cpatchaTextBox"),n=(document.querySelector("button.button-contact"),document.querySelector("button.button-generate"));e.reset();const o=document.getElementById("phone");let c="";const r=document.querySelector("textarea");let a=document.querySelector("span.comment-length");o.addEventListener("focusout",(()=>{o.value&&(s(o.value),o.value=c)})),r.addEventListener("input",(e=>{const t=e.target.getAttribute("maxlength"),n=e.target.value.length;if(n>=t)return console.log("You have reached the maximum number of characters.");a.innerHTML=`${n}/${t}`}));let u=document.querySelector("p.message");e.addEventListener("submit",(t=>{t.preventDefault();let n=new FormData(e);i?l(n):u.innerHTML="Captcha incorrect ! Veuillez recommencer."}));const s=e=>{let t=(""+e).replace(/\D/g,"");console.log(t);let n=t.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/);n.shift(),c=n.join("-")},d=()=>{setTimeout((()=>{u.innerHTML=""}),5e3)},l=t=>{fetch("https://ds-eportfolio.herokuapp.com/send",{method:"post",body:t}).then((()=>{u.setAttribute("class","uppercase message"),u.innerHTML="Votre demande a été envoyée avec succès !<br />Vous recevrez une réponse par mail sous peu.",d(),e.reset(),h(),a.innerHTML="0/350"})).catch((()=>{u.setAttribute("class","uppercase message"),u.innerHTML="Votre demande n'a pas pu être envoyée !<br />Veuillez recommencer.",d()}))};let m,i=!1;const h=()=>{document.getElementById("captcha").innerHTML="";const e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";let t=[];for(var n=0;n<6;n++){let o=Math.floor(Math.random()*e.length+1);-1==t.indexOf(e[o])?t.push(e[o]):n--}let o=document.createElement("canvas");o.id="captcha",o.width=120,o.height=50;let c=o.getContext("2d");c.font="25px Georgia",c.strokeText(t.join(""),10,40),m=t.join(""),document.getElementById("captcha").appendChild(o)};h(),t.addEventListener("focusout",(()=>{p()})),n.addEventListener("click",(()=>{h()}));const p=()=>{t.value!==m?(h(),i=!1):i=!0}}();