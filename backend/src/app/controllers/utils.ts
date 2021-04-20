
function verifyFields(entity: any, requiredFields: Array<string>) {
    let error = false;
    const incorrectFields = Array();

    try {
        requiredFields.forEach((field, index) => {

            if((entity[field] === undefined) || (entity[field] === '')) {

                if(!error)
                    error = true;

                incorrectFields.push(field)
            }
        })

    }catch {
        error = true;
    }

    if(error) {
        return { error, incorrectFields }

    }else {
        return { error }
    }
}

export {
    verifyFields
}