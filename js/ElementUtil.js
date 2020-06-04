
function getSelectedOptions(selectbox){
    var result = new Array();
    var option = null;
    
    for (var i=0, len=selectbox.options.length; i < len; i++){
        option = selectbox.options[i];
        if (option.selected){
            result.push(option);
        }
    }
    
    return result;            
}

function setSelectOptions(selectbox, selectOptionValues){
    let option = null;

    for(let k = 0; k < selectOptionValues.length; k++){
        for(let i = 0; i < selectbox.options.length; i++){
            option = selectbox.options[i];
            console.log(option.value + "  :  " + selectOptionValues[k]);
            if( option.value == selectOptionValues[k] ){
                console.log("걸렸는데?");
                option.selected = 'selected';
            }
        }
    }
}

var SelectBoxUtil = {
    getSelectedOptions : function (selectbox){
        var result = new Array();
        var option = null;
        
        for (var i=0, len=selectbox.options.length; i < len; i++){
            option = selectbox.options[i];
            if (option.selected){
                result.push(option);
            }
        }

        return result;            
    },

    setSelectOptions : function (selectbox, selectOptionValues){
        let option = null;
        
        for(let k = 0; k < selectOptionValues.length; k++){
            for(let i = 0; i < selectbox.options.length; i++){
                option = selectbox.options[i];
                console.log(option.value + "  :  " + selectOptionValues[k]);
                if( option.value == selectOptionValues[k] ){
                    console.log("걸렸는데?");
                    option.selected = 'selected';
                }
            }
        }
    }
}