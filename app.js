headCreat();

/* TODO: add event on button to move on the next page */
const subm = document.querySelector('form')
console.log('hi')
let pageNo = document.getElementById('pageNo');
/* TODO: store value of number page to appear number of quizz */
let currentPage = localStorage.getItem('currentpage') 
console.log(currentPage)
pageNo.innerHTML=`Q${currentPage}` 

/* TODO: click event to go next quiz page */
subm.addEventListener('click',(e)=>{
    e.preventDefault();
    const target = e.target;
    const nameAtt = target.getAttribute('name');
    console.log(nameAtt);
    if(nameAtt==='index.html'){
        currentPage= 1
        localStorage.setItem('currentpage',currentPage)
        history.pushState({page: currentPage},null, nameAtt)
        location.href = nameAtt;
    }
    else if(nameAtt){
    currentPage = parseInt(currentPage)+1;
    localStorage.setItem('currentpage',currentPage);
    history.pushState({page: currentPage}, nameAtt)
        location.href = nameAtt
    }
} )


/* TODO: Add head tag h1 before form */
function headCreat(){
    const form = document.querySelector('form');
    form.insertAdjacentHTML('beforebegin','<h1>Quizzes</h1>')
}