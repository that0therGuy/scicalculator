setInterval(answer,100)
function answer(){
    let input=document.querySelector('.field').value;
    input=input.replace(/pi/gi,Math.PI)
    input=input.replace(/phi/gi,(Math.sqrt(5)+1)/2)
   
    input = input.replace(/sqrt\(([^)]+)\)/gi, 'Math.sqrt($1)');
    input = input.replace(/sin\(([^)]+)\)/gi, 'Math.sin($1)'); 
    input = input.replace(/tan\(([^)]+)\)/gi, 'Math.tan($1)'); 
    input = input.replace(/cos\(([^)]+)\)/gi, 'Math.cos($1)'); 
    input = input.replace(/log\(([^)]+)\)/gi, 'Math.log($1)');
    document.querySelector('p').innerText='='+eval(input);
    if (document.querySelector('p').innerText=='=undefined'){
        document.querySelector('p').style.opacity='0';
        document.querySelector('p').style.display='none';     
        
    }else{
        document.querySelector('p').style.opacity='1';
        document.querySelector('p').style.display='inline-block';     
    }
}

