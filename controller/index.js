const Reviews = require('../model/reviews')

exports.getReview = async (req, res, next) => {
    const cName = req.body.company;
    console.log('company name :' + cName);
    await Reviews.findAll({ where: { Company: cName } })
        .then(op => {
            console.log(op);
            console.log(op[0])
            let sum = 0, a = 0;

            op.forEach(ele => {
                console.log(ele);
                sum += ele.Rating;
                a++;
            });
            console.log(sum + ' values ' + a)
            const rating = sum / a;
            res.render('mains/review', {
                path: '/mains/review',
                pageTitle: 'Customer Reviews',
                data: op,
                name: cName,
                rating: rating,
            })
        })
}

exports.postReview = async (req, res, next) => {
    const data = req.body;
    console.log(data)
    const review = await Reviews.create({
        Company: data.company,
        Rating: data.rating,
        Pros: data.pros,
        Cons: data.cons
    })
        .then(result => {
            res.redirect('/givereview')
        })

}

exports.mainPage = (req, res, next) => {
    res.render('index', {
        path: '/index',
        pageTitle: 'Company Review',
    })
}

exports.giveReview = (req, res, next) => {
    res.render('mains/give', {
        pageTitle: 'Give Reviews',
        path: '/mains/give'
    })
}

exports.viewReview = (req, res, next) => {
    res.render('mains/view', {
        pageTitle: 'View Reviews',
        path: '/mains/view'
    })
}
