let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');
let form = document.getElementById('form')
let formelem = document.querySelector('.form-elem')
let textarea = document.querySelector('.textarea')
let box = document.querySelector('.news-wrapper')
let addButton = document.getElementById('send')

let news = []

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
}

)

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


form.addEventListener('submit', function(event){
    
        // lablename.innerHTML="";
        // labledate.innerHTML="";
    
        if(formelem.value == ""){
            alert("Введите название новости")
            
        }else if(formelem.value.length < 8){
            alert("В названии должно быть больше 8 символов")
        }else if(textarea.value == ""){
            alert("Введите текст новости")
        }else if(textarea.value.length > 300){
            alert("В тексте не должно быть больше 300 символов")
        }else{
            function showNews(news){
                box.innerHTML= '';
            
                    for (let i = 0; i < news.length; i++){
            
                        box.insertAdjacentHTML('beforeend',
                        '<div class="news-item"><h3 class="h3">'+news[i]['name']+'</h3> <p class="news-item__p">'+news[i]['text']+'</p></div>');
                    
                    } 
                }
                
                let key_name = 'name';
                let key_text = 'text';
            
            
                let namee = formelem.value;
                let text = textarea.value;
            
                
                news.push({
                    [key_name]:namee,
                    [key_text]:text,
                })
                showNews(news)
            
                formelem.value = ''
                textarea.value = ''
                    console.log(news)

            }
        }
)
        
    
document.addEventListener("keyup", function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.background = "gray";
        document.body.style.color = "white";
    }
})

document.addEventListener("keyup", function(event){
    if('w' == event.key.toLowerCase()){
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
})