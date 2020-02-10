
const input = document.querySelector('input');
const add = document.querySelector('button');
let txt = '';                                                                   // declaration de lement text vide

input.addEventListener('change', function (e) {                              // creation d'un event change 
    txt = e.target.value;                                                    //get the value of input a l'element txt
})

add.addEventListener('click', function () {                                   //creation d'un evenemn clik sur le boutton add

    var btnComplete = document.createElement('button');                    //creation d'un elemenet (button)
    btnComplete.innerHTML = "complete";                                   //ajout texte a l'element button
    btnComplete.classList.add('btn_complete');                               //ajout d'une classe pour todo.css

    var btnDelete = document.createElement('button');                       //creation d'un elemenet (button)
    btnDelete.innerHTML = "delete";                                               //ajout texte a l'element button
    btnDelete.classList.add('btn_Delete');


    var todo = document.createElement('h1');                                           //creationd'un element titre h1
    todo.innerText = txt;                                                                   //ajout text dans un element (todo='h1')

    var container = document.createElement('div');                                     //creation d'un element div
    container.appendChild(btnComplete);                                              //ajout de l'element btncomplete a la div
    container.appendChild(btnDelete);                                                 //ajout de l'element btndelete a la div
    container.appendChild(todo);                                                     //ajout de l'elelment h1 a la div
    container.classList.add('todo');                                                       //ajout class pour todo.css

    var main = document.querySelector('main');                                          // declaration & selection de main
    main.appendChild(container);                                                 //ajout de l'elemenet container(btncomplet+btndelelte+todo) a l'elelemnt main

    document.querySelector('.text_input').value = '';                                  //vider la zone de texte 

    btnComplete.addEventListener('click', function () {                             //creation d'un event clik sur btncomplete
        if (btnComplete.innerHTML === 'complete') {
            btnComplete.innerHTML = 'undo';                                      //replace complte par undo
            todo.style.textDecoration = 'line-through';                                     //barrer le text
        }
        else if (btnComplete.innerHTML === 'undo') {
            btnComplete.innerHTML = 'complete';                                               //replace undo par complete
            todo.style.textDecoration = 'none';                                              //nepas barer le texte
        }
    })
    btnDelete.addEventListener('click',function() {
        btnComplete.remove() ;
        btnDelete.remove();
        todo.remove();
    })
})