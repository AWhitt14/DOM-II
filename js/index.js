const funBus = document.querySelector('header > img');
funBus.addEventListener('click',(e) => {
    funBus.classList.toggle('tog');
});


document.querySelectorAll('a').forEach((anch)=>{
    anch.addEventListener('mouseover',()=>{
        anch.style.background = 'lightgrey';
        anch.style.border = '1px dashed black';
    })
}
);

document.querySelectorAll('a').forEach((anch)=>{
    anch.addEventListener('mouseleave',()=>{
        anch.style.background = 'white';
        anch.style.border = 'none';
    })
}
);


let urlA = [];

let img2 = document.querySelectorAll('.img-content > img');
img2.forEach((i) => {
    i.addEventListener(`contextmenu`,(e) => {
        alert(`you can't do that here`);
        e.preventDefault();

    });

    // i.addEventListener('dblclick',() => {

    // })

    i.addEventListener('dragstart',(e)=> {
        e.stopPropagation();
        let imageUrl = e.dataTransfer.getData('URL');

        if (urlA.length = 0){
            urlA.push(imageUrl);}
        else {
            urlA = [];
            urlA.push(imageUrl);
        }
        console.log(imageUrl);
    });

    i.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });

    i.addEventListener('drop',(e) => {
        i.src = urlA[0].toString();
    });

    
});


window.addEventListener('load',() => {
    alert(`Hello`);
});

const bod = document.querySelector('body');
bod.addEventListener('dblclick',() => {
    bod.style.background = 'red';
});

window.addEventListener('keydown',(e)=> {
let keynum = e.which;
    
    alert(String.fromCharCode(keynum));
});

