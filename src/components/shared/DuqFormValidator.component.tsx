
 const validateDuqForm = (values: any) => {

    let errors: any = {}
    if (!values.email.trim()) {

        errors.email = 'Email required';

    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {

        errors.email = 'Email address is invalid';

    }

    if (values.phone.trim()) {
        if (values.code == "+1" && /^[0-9]+$/.test(values.phone) && values.phone.length <= 14 && values.phone.length >= 7) {
        
        } else if(/^[0-9]+$/.test(values.phone) && values.code == "+91" && values.phone.length == 10) {

        } else if(allnumeric(values.phone) && values.code != "+91" && values.code != "+1"){

        } else if (!/^[0-9]+$/.test(values.phone)){
            errors.phone = 'Only numeric values are allowed.';
        } else {
            errors.phone = 'Please enter a valid mobile number.';
        }
        
    } else {
        errors.phone = 'Phone number is required';
    }

    if (!values.query.trim()) {

        errors.query = 'Please enter the query';

    }


    return errors;
};

const allnumeric = (value : any)  => {
    let numericRegex = /^[0-9]+$/;
    return value.match(numericRegex) && (value.length >= 6 && value.length <= 15);
};

export default validateDuqForm;


