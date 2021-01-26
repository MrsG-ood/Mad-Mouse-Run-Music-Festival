
const modal = document.getElementById('modalContainer');
const open = document.getElementById('modalBtn');

const close = document.getElementById('close')



// open.addEventListener("click", () => {
//     modal.classList.add("show");
// });

// close.addEventListener('click', () => {
//     modal.classList.remove("show");
// });

close.addEventListener('click', remove);
open.addEventListener('click', show);

function show() { 
    return modal.style.display='block';
}

function remove() { 
   return  modal.style.display='none';
}
