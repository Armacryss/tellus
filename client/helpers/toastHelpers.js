Tellus.tellus_toast = function(message, duration, color) {
    if(!duration) {
        duration = 4000;
    }
    
    if(!color) {
        toast(TAPi18n.__(message), 4000);
    }
    else {
        toast(TAPi18n.__(message), 4000, color);
    }
};

Tellus.tellus_toast_success = function(message, duration) {
    Tellus.tellus_toast(message, duration, "green");
};

Tellus.tellus_toast_fail = function(message, duration) {
    Tellus.tellus_toast(message, duration, "red");
};

Tellus.tellus_toast_conditional = function(isSuccess, messageSuccess, messageFail, duration) {
    if(isSuccess) {
        Tellus.tellus_toast_success(messageSuccess, duration);
    } else {
        Tellus.tellus_toast_fail(messageFail, duration);
    }
}