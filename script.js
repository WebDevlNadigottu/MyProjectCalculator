let string = "";
let del = document.getElementById('del');
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btns)=>{
    btns.addEventListener('click', (e)=> {
        if(e.target.innerHTML == "="){
            string = eval(string.replace("%", "/100"))
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "Del"){
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})