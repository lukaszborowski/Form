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
    const regName = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;
    const regSurr = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;
    const regUser =/[A-Z][a-zA-Z][^#"@~;]{1,20}$/i;
    const regZip = /^([0-9]{2})(-[0-9]{3})?$/i;
    const regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const regPhone = /^(\+48\s*)?\d{2}\s*\d{3}(\s*|\-)\d{2}(\s*|\-)\d{2}$/i;




    // Functions

    const insertState = ()=> {
        for (let el of states){
            let smlEl = el.toLowerCase();
            const $option = $("<option>", {value: smlEl}).text(el);
            $("#validationState").append($option);

    }};

    const grabClass = (element) => {
        let parent = element.parents(element);
        let parentClass = parent.attr("class");
        // console.log(parentClass);
        let parentClassFix = parentClass.slice(14,24);
        const selector = $("pa")
        // let parentClassFixed = "."+parentClassFix;
        // const correct = document.getElementsByClassName('parentClassFixed');

        // console.log(correct);
            // $('parentClassFixed > .validation');
        // return (correct);
        // console.log(parentClass);
        // console.log(parentClassFix);

    };

    // Permisions
    const noPerm = (element)=> {
        correct().removeClass("isValid", "restricted-perm").addClass("isInvalid").text('Wrong - too young');
        lookBad(element);
    };

    const restriPerm = ()=> {
        $(".age-line > .validation").removeClass("isValid", "isInvalid").addClass("restricted-perm").text('Restricted Access');
    };

    const fullPerm = ()=> {
        $(".age-line > .validation").removeClass("isInvalid", "restricted-perm").addClass("isValid").text("Looks Good");
        lookGood(element)
    };

    const insertAge = (first, second, element)=> {

        const teenager = Number(13);
        const adult = Number(18);
        valAge.val(first);

        if(first < teenager) {
            noPerm();
        }else if(first === teenager && second < month){
            noPerm();
        }else if(first === teenager && second >= month){
            restriPerm();
        }else if(first > teenager && first < adult){
            restriPerm()
        }else if(first === adult && second < month) {
            restriPerm();
        }else if(first === adult && second >= month){
            fullPerm();
        }else if(first > adult){
            fullPerm();
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

    const validation = (element, reg) => {
        element.on('change', ()=>{
            let val = element.val();

            if(reg.test(val)){
                fullPerm();
            }else {
                noPerm()
            }
        })
    };

    callbacks.add(insertState);
    callbacks.fire();
    callbacks.remove(insertState);
    callbacks.add(grabClass(valName));
    callbacks.fire();


    //
    // VALIDATIONS
    //

    // Name Validation

    valName.on('change', () => {
        let val = valName.val();
        const regName = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regName.test(val)) {
            $(".first-name > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valName);


        } else {
            $(".first-name > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Name!');
            lookBad(valName)
        }
    });

    // Surrname Validation

    valSurr.on('change', () => {
        let val = valSurr.val();
        const regSurr = /[A-Z][a-zA-Z][^#&<>\"@~;$^%{}?!*|`_+=-]{1,20}$/i;

        if (regSurr.test(val)) {
            $(".last-name > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valSurr);
        } else {
            $(".last-name > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Surrname');
            lookBad(valSurr)
        }
    });

    // Username Validation

    valUser.on('change', () => {
        let val = valUser.val();
        const regUser =/[A-Z][a-zA-Z][^#"@~;]{1,20}$/i;

        if (regUser.test(val)) {
            $(".user-name > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valUser);
        } else {
            $(".user-name > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Username');
            lookBad(valUser)
        }
    });

    // Adress Validation

    valAdr.on('change', () => {
        let val = valAdr.val();

        if (val.length >= 3) {
            $(".adress-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valAdr);
        } else {
            $(".adress-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Adress');
            lookBad(valAdr)
        }
    });

    // City Validation

    valCity.on('change', () => {
        let val = valCity.val();

        if (val.length >= 3) {
            $(".city-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valCity);
        } else {
            $(".city-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect City name');
            lookBad(valCity)
        }
    });

    // State Validation

    valState.on('change', () => {
        let val = valState.val();


        for(let el of states){
           let elem = el.toLowerCase();

            if(val === elem) {
                $(".state-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
                lookGood(valState);
            } else {
                $(".state-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect State');
                lookBad(valState);
            }
        }

    });

    // Zip Validation

    valZip.on('change', () => {
        let val = valZip.val();
        const regZip = /^([0-9]{2})(-[0-9]{3})?$/i;

        if (regZip.test(val)) {
            $(".zip-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valZip);
        } else {
            $(".zip-line > .validation").removeClass("isValid").addClass("isInvalid").text('Incorrect Post-Code');

        }
    });

    // Mail Validation

    valMail.on('change', () => {
        let val = valMail.val();
        const regMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (!regMail.test(val)) {

            $(".mail-line > .validation").removeClass("isValid").addClass("isInvalid").text('Wrong Mail. Try like - sample@sample.com');
            lookGood(valMail)
        } else {

            $(".mail-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookBad(valMail)
        }
    });

    // Phone Validation

    valPhone.on('change', () => {
        let val = valPhone.val();
        const regPhone = /^(\+48\s*)?\d{2}\s*\d{3}(\s*|\-)\d{2}(\s*|\-)\d{2}$/i;
        if (regPhone.test(val)) {
            $(".phone-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valPhone)
        } else {
            $(".phone-line > .validation").removeClass("isValid").addClass("isInvalid").text('Wrong Phone number');
            lookBad(valPhone)
        }
    });

    // Gender Validation

    valGender.on('change', () => {
        let val = valGender.val();

        if (val === "Male" || val === "Female" || val === "Other" || val === "Dont want to tell") {
            $(".gender-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");

        } else {
            $(".gender-line > .validation").removeClass("isValid").addClass("isInvalid").text('Please Choose Gender');

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
            $(".birth-line > .validation").removeClass("isInvalid").addClass("isValid").text("Looks Good");
            lookGood(valBirth);
            callbacks.add(insertAge(userYears(), userMonth(),valAge));
            callbacks.fire();
            callbacks.remove(insertAge(userYears(), userMonth(), valAge));

        } else {
            $(".birth-line > .validation").removeClass("isValid").addClass("isInvalid").text('Wrong Date');
            lookBad(valBirth);
        }

    });


});


