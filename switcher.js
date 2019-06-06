var switcher = (function() {
    return {
        init(target) {
            let c=document.querySelector(target);
            let cxt=c.getContext("2d");
            let width=c.width;
            let height=c.height;
            let statu;
            let x=width/2;
            let y=height/2;
            let r=height/2;
            let flag=false;
            let reColor;
            let rr=r-2;
            let m;// 内部圆的圆心的x轴位置开始位置
            let cColor=c.getAttribute("circle");

            // window.onload=function(){
                statu="on";
                reColor=c.getAttribute(statu);
                cxt.beginPath();
                cxt.fillStyle=reColor;
                cxt.arc(x-r,y,r,0,Math.PI*2);
                cxt.arc(x+r,y,r,0,Math.PI*2);
                cxt.rect(x-r,0,height,height)
                cxt.fill();
        
                cxt.beginPath();
                cxt.fillStyle=cColor;
                cxt.arc(x+r,y,rr,0,Math.PI*2);
                cxt.fill();
            // }
            c.onclick=function(e){
                let pointX=e.offsetX;
                let pointY=e.offsetY;
                if(flag){
                    statu="on";
                    reColor=c.getAttribute(statu);
                    m=x-r;
                    rr=r-2;
                    let h=x-r;
                    let by=Math.sqrt(Math.pow(rr,2)-Math.pow((pointX-h),2));
                    if(pointX<(m+rr)&&pointX>(m-rr)&&pointY<(r+by)&&pointY>(r-by)&&flag==true){
                        doStart();
                        flag=!flag;
                    }
        
                }else{
                    statu="off"; 
                    reColor=c.getAttribute(statu);
                    m=x+r;
                    h=x-r;
                    let b=x+r;
                    let hy=Math.sqrt(Math.pow(rr,2)-Math.pow((pointX-b),2));
                    if(pointX<(m+rr)&&pointX>(m-rr)&&pointY<(r+hy)&&pointY>(r-hy)&&flag==false){
                        doEnd();
                        flag=!flag;
                    }
                }       
            }
        
            function doStart(){       
                statu="on";
                reColor=c.getAttribute(statu);
                let timer=setInterval(function(){
                    cxt.clearRect(0,0,width,height);
                    m+=5;
                    if(m>=x+r)
                        m=x+r;
                    cxt.beginPath();
                    cxt.fillStyle=reColor;
                    cxt.arc(x-r,y,r,0,Math.PI*2);
                    cxt.arc(x+r,y,r,0,Math.PI*2);
                    cxt.rect(x-r,0,height,height)
                    cxt.fill();
            
                    cxt.beginPath();
                    cxt.fillStyle=cColor;
                    cxt.arc(m,y,rr,0,Math.PI*2);
                    cxt.fill();
                    if(m==x+r){
                        clearInterval(timer);
                    }
                },100);
        
            }
            function doEnd(){    
                statu="off"; 
                reColor=c.getAttribute(statu);                 
                let timer=setInterval(function(){                      
                    cxt.clearRect(0,0,width,height);
                    m-=5;
                    if(m<=x-r){
                        m=x-r;          
                    }
                    cxt.beginPath();
                    cxt.fillStyle=reColor;
                    cxt.arc(x-r,y,r,0,Math.PI*2);
                    cxt.arc(x+r,y,r,0,Math.PI*2);
                    cxt.rect(x-r,0,height,height);
                    cxt.fill();            
                    cxt.beginPath();
                    cxt.fillStyle=cColor;
                    cxt.arc(m,y,rr,0,Math.PI*2);
                    cxt.fill();
                    if(m==x-r){
                        clearInterval(timer);
                    }
                },100);               
            }
        }
    }
})();