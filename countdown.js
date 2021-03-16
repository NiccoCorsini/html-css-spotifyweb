// second progress in progressbar function
time=0*60+25,r=document.getElementById('song-timer'),tmp=time;
setInterval(function(){

var c=tmp++,m=(c/60)>>0,s=(c-m*60)+'';

r.textContent=''+m+':'+(s.length>1?'':'0')+s
tmp!=4.5*60+5||(tmp=time);

},1000);