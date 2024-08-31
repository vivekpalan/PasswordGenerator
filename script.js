const password = document.querySelector('.password');
const passwordLength = document.querySelector('.passwordlength');
const btn = document.querySelector('.generate');
const rangeInput = document.querySelector('input[type="range"]');
// const slider = document.querySelector('input[type="range"]::-webkit-slider-thumb');
const checkbox =  document.querySelectorAll('#checkbox');

const uppercaseAlpha = [];

const specialChars = ['!','@','#','$','%','^','&','*','_','(',')','+','-','/'];
const numbers = ['1','2','3','4','5','6','7','8','9','0']; 


rangeInput.addEventListener('input',(e)=>{
    let rangeVal= Math.floor(Number(rangeInput.value)/5);

    passwordLength.innerHTML = `${rangeVal}`;
})


btn.addEventListener('click',()=>{

    let generatedPassword=[];
    
    let inpLength = Number(passwordLength.innerHTML);
    console.log(inpLength)

    if(checkbox[0].checked && checkbox[1].checked && checkbox[2].checked){
        generateUppercase();

        for(i=0;i<26;i++){
            specialChars[i+14] = uppercaseAlpha[i]
        }
        for(i=0;i<10;i++){
            specialChars[40+i] = i
        }
        createPassword(inpLength,0,51,specialChars);
        console.log(inpLength)
        console.log(createPassword(inpLength,0,51,specialChars))
        
    }

    else if(checkbox[0].checked && checkbox[1].checked){
        upperAndNumber()
    }

    else if(checkbox[0].checked && checkbox[2].checked){
        upperAndSymbols()
    }

    else if(checkbox[1].checked && checkbox[2].checked){
        numberAndSymbols();
    }

    else if(checkbox[0].checked){
    
        generateUppercase();

        createPassword(inpLength,0,27,uppercaseAlpha)
    }

    else if(checkbox[1].checked){
        createPassword(inpLength,0,10,numbers)
    }
    else if(checkbox[2].checked){
        console.log('checked')
        createPassword(inpLength,0,15,specialChars)
    }
    else{
        let lower=[];
        const numbers = ['1','2','3','4','5','6','7','8','9','0']; 
        generateUppercase();
        for(i=0;i<26;i++){
            val = uppercaseAlpha[i];
            lower[i] = val.toLowerCase();
        }
        createPassword(inpLength,0,36,lower)

    }


function upperAndNumber(){
    generateUppercase();

    for(i=0;i<10;i++){
        uppercaseAlpha[i+26] = i;
    }

    createPassword(inpLength,0,37,uppercaseAlpha);

}
function upperAndSymbols(){
    
    generateUppercase();

    for(i=0;i<26;i++){
        specialChars[i+14] = uppercaseAlpha[i]
    }
    createPassword(inpLength,0,41,specialChars);
}

function numberAndSymbols(){

    for(i=0;i<10;i++){
        specialChars[14+i]=i
    }
    console.log(createPassword(inpLength,0,25,specialChars),specialChars.length);
   
}



function createPassword(lengthVal,min,max,arrVal){
       for(i=0;i<lengthVal;i++){
            num = random(min,max);
            generatedPassword[i] = arrVal[num];
        
        }
        return generatedPassword;

}

const stringArr = String(generatedPassword);
const removeComma = stringArr.replaceAll(',','');
password.innerHTML = `${removeComma}`

})

password.addEventListener('click',()=>{

    if(password.innerHTML==''){
        alert('Nothing copied');
    }
    else{
        navigator.clipboard.writeText(password.innerHTML);
        alert('Password copied!')

    }

})

function generateUppercase(){
    for(i=0;i<26;i++){
        let val = String.fromCharCode(i+97);
        uppercaseAlpha[i]= val.toUpperCase();
    }
    return uppercaseAlpha;

}

function random(min,max){
    const r= Math.floor((Math.random()*(max-min))+min);
    return r;
}
