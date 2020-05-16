export const nameCheck = (str,errors) => {
    if (!str) {
        errors.name = "Please enter name"
    }
    else if (str.length > 10) {
        errors = "Must be 10 characters or less"
    }
}

export const usernameCheck = (str,errors) => {
    if (!str) {
        errors.username = "Please enter username"
    }
    else if (str.length > 10) {
        errors.username = "Must be 10 characters or less"
    }
}

export const password = (str,errors) => {
    if (!str) {
        errors.password = "Please enter password"
    }
    else if (str.length > 15) {
        errors.password = "Must be 15 characters or less"
    }
    else if (!/^([0-9a-zA-Z@._-]{10,15})$/.test(str)) {
        errors.password = "Please enter combination of alphanumeric value (Special Charater allowed are : @._-)"
    }
}

export const repeatpassword = (password,confirmPassword,errors) => {
    if (password !== confirmPassword) {
        errors.repeatpassword = "Password and confirm passwod do not match"
    }
}

export const email = (str,errors) => {
    if (!str) {
        errors.email = "Please enter email"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str)) {
        errors.email = "Invalid email address"
    }
}

