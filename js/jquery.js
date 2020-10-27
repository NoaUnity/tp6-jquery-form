$(document).ready(function(){
    
    //#region DOM recup dans le html

    const container = $("#container");

    const pseudo = $("#pseudo");
    
    const password = $("#mdp");
    //password.value = "a";
    const email = $("#courriel");
    //email.value = "noa@test.com";

    const eye = $("#eyebutton");
    //eye.value = "⊝";

    const valider = $("#valider");

    const boxResult = $("#resultats");

    const pseudoResult = $("#pseudoResult");
    
    const passwordResult = $("#mdpResult");
    
    const emailResult = $("#mailResult");
    

    //#endregion

    //#region Variables

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let eyeflag = false;

    //#endregion

    function verifPseudo (nom){
        if(3 <= nom.val().length && nom.val().length <= 10){
            $(pseudoResult).text("pseudo valide");
            flag1 = true;
        }
        else{
            $(pseudoResult).text("Votre pseudo doit faire entre 3 et 10 caractères");
            flag1 = false;
        }
    }

    function verifMdp (mdp){
        if(5 <= mdp.val().length){
            $(passwordResult).text("Le mot de passe est valide");
            flag2 = true;
        }
        else{
            $(passwordResult).text("Le mot de passe doit faire au moins 5 caractères");
            flag2 = false;
        }
    }

    function verifMail (mail){
        if(mail.val().match(mailformat)){
            $(emailResult).text("L'adresse mail est valide");
            flag3 = true;
        }
        else{
            $(emailResult).text("L'adresse mail doit etre au format utilisateur@domaine.fr");
            flag3 = false;
        }
    }

    function verifFlags (a,b,c){
        if(a == true && b == true && c == true){
            $(container).css("backgroundColor", "green");
        }
        else{
            $(container).css("backgroundColor", "red");
        }
    }


    function Hidepwd(){
        if(eyeflag == false){
            $(password).type = "text";
            $(eye).val("⊝");
            eyeflag = true;
        }
        else{
            $(password).type = "password";
            $(eye).val("⊙");
            eyeflag = false;
        }
    }

    

    valider.click(function(){
        verifPseudo($(pseudo));
        console.log($(pseudo).val().length);
        verifMdp($(password));
        verifMail($(email));
        $(boxResult).show();
        verifFlags(flag1,flag2,flag3);

    })

    eye.click(function(){
        Hidepwd();
    })

})