const Reviews = require('../models/reviews')

exports.getReview = async (req,res,next) => {
    const cName =req.body.company;
    console.log('company name :'+cName);
    await Reviews.findAll({hwere: {Company: cName}})
    .then(op => {
        console.log(op[0]);
        let sum=0,a=0;
        // for(let i=0;i<op.length;i++)
        // {
        //     sum+=op.Rating;
        // }
        op.forEach(ele => {
            console.log(ele);
            sum+=ele.Rating;
            a++;
        });
        console.log(sum+' values ' +a)
        const rating = sum/a; 
        res.render('main/review',{
            path: '/main/review',
            pageTitle: 'Customer Reviews',
            data: op[0],
            name:cName,
            rating: rating,
        })
    })
}

exports.postReview = async (req,res,next) => {
    const data = req.body;
    const review = await Reviews.create({
        Company: data.company,
        Pros: data.pros,
        Cons: data.cons
    })
    .then( result => {
        res.redirect('/givereview')
    })

}

exports.mainPage = (req,res,next) => {
    res.render('index',{
        path: '/index',
        pageTitle: 'Company Review',
    })
}

exports.giveReview = (req,res,next) => {
    res.render('main/give',{
        pageTitle: 'Give Reviews',
        path: '/main/give'
    })
}

exports.viewReview = (req,res,next) => {
    res.render('main/view',{
        pageTitle: 'View Reviews',
        path: '/main/view'
    })
}

// exports.review = (req,res,next) => {
//     res.render('/main/review',{
//         path: '/main/review',
//         pageTitle: 'View Reviews'

//     })
// }