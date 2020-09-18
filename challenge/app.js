const container=document.querySelector('.container');

let currentX;
let currentY;
let initialX;
let initialY;
let setXOffset=0;
let setYoffset=0;
let active=false;
container.addEventListener('mousedown', dragStart);
container.addEventListener('mouseup', dragEnd);
container.addEventListener('mousemove',drag);

function dragStart(e){
    initialX=e.clientX-setXOffset;
    initialY=e.clientY-setYoffset;
    active=true;
    console.log('dragstart');
}
function dragEnd(){
    active=false; 
    console.log('dragend');
}
function drag(e){
    if(active===true){
        e.preventDefault();
        currentX=e.clientX-initialX; 
        currentY=e.clientY-initialY;
        setTranslate(currentX, currentY, container);
        console.log('dragging');
        setXOffset=currentX;
        setYoffset=currentY;
    }
    
}
function setTranslate(xPos,yPos,el){
el.style.transform=`translate3D(${xPos}px, ${yPos}px, 0)`;
}