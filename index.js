const hour =document.getElementById('hr');
const minute =document.getElementById('min');
const second =document.getElementById('sec');

setInterval(()=>
{
    let date=new date();
    let hr=date.getHours()*30;
    let min=date.getMinutes()*6;
    let  sec=date.getSeconds()*6;

  hour.style.transform=`rotatez(${(hr)+(min/12)}deg)`;
  minute.style.transform=`rotatez(${min}deg)`;

  second.style.transform=`rotatez(${sec}deg)`;

})

