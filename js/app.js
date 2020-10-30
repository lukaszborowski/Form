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
    const firstNameVal = $(".first-name > .validation");
    const surrNameVal = $(".last-name > .validation");
    const userNameVal = $(".user-name > .validation");
    const adressVal = $(".adress-line > .validation");
    const cityVal = $(".city-line > .validation");
    const stateVal = $(".state-line > .validation");
    const zipVal = $(".zip-line > .validation");
    const mailVal = $(".mail-line > .validation");
    const phoneVal = $(".phone-line > .validation");
    const genderVal = $(".gender-line > .validation");
    const birthVal = $(".birth-line > .validation");
    const ageVal = $(".age-line > .validation");
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
    const noPerm = (element, validation)=> {
        validation.removeClass("isValid restricted-perm");
        validation.addClass("isInvalid");
        validation.text("Looks Bad");
        lookBad(element);
    };

    const restriPerm = (element, validation)=> {
        validation.removeClass("isValid isInvalid");
        validation.addClass("restricted-perm");
        validation.text("Stricted Permission Added");
        lookRestri(element);

    };

    const fullPerm = (element, validation)=> {
        validation.removeClass("isInvalid restricted-perm");
        validation.addClass("isValid");
        validation.text("Looks Good");
        lookGood(element)
    };

    const insertAge = (first, second, element)=> {

        const teenager = Number(13);
        const adult = Number(18);
        valAge.val(first);

        if(first < teenager) {
            noPerm(element, ageVal);
        }else if(first === teenager && second < month){
            noPerm(element, ageVal);
        }else if(first === teenager && second >= month){
            restriPerm(element, ageVal);
        }else if(first > teenager && first < adult){
            restriPerm(element, ageVal);
        }else if(first === adult && second < month) {
            restriPerm(element, ageVal);
        }else if(first === adult && second >= month){
            fullPerm(element, ageVal);
        }else if(first > adult){
            fullPerm(element, ageVal);
        }

    };


    const lookGood = (element) => {

        element.css("background-color", "#02d625");
        element.removeClass("needs-validation");
        element.addClass("was-validated");

    };

    const lookBad = (element) => {
        element.css("background-color", "#d40819");
        element.removeClass("was-validated");
        element.addClass("needs-validation");

    };

    const lookRestri = (element) => {
        element.css("background-color", "#ede207");
        element.removeClass("needs-validation");
        element.addClass("was-validated");
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
            fullPerm(valName, firstNameVal)

        } else {
            noPerm(valName, firstNameVal)


        }
    });

    // Surrname Validation

    valSurr.on('change', () => {
        let val = valSurr.val();
        const regSurr = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regSurr.test(val)) {
           fullPerm(valSurr, surrNameVal);
        } else {
            noPerm(valSurr, surrNameVal);
        }
    });

    // Username Validation

    valUser.on('change', () => {
        let val = valUser.val();
        const regUser =/[A-Z][a-zA-Z][^#"@~;]{1,20}$/i;

        if (regUser.test(val)) {
            fullPerm(valUser, userNameVal);
        } else {
            noPerm(valUser, userNameVal);
        }
    });

    // Adress Validation

    valAdr.on('change', () => {
        let val = valAdr.val();

        if (val.length >= 3) {
           fullPerm(valAdr, adressVal)
        } else {
            noPerm(valAdr, adressVal)
        }
    });

    // City Validation

    valCity.on('change', () => {
        let val = valCity.val();

        if (val.length >= 3) {
            fullPerm(valCity, cityVal);
        } else {
            noPerm(valCity, cityVal);
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
                fullPerm(valState, stateVal);
                break;
            } else {
               noPerm(valState, stateVal)
            }
        }

    });

    // Zip Validation

    valZip.on('change', () => {
        let val = valZip.val();
        const regZip = /^([0-9]{2})(-[0-9]{3})?$/i;

        if (regZip.test(val)) {
            fullPerm(valZip, zipVal);
        } else {
           noPerm(valZip, zipVal);
        }
    });

    // Mail Validation

    valMail.on('change', () => {
        let val = valMail.val();
        const regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (!regMail.test(val)) {
            fullPerm(valMail, mailVal);
        } else {
            noPerm(valMail, mailVal);
        }
    });

    // Phone Validation

    valPhone.on('change', () => {
        let val = valPhone.val();
        const regPhone = /^(\+48\s*)?\d{2}\s*\d{3}(\s*|\-)\d{2}(\s*|\-)\d{2}$/i;
        if (regPhone.test(val)) {
            fullPerm(valPhone, phoneVal);
        } else {
            noPerm(valPhone, phoneVal);
        }
    });

    // Gender Validation

    valGender.on('change', () => {
        let val = valGender.val();

        if (val === "Male" || val === "Female" || val === "Other" || val === "Dont want to tell") {
           fullPerm(valGender, genderVal);
        } else {
           noPerm(valGender, genderVal);
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
            fullPerm(valBirth, birthVal);
            callbacks.add(insertAge(userYears(), userMonth(),valAge));
            callbacks.fire();
            callbacks.remove(insertAge(userYears(), userMonth(), valAge,));

        } else {
           noPerm(valBirth, birthVal);
        }

    });


});


