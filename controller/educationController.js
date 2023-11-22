exports.showEducation = (req, res, next) =>{
    res.render('education', {
        home: false,
        education: true,
        experience: false,
        project: false,
        contact: false
    });
}