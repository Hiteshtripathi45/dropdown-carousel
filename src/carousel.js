let indexnum = 0
let imagediv = document.querySelectorAll('.imgdiv')
let circle = document.querySelectorAll('.circle')
export function display(){
imagediv.forEach(element => {
    element.classList.remove('display')
    imagediv[indexnum].classList.add('display')
});
}
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')

function back(){
    if(indexnum>0){
        indexnum=indexnum-1
    }
    else{
        indexnum=4
    }
    display()
}


function front(){
    if(indexnum<4){
        indexnum=indexnum+1
    }
    else{
        indexnum=0
    }
    display()
}
button1.addEventListener('click',()=>{
    back()
})
button2.addEventListener('click',()=>{
    front()
})



export function change(){
    circle.forEach((element,idx) => {
        element.addEventListener('mouseover',()=>{
            indexnum=idx
            display()
        })
    
})
}