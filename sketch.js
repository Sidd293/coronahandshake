var sco = 0
var f 
var fac = 1
var sc = 200
var szx = 400
var shy = 200
var shx = 800
var szy = 100
var lyf
var lh
var rh
var py=[]
var sx=[]
var px=[]
var snd
var mx=0

function preload()
{
  lh=loadImage('Lh.png')
  rh =loadImage('Rh.png')
     hrt = loadImage('hrtb.png') 
     sz = loadImage('sanet.png') 
 sh= loadImage('hstop.png') 
  ins=loadImage('INS2.png') 
  snd =loadSound('coronaguitar.mp3')
  bg = loadImage('coronabg.png')
}
function setup() {
  createCanvas(350,500);
snd.play()

  
  for(var i=0;i<15;i++)  
  {sx[i]=random(width,width+200)
   py[i]=random(-60,height)
   px[i]=sx[i]
    }
lyf = width
 f = 1
  
}

function draw() {
//snd.loop();
  background(255);
  image(bg,0,0,width,height)
  text('score is-'+sco,0,30)
       sco++
  sc+=.5
text("instructions",width-100,10)
if(sco%600==0)
  snd.play()
  
  if(mouseX>width-100&&mouseX<width,mouseY<20&&mouseY>0)
  { image(ins,0,0,width,height)
  }
  
  image(sz,szx,szy  ,40,40)
 
  image(sh,shx,shy  ,40,40)
  
  mx=  map(gamma,-55,55,0,height)
  //map(mouseX,0,width,0,height)
  
  image(lh,0,mx,40,40)
for (var j=0;j<15;j++)
  {image(rh,px[j],py[j],40,40)
  px[j] = px[j] - sc*.01*fac;
   if (px[j]<0)
   {
  // px[j]=sx[j] 
   px[j]=random(width,width+200)
   py[j]=random(-60,height)
   }
   }
for (var c = 0 ; c<15;c++)
{

  if((0-px[c])*(0-px[c])+(mx-py[c])*(mx-py[c])<40*40)
  {
 lyf =lyf-sc*.01*fac;
  
  }
  
  

}
  
  
  if((0-szx  )*(0-szx  )+(mx-szy  )*(mx-szy  )<40*40)
  {
 lyf = width
  
  }
   if((0-shx  )*(0-shx  )+(mx-shy  )*(mx-shy  )<40*40)
  {
f = width
    sc = sc - 6
  
  }
  
  
 fill(255,0,0)
rect(0,height-30,lyf,30)
  fill(0,0,255)
rect(0,height-60,f,30)
 if (lyf<0)
   exit();
  fill(0)

if(szx<0)
{szx =width 
 szy = random(0,height)
}
else
{szx--
}

if(shx<0)
{shx =random(width,2*width) 
 shy = random(0,height)
}
else
{shx--
}
  if(f>0)
  {
 f-=2
    fac =.1
  }else
  {fac = 1}
console.log(sc) 

}
window.addEventListener('deviceorientation', function(e) 
{
  alphax = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
