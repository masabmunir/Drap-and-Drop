let imgBox = document.querySelector('.imgBox');

let whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart',(e)=>{
  console.log('drag start is working fine');
  //e.target.className = ' hold'
  
  setTimeout(function(){  e.target.className = 'hide' }, 0);
})


imgBox.addEventListener('dragend',(e)=>{
    console.log('drag end is working fine');
    e.target.className = 'imgBox';
})


for(let whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
     console.log('dragover is working');
    });

    whiteBox.addEventListener('dragenter',()=>{
        console.log('dragenter is working');

    });

    whiteBox.addEventListener('dragleave',()=>{
        console.log('dragleave is working');

    });

    whiteBox.addEventListener('drop',(e)=>{
        console.log('drop is working');
        e.target.append(imgBox);
    });
}