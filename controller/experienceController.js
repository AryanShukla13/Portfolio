exports.experienceDetails = (req, res, next) => {
    res.render('experience', {
        home: false,
        education: false,
        experience: true,
        project: false,
        contact: false
    })
}