document.addEventListener("DOMContentLoaded", function() {


    // Zmienne

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

    // insert State
    //valState.ready(()=> {
//
    //    for(let i=1; i<=states.length; i++){
    //       // let number = i +1;
    //        //console.log(number);
    //        $("#validationState").append('<option>' + states[i] + '</option>');
//
    //    }

        // for (let el of states){
        //     $("#validationState").append('<option>' + el + '</option>');
//
//
        // }

    //});


    const insertState = function() {
        for (let el of states){
            let smlEl = el.toLowerCase();
            // console.log(smlEl);
                $("#validationState").append('<option value="">' + el + '</option>');
                $(" #validationState > option").attr("value", smlEl);

    }};

    const stateValue = function () {

        // for(let i=1; i<=states.length; i++){
        //            let number = i +1;
        //             console.log(number);
        //             $("#validationState:nth-child(i)").append('<option>' + states[i] + '</option>');


     };

    const callbacks = $.Callbacks();
    callbacks.add(insertState);
    callbacks.fire();
    callbacks.remove(insertState);
    callbacks.add(stateValue);
    callbacks.fire();





    // Validations

    // Name Validation

    valName.on('input', () => {
        let val = valName.val();
        const regName = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regName.test(val)) {
            $(".first-name > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");


        } else {
            $(".first-name > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Name!');

        }
    });

    // Surrname Validation

    valSurr.on('input', () => {
        let val = valSurr.val();
        const regSurr = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regSurr.test(val)) {
            $(".last-name > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".last-name > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Surrname');

        }
    });

    // Username Validation

    valUser.on('input', () => {
        let val = valUser.val();
        const regUser =/[A-Z][a-zA-Z][^#"@~;]{1,20}$/i;

        if (regUser.test(val)) {
            $(".user-name > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".user-name > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Username');

        }
    });

    // Adress Validation

    valAdr.on('input', () => {
        let val = valAdr.val();

        if (val.length >= 3) {
            $(".adress-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".adress-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Adress');

        }
    });

    // City Validation

    valCity.on('input', () => {
        let val = valCity.val();

        if (val.length >= 3) {
            $(".city-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".city-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect City name');

        }
    });

    // State Validation

    valState.on('input', () => {
        let val = valState.val();


        for(let el of states){
            if(val === el) {
                $(".state-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
                break;
            } else {
                $(".state-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect State');

            }
        }

    });

    // Zip Validation

    valZip.on('input', () => {
        let val = valZip.val();
        const regZip = /^([0-9]{2})(-[0-9]{3})?$/i;

        if (regZip.test(val)) {
            $(".zip-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".zip-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Post-Code');

        }
    });

    // Mail Validation

    valMail.on('input', () => {
        let val = valMail.val();
        const regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (!regMail.test(val)) {

            $(".mail-line > .validation").removeClass("isValid").addClass("isInvalid").text('Wrong Mail. Try like - sample@sample.com');
        } else {

            $(".mail-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
        }
    });

    // Phone Validation

    valPhone.on('input', () => {
        let val = valPhone.val();
        const regPhone = /^(\+48\s*)?\d{2}\s*\d{3}(\s*|\-)\d{2}(\s*|\-)\d{2}$/i;
        if (regPhone.test(val)) {
            $(".phone-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".phone-line > .validation").removeClass("isValid").addClass("isInvalid").text('Wrong Phone number');

        }
    });

    // Gender Validation

    valGender.on('input', () => {
        let val = valGender.val();

        if (val === "Male" || val === "Female" || val === "Other" || val === "Dont want to tell") {
            $(".gender-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".gender-line > .validation").removeClass("isValid").addClass("isInvalid").text('Please Choose Gender');

        }
    })

    // M/Y Validation

    valBirth.on('input', () => {
        let val = valBirth.val();
       // const regBirth =
    })

});


