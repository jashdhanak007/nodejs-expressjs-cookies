const Registertbl = require('../models/registertbl');

const login = (req, res) => {
    if (req.cookies.userlogin) {
        return res.redirect('/dashboard');
    }

    return res.render('login');
}

const register = (req, res) => {
    return res.render('register')
}

const registerdata = (req, res) => {

    try {
        let register = Registertbl.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        if (register) {
            console.log("Successfully Registered");
            return res.redirect('back');
        } else {
            console.log("Not Registered");
            return false;
        }

    } catch (error) {
        console.log(error);
    }
}

const logindata = async (req, res) => {

    let email = req.body.email;

    try {
        let userdata = await Registertbl.findOne({ email: email });

        if (!userdata) {
            console.log("Email not found");
            return false;
        }
        if (userdata.password != req.body.password) {
            console.log("Email not found");
            return false;
        }
        res.cookie('userlogin', userdata);
        return res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
}

const dashboard = (req, res) => {
    if (!req.cookies.userlogin)   //get karava maate
    {
        return res.redirect('/');
    }
    return res.render('dashboard');
}

const logout = (req, res) => {
    res.clearCookie('userlogin');
    return res.redirect('/');
}

module.exports = { login, register, registerdata, logindata, dashboard, logout }