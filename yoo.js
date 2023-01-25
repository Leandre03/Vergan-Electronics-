(function() {
    function deactivateTooltips() {
        var spans= document.getElementsByTagName('span'),
        spansLength = spans.length;
        
        for (var i=0 ; i<spansLength; i++){
            if (spans[i].className=='tooltip'){
                spans[i].style.display='none';

            }
        }
    }
}
)
function  getTooltip(element){
    while (element=element.nextSibling){
        if (element.className==='tooltip'){
            return element;
        }
    }
    return false;
}
var check= {};
check['sex'] = function(){
    var sex=document.getElementsByName('sex'),
    tooltipstyle=getTooltip(sex[1].parentNode).style

    if (sex[0].checked || sex[1].checked) {
        tooltipStyle.display = 'none';
    return true;    }
    else{
        tooltipStyle.display= 'inline-block';
        return false;
    }
};

    check['lastName'] = function (id) {
    var name= document.getElementById(id),
    tooltipStyle = getTooltip(name).style;

    if (name.value.length >= 2){
        name.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else{
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['firstName'] = check['lastName'];

check['age'] = function(){
    var age = document.getElementById('age'),
    tooltipStyle = getTooltip(age).style,
    agevalue = parseInt(age.value);

    if (!isNaN(agevalue) && agevalue >=5 && agevalue <= 140) {
        age.className = 'correct';
        tooltipStyle.display = 'none';
        return false;
    } else{
        age.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['login'] = function() {
    var login = document.getElementById('login'),
    tooltipStyle = getTooltip(login).style;

    if (login.value.length >= 4){
        login.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else{
        login.className = 'incorrect';
        return false;
    }
};

check['pwd1'] = function() {
    var pwd1=document.getElementById('pwd1'),
    tooltipStyle = getTooltip(pwd1).style;

    if (pwd1.value.length >= 6) {
        pwd1.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else{
        pwd1.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['pwd2'] = function() {
    var pwd1=document.getElementById('pwd1')
    var pwd2=document.getElementById('pwd2'),
    tooltipStyle = getTooltip(pwd2).style;

    if (pwd1.value == pwd2.value && pwd2.value != '') {
        pwd2.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else{
        pwd2.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check ['country'] = function() {
    var country = document.getElementById('country'),
    tooltipStyle = getTooltip(country).style;

    if (country.options[country.selectedIndex].value != 'none'){
    tooltipStyle.display =' none';
    return true;
  }   else{
    tooltipStyle.dislay = 'inline-block';
    return false;
   }
};


(function() {
    var myForm = document.getElementById('myForm'),
        inputs = document.getElementById('input'),
        inputsLength = inputs.length;
    
    for (var i = 0; i < inputsLength; i++){
        if (inputs[i].type == 'text' || inputs[i].type == 'password'){
            inputs[i].onkeyup = function () {
                check [this.id] (this.id);
            };
        }
    } 
    myForm.onsubmit = function(){
        var result = true;
        for (var i in check) {
            result = check[i](i) && result;
        }
    if(result) {
        alert('Le formulaire est bien rempli.');
    }
    return false;
  };
    myForm.onreset = function() {
        for (var i = 0; i < inputsLength;i++) {
            if (inputs[i].type == 'text' || inputs[i].type == 'password'){
                inputs[i].className = '';
            }
        }
        deactivateTooltips();
    };
}) ();

