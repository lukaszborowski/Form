document.addEventListener("DOMContentLoaded", function() {


    // Variables

    const valName = $("#validationName");
    const valSurr = $("#validationSurr");
    const valUser = $("#validationUsername");
    const valAdr = $("#validationAdr");
    const valCity = $("#validationCity");
    const valState = $("#validationState");
    const valZip = $("#validationZip");
    const valMail = $("#validationMail");
    const valPhone = $("#validationPhone");
    const valGender = $("#validationGender");
    const valBirth = $("#validationBirth");
    const valAge = $("#validationAge");
    const select1 = $("select[name=stateSelect]");
    const states = [
                    "Dolnośląskie",
                    "Kujawsko-Pomorskie",
                    "Lubelskie",
                    "Lubuskie",
                    "Łódzkie",
                    "Małopolskie",
                    "Mazowieckie",
                    "Opolskie",
                    "Podkarpackie",
                    "Podlaskie",
                    "Pomorskie",
                    "Śląskie",
                    "Świętokrzyskie",
                    "Warmińsko-Mazurskie",
                    "Wielkopolskie",
                    "Zachodniopomorskie"
                    ];
    const datePick = new Date();
    const year = datePick.getFullYear();
    const month = datePick.getMonth();
    const callbacks = $.Callbacks();


    // Functions

    const insertState = () => {
        for (let el of states){
            let smlEl = el.toLowerCase();
            const $option = $("<option>", {value: smlEl}).text(el);
            $("#validationState").append($option);

    }};


    // Permisions
    const noPerm = (element)=> {
        const $removeValid = $(".isValid");
        const $removeRest = $(".restricted-perm");
        const $removeInval = $(".isInvalid");
        const $div = $("<div>", {class: "isInvalid"});
        $div.text("Looks Bad");
        $removeValid.remove();
        $removeRest.remove();
        $removeInval.remove();
        element.after($div);
        lookBad(element);
    };

    const restriPerm = (element)=> {
        const $removeInval = $(".isInvalid");
        const $removeValid = $(".isValid");
        const $div = $("<div>", {class: "restricted-perm"});
        $removeInval.remove();
        $removeValid.remove();
        element.after($div);
    };

    const fullPerm = (element)=> {
        const $removeInval = $(".isInvalid");
        const $removeRest = $(".restricted-perm");
        const $div = $("<div>", {class: "isValid"});
        $div.text("Looks Good");
        $removeInval.remove();
        $removeRest.remove();
        element.after($div);
        lookGood(element)
    };

    const insertAge = (first, second, element)=> {

        const teenager = Number(13);
        const adult = Number(18);
        valAge.val(first);

        if(first < teenager) {
            noPerm(element);
        }else if(first === teenager && second < month){
            noPerm(element);
        }else if(first === teenager && second >= month){
            restriPerm(element);
        }else if(first > teenager && first < adult){
            restriPerm(element);
        }else if(first === adult && second < month) {
            restriPerm(element);
        }else if(first === adult && second >= month){
            fullPerm(element);
        }else if(first > adult){
            fullPerm(element);
        }

    };


    // const Validation = function(){
    //     this.table = [];
    //     this.validated = 0;
    //     this.unvalidated = 0;
    // };
    //
    // Validation.prototype.addValid = function(name, valid){
    //     const object = {
    //         name: name,
    //         valid: valid,
    //     };
    //     this.table.push(object);
    //
    // };
    //
    // Validation.prototype.addInvalid = function(name, invalid){
    //     const object = {
    //         name: name,
    //         valid: invalid,
    //     };
    //     this.table.push(object);
    // };

    const lookGood = (element) => {

        element.css("background-color", "rgba(79, 248, 32, 0.20)");
        element.addClass("was-validated");

    };

    const lookBad = (element) => {
        element.css("background-color", "rgba(250, 0, 0, 0.20)");
        element.addClass("needs-validation");

    };


    callbacks.add(insertState);
    callbacks.fire();
    callbacks.remove(insertState);

    //
    // VALIDATIONS
    //

    // Name Validation


    valName.on('change', () => {
        let val = valName.val();
        const regName = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regName.test(val)) {
            fullPerm(valName)

        } else {
            noPerm(valName)


        }
    });

    // Surrname Validation

    valSurr.on('change', () => {
        let val = valSurr.val();
        const regSurr = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regSurr.test(val)) {
           fullPerm(valSurr);
        } else {
            noPerm(valSurr);
        }
    });

    // Username Validation

    valUser.on('change', () => {
        let val = valUser.val();
        const regUser =/[A-Z][a-zA-Z][^#"@~;]{1,20}$/i;

        if (regUser.test(val)) {
            fullPerm(valUser);
        } else {
            noPerm(valUser);
        }
    });

    // Adress Validation

    valAdr.on('change', () => {
        let val = valAdr.val();

        if (val.length >= 3) {
           fullPerm(valAdr)
        } else {
            noPerm(valAdr)
        }
    });

    // City Validation

    valCity.on('change', () => {
        let val = valCity.val();

        if (val.length >= 3) {
            fullPerm(valCity);
        } else {
            noPerm(valCity);
        }
    });

    // State Validation

    valState.on('change', () => {
        let val = valState.val();


        for(let el of states){
           let elem = el.toLowerCase();
           console.log(elem);
           console.log(val);

            if(val === elem) {
                fullPerm(valState);
                break;
            } else {
               noPerm(valState)
            }
        }

    });

    // Zip Validation

    valZip.on('change', () => {
        let val = valZip.val();
        const regZip = /^([0-9]{2})(-[0-9]{3})?$/i;

        if (regZip.test(val)) {
            fullPerm(valZip);
        } else {
           noPerm(valZip);
        }
    });

    // Mail Validation

    valMail.on('change', () => {
        let val = valMail.val();
        const regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (!regMail.test(val)) {
            fullPerm(valMail);
        } else {
            noPerm(valMail);
        }
    });

    // Phone Validation

    valPhone.on('change', () => {
        let val = valPhone.val();
        const regPhone = /^(\+48\s*)?\d{2}\s*\d{3}(\s*|\-)\d{2}(\s*|\-)\d{2}$/i;
        if (regPhone.test(val)) {
            fullPerm(valPhone);
        } else {
            noPerm(valPhone);
        }
    });

    // Gender Validation

    valGender.on('change', () => {
        let val = valGender.val();

        if (val === "Male" || val === "Female" || val === "Other" || val === "Dont want to tell") {
           fullPerm(valGender);
        } else {
           noPerm(valGender);
        }
    });

    // M/Y Validation

    valBirth.on('change', () => {
        let val = valBirth.val();
        const regBirth = /^((0[1-9])|(1[0-2]))\/(\d{4})$/i;
        let inputYear = val.slice(3,7);
        let inputMonth = val.slice(0,2);

        // To global scope
        const userYears =  ()=> {
            return ( Number(year - inputYear));

        };

        const userMonth = ()=> {
            return (Number(inputMonth))
        };
        // end of global scope

        if(regBirth.test(val) && userYears() < Number(125)) {
            fullPerm(valBirth);
            callbacks.add(insertAge(userYears(), userMonth(),valAge));
            callbacks.fire();
            callbacks.remove(insertAge(userYears(), userMonth(), valAge));

        } else {
           noPerm(valBirth);
        }

    });


});


