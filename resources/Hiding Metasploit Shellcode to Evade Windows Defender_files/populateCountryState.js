function initCountry (formId) {
    var $countrySelect = $(formId + " #country");
    var $countryIp = $(formId + " #countryIp");
    var $stateSelect = $(formId + " #state");
    var $stateIp = $(formId + " #stateIp");
    var $phoneField = $(formId + "#phone");
    var $phonePrefixField = $(formId + " .country-list");
    // Function to add all the countries as options to #country field
    function populateCountryDropdown(iso, name, dialCode) {
        $countrySelect.append($("<option />").val(iso).text(name));
        var flagClass = iso.toLowerCase();
        // Add Phone prefix dropdowns
        var $phonePrefixOption = $("<li />");
            $phonePrefixOption.addClass("country-option")
            $phonePrefixOption.attr("data-dial-code", dialCode);
            $phonePrefixOption.attr("data-country-code", iso);
            $phonePrefixOption.append("<div class='flag-box'><div class='iti-flag " + flagClass + "'></div></div>");
            $phonePrefixOption.append("<span class='country-name'>" + name + "</span>");
            $phonePrefixOption.append("<span class='dial-code'>+" + dialCode + "</span>");
        $phonePrefixField.append($phonePrefixOption);
    }

    // Get the JSON data
    $.getJSON("/includes/js/data/countryData.json", function(data) {
        $.each(data, function() {
            // Detect language
            if ($(formId).hasClass('lang_ja')) {
                // For Japanese
                // Add Country dropdowns
                populateCountryDropdown(this.iso, this.nameJa, this.dialCode);
            } else if ($(formId).hasClass('lang_de')) {
                // For German
                // Add Country dropdowns
                populateCountryDropdown(this.iso, this.nameDe, this.dialCode);
                // Alphabetize the options
                alphabetizeOptions('#country', 'option');
            } else {
                // For English
                // Add Country dropdowns
                populateCountryDropdown(this.iso, this.nameEn, this.dialCode);
            }
            
            // For the selected country only
            if (this.iso == selectedCountryIso) {
                selectedCountryDialCode = this.dialCode;
                var $stateField = $(formId + " #state");
                var flagClass = (this.iso).toLowerCase();
                $('.selected-flag .iti-flag').addClass(flagClass);
                // Check if it has states
                if(this.states) {
                    // display the states
                    $.each(this.states, function(){
                        $stateField.append($("<option />").val(this.value).text(this.label));
                    })
                // If no states, disable the field
                } else {
                    $stateField.attr("disabled", "disabled");
                    $stateField.parents('dl').hide();
                }
                // If its not-US, show the opt-out field
                if(this.iso != "US") {
                    $(formId + " #optout").show(); 
                }
                if (!(this.iso == "CA" || this.iso == 'US')) {
                    $(formId + " #consultant").show();
                }
            }
        });
        $countrySelect.val(selectedCountryIso);
        $countryIp.val(selectedCountryIso);
        // Set state values for US & Canada
        if (selectedCountryIso == "CA" || selectedCountryIso == 'US'){
            $stateSelect.val(selectedStateIso);
            $stateIp.val(selectedStateIso);
        } 
    }); 
}
function updateCountryData (formId) {
    // Get value of country
    if($(formId + " #country").length > 0){
        selectedCountryIso = $(formId + " #country").val();
    } else if ($(formId + " #countryIp").length > 0){
        selectedCountryIso = $(formId + " #countryIp").val();
    } else {
        selectedCountryIso = "US";
    }
    
    // Clear any state values
    var $stateField = $(formId + " #state");
    $(formId + " #state option").remove();
    // Hide the non-US optout field
    $(formId + " #optout").hide();
    // Hide the consultant field
    $(formId + " #consultant").hide();
    // Deactivate state field
    $stateField.attr("disabled", "disabled");
    $stateField.parents('dl').hide();
    // Check if selected country has states and get its phone dropdown
    $.getJSON("/includes/js/data/countryData.json", function(data) {
        $.each(data, function() {
            // For the selected country only
            if (this.iso == selectedCountryIso) {
                // Check if selected country has states
                if(this.states) {
                    // Remove deactivated field
                    $stateField.removeAttr("disabled");
                    $stateField.parents('dl').show();
                    // Add the state options
                    $.each(this.states, function(){
                        $stateField.append($("<option />").val(this.value).text(this.label));
                    })
                }
                if(this.iso != "US") {
                    $(formId + " #optout").show(); 
                } 
                if (!(this.iso == "CA" || this.iso == 'US')) {
                    $(formId + " #consultant").show();
                } 
            }
        });
    
    });
}

function alphabetizeOptions(selectId, type) {
    $(selectId).html($(selectId + " " + type).sort(function(a, b) {
        var indexA = a.text;
        var indexB = b.text;
        if (a.text[0] == 'Ä') {
            indexA = "Az";
        }
        if (b.text[0] == 'Ä') {
            indexB = "Az";
        }
        if (a.text[0] == 'Ö') {
            indexA = "Oz";
        }
        if (b.text[0] == 'Ö') {
            indexB = "Oz";
        }
        return indexA == indexB ? 0 : indexA < indexB ? -1 : 1
    })) 
}

