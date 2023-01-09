
  let phoneNumber= prompt("enter phone number").trim().split(',');
  let  message= prompt("enter mesasge");
  let whatsappNumber;
  let i =0;
  let visit=setInterval(()=>{
    if(i>phoneNumber.length){
      clearInterval(visit);
    }
    whatsappNumber=`+2${phoneNumber[i]}`;
    window.open(`https://web.whatsapp.com/send/?phone=${whatsappNumber}&text=${message}&source&data&app_absent`,"_blank");
    i++;
  },7000)
   








  
