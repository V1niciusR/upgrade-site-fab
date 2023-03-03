window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
      document.getElementById('navbar').classList.add('scrolled');
  } else {
      document.getElementById('navbar').classList.remove('scrolled');
  }
}

  let valueNumbers=document.querySelectorAll(".exp-number");
  let interval=1000;

  valueNumbers.forEach((valueNumber)=>{
    let startValue=0;
    let endValue=parseInt(valueNumber.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(()=>{
        startValue+=1;
        valueNumber.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    },duration)
  });