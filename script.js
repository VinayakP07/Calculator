let string = "";
let buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='X'){
            string = string + "*";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='CLR'){
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})