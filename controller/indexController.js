exports.indexPage = (req, res, next) => {
    res.render('index', {
        home: true,
        education: false,
        experience: false,
        project: false,
        contact: false
    });
}