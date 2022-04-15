
class NewsController {
    
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:plug
    show(req, res) {
        res.send('hung');
    }
}


module.exports = new NewsController;