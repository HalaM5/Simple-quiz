
/* TODO: Add head tag h1 before form */
function headCreat(){
    const form = document.querySelector('form');
    form.insertAdjacentHTML('beforebegin','<h1>Quizzes</h1><blockquote id="score"></blockquote>')
}

headCreat();

/* TODO: create array includes correct answer of quizes */
let aanswer = ['Mouse', 'Monitor',16,'world wide web','Information Technology'
    ,'Global Position Systeme', 'did not', 'Sad', 'goes to', 'Nile river',
    'Red, Yellow and Blue', 'Purple', 'Long', 5, 0, 'Python',
    4, 'Cairo', 'Meter', 'Kilogram'
]


/* TODO: add event on button to move on the next page */
const subm = document.querySelector('#submit')
console.log('hi')
let pageNo = document.getElementById('pageNo');
/* TODO: store value of number page to appear number of quizz */
let currentPage = localStorage.getItem('currentpage') 
console.log(currentPage)
let score = parseInt( localStorage.getItem('score'));
document.getElementById('score').innerHTML=   `Total Score : ${score}`;


/* TODO: update number of page in DOM */
pageNo.innerHTML=`Q${currentPage}/20`;

/* TODO: get value of choosed answer */
const textLabel =  async()=>{
    let message;
    let inputt = document.querySelector('input[type="radio"]:checked');
    if(inputt){
        let labell = document.querySelector(`label[for="${inputt.id}"]`)
        let textt = labell.textContent
        console.log(textt)
        let num = parseInt(textt)
        let answerIn = aanswer.includes(textt);
        let answerInn = aanswer.includes(num);
        let gg = parseFloat(textt)
        let answerF = aanswer.includes(gg)
        console.log('float',typeof gg,gg)
        console.log(answerF,typeof textt,'expression')
       
            if(answerIn || answerInn || answerF){ 
                labell.innerHTML=`${textt} <span class='right'></span>`
                message = 'Correct!'
                score =score + 1; 
                localStorage.setItem('score',score)
                alert(message)

            }
            else{
                message = 'no worry search for right answer!'
                labell.innerHTML=`${textt} <span class='wrong'></span>`

                alert(message)
             }    
     } 

}
textLabel()
/*TODO: passe it as call function in addeventlistiner of the next button*/
function act(e){
    e.preventDefault();
    textLabel()
    .then(nextPage(e))
}

/** TODO:  create function to move on next question page*/
function nextPage(e){
    const target = e.target;
    const nameAtt = target.getAttribute('name');
    console.log(nameAtt);
    if(nameAtt==='index.html'){
        currentPage= 1
        score = 0
        localStorage.setItem('currentpage',currentPage)
        localStorage.setItem('score',score)
        history.pushState({page: currentPage},null, nameAtt)
        location.href = nameAtt;
        
    }
    else if(nameAtt){
    currentPage = parseInt(currentPage)+1;
    localStorage.setItem('currentpage',currentPage);
    history.pushState({page: currentPage}, nameAtt)
        location.href = nameAtt
    }
}

/* TODO: click event to go next quiz page and check answer right or else*/
subm.addEventListener('click',act)