exports.projectDetails = (req, res, next) => {
    res.render('project', {
        home: false,
        education: false,
        experience: false,
        project: true,
        contact: false
    })
}