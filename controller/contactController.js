const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'wedspay@gmail.com',
        pass: "ufrfpiaojjhgjnpp" // here
    },
    post: 465,
    host: 'stmp.gmail.com'
});



exports.contactDetails = (req, res, next) => {
    res.render('contact', {
        home: false,
        education: false,
        experience: false,
        project: false,
        contact: true
    })
}
exports.sendMessage = (req, res, next)=>{
    const msg = {
        from: 'wedspay@gmail.com',
        to: 'Ashish.1923ec1022@kiet.edu',
        subject: `Message from Portfolio`,
        html: `<h3>Dear Ashish Kumar,</h3>
        <p>I am ${req.body.name} had visited your portfolio website.</p>
        <p>${req.body.message}</p><br>
        <p>Email :  ${req.body.email}</p>
        <p>Phone No :  ${req.body.phone}</p>
        `
    };
    transport.sendMail(msg, (err)=>{
        if(err)
            console.log(err);
    })
    res.render('contact-success', {
        home: false,
        education: false,
        experience: false,
        project: false,
        contact: true
    })
}