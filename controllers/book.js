'use strict'
var driver = require('../database');
const uuidv4 = require('uuid/v4');
// var session = driver.session();

const BookController = {};

//Cargar la vista para informacion del libro
BookController.loadView = (req, res) => {
    res.render('book', { title: "Libros" });
}

//Crear 300 nodos con informacion de libros
BookController.loadData = (req, res) => {

    var titles = [',Tin', 'Huasipungo', ',Ventosanzap', ',Sonair', ',Bigtax', ',Fixflex', ',Quo Lux', ',Greenlam', ',Sub-Ex', ',Pannier', ',Konklab', 'Zaam-Dox', ',Vagram', 'Tresom', ',Flowdesk', ',Y-Solowarm', ',Treeflex',
        'Otcom', ',Ronstring', ',Kanlam', ',Duobam', ',Domainer', ',Zathin', ',Bamity', ',Zoolab', ',Overhold', ',Y-Solowarm', ',Prodder', ',Tampflex', ',Tresom', ',Voltsillam', ',Zamit', ',Ventosanzap',
        'Vagram', 'Fixflex', 'Y-find', ',Sonair', ',Viva', 'Cookley', ',Sonsing', ',Andalax', ',Overhold', ',Treeflex', ',Temp', ',Zontrax', ',Rank', ',Tempsoft', ',Bitwolf', ',Cardify', ',Konklab',
        'Kanlam', ',Latlux', ',Ventosanzap', ',Span', ',Tres-Zap', ',Tres-Zap', ',Hatity', ',Latlux', ',Konklux', ',Duobam', ',Holdlamis', ',Stringtough', ',Greenlam', ',Tin', ',Gembucket', ',It', ',Keylex',
        'Subin', ',Trippledex', ',Stringtough', ',Domainer', ',Flowdesk', ',Biodex', ',Gembucket', ',Cardguard', ',Home Ing', ',Zathin', ',Wrapsafe', ',Pannier', ',Toughjoyfax', ',Bytecard',
        'Namfix', ',Pannier', 'Cardify', 'Zontrax', ',Andalax', ',Flexidy', ',Ronstring', ',Cookley', ',Prodder', ',Mat Lam Tam', ',Redhold', ',Otcom', ',Job', ',Opela', ',Span', ',Lotlux', ',Holdlamis',
        'Asoka', ',Tres-Zap', ',Overhold', ',Daltfresh', ',Zaam-Dox', ',Otcom', ',Hatity', ',Y-Solowarm', ',Cookley', ',Sonsing', ',Kanlam', ',Gembucket', ',Bitchip', ',Viva', ',Zamit', ',Tempsoft',
        'Bamity', ',Tres-Zap', ',Zaam-Dox', ',Flowdesk', ',Tres-Zap', ',Biodex', ',Zaam-Dox', ',Zamit', ',Bytecard', ',Sub-Ex', ',Mat Lam Tam', ',Redhold', ',Andalax', ',Sub-Ex', ',Sonair', ',Veribet',
        'Tresom', 'Solarbreeze', 'Aerified', ',It', ',Bytecard', ',Span', ',Redhold', ',Otcom', 'Prodder', 'Prodder', 'Tampflex', 'Fix San', ',Subin', ',Greenlam', ',Tempsoft', ',Holdlamis', ',Bigtax',
        'It', ',Asoka', ',Wrapsafe', ',Veribet', ',Tempsoft', ',Veribet', ',Alphazap', ',Cookley', ',Fixflex', ',Bigtax', ',Bitchip', ',Voltsillam', ',Matsoft', ',Treeflex', ',Fixflex', ',Cardify',
        'Matsoft', ',Quo Lux', ',Latlux', ',Matsoft', ',Span', ',Sonsing', ',Veribet', ',Temp', ',Ronstring', ',Ronstring', ',Wrapsafe', ',Cookley', ',Konklux', ',Regrant', ',Tampflex', ',Opela', ',Zaam-Dox',
        'Bitchip', ',Kanlam', ',Cookley', ',Stim', ',Fix San', ',Domainer', ',Latlux', ',Alpha', ',Fix San', ',Viva', ',Sonair', ',Alpha', ',Fixflex', ',Cardguard', ',Duobam', ',Zoolab', ',Mat Lam Tam', ',Fix San',
        'Transcof', ',Pannier', ',Biodex', ',Subin', ',Bytecard', ',Vagram', ',Konklab', 'Zaam-Dox', 'Prodder', ',Aerified', ',Andalax', ',Otcom', ',Biodex', ',Vagram', ',Tin', ',Temp', ',Biodex',
        'Rank', ',Subin', ',Temp', ',Latlux', ',Zamit', ',Tempsoft', ',Flowdesk', ',It', ',Fintone', ',Viva', ',Konklab', ',Y-Solowarm', ',Zaam-Dox', ',Transcof', ',Sonsing', ',Tres-Zap', ',Zathin', ',Greenlam',
        'Asoka', 'Cookley', 'Zontrax', 'Ventosanzap', 'Keylex', 'Asoka', ',Asoka', ',Alphazap', ',Namfix', ',Job', ',Sub-Ex', 'Holdlamis', ',Alpha', ',Trippledex', ',Viva', ',Prodder', ',Tin', ',Temp',
        'Flowdesk', 'Solarbreeze', ',Bytecard', ',Flowdesk', ',Latlux', 'Namfix', ',Stringtough', ',Zaam-Dox', ',Flexidy', ',Daltfresh', ',Toughjoyfax', ',Overhold', ',Zaam-Dox', ',Fintone', ',Tin',
        'Prodder', 'Stringtough', ',Voyatouch', ',Lotstring', ',Tresom', ',Lotlux', ',Temp', ',Greenlam', ',It', ',Subin', ',Keylex', ',Holdlamis', ',Gembucket', ',Cardguard', ',Asoka', ',Tresom', ',Keylex',
        'Cardguard', ',Alpha', ',Span', ',Vagram', ',Hatity', ',Zaam-Dox', ',Fix San', 'Job', ',It', ',Viva', ',Tresom', ',Konklux', ',Daltfresh', ',Fintone', ',Alphazap', ',Job', ',Latlux'];

    var pages = [372, 106, 359, 405, 262, 179, 243, 449, 444, 130, 336, 356, 376, 486, 433, 495, 396, 178, 324, 116, 472, 286, 267, 297, 145, 396, 150, 276, 269, 221, 174, 387, 287, 443, 422, 133, 233, 112, 272, 103, 189,
        389, 362, 161, 257, 347, 324, 276, 348, 158, 301, 380, 411, 440, 145, 125, 407, 194, 116, 276, 441, 498, 112, 376, 448, 117, 389, 272, 193, 481, 408, 137, 337, 469, 426, 174, 209, 281, 324, 406, 427,
        326, 166, 118, 269, 375, 361, 138, 198, 155, 269, 399, 223, 340, 456, 176, 270, 461, 392, 398, 409, 392, 487, 416, 482, 193, 183, 250, 417, 495, 279, 428, 250, 320, 331, 127, 156, 335, 274, 111, 385, 155, 169, 297,
        424, 330, 374, 119, 300, 410, 299, 344, 192, 201, 415, 423, 266, 200, 320, 257, 409, 422, 259, 173, 429, 144, 289, 129, 478, 130, 320, 399, 146, 199, 395, 127, 482, 252, 414, 290, 410, 408, 310, 450, 490, 236, 479, 428,
        250, 277, 398, 476, 369, 445, 405, 342, 359, 310, 486, 383, 159, 242, 204, 262, 424, 140, 231, 178, 442, 262, 207, 354, 100, 246, 465, 373, 300, 389, 387, 492, 280, 410, 207, 322, 267, 469, 457, 255, 395, 178, 170,
        412, 118, 202, 418, 289, 330, 278, 163, 363, 157, 195, 392, 269, 312, 490, 394, 415, 481, 198, 318, 380, 104, 258, 268, 425, 376, 123, 223, 462, 238, 214, 165, 311, 328, 443, 291, 428, 381, 411, 195, 245, 454, 364, 461,
        340, 242, 459, 193, 378, 222, 466, 359, 256, 149, 390, 256, 430, 276, 422, 178, 481, 353, 382, 423, 469, 433, 258, 392, 332, 140, 441, 162, 277, 472, 156, 128, 250, 328, 283, 342, 286, 126, 353, 164, 489, 494, 246, 396,
        391];

    var descriptions = ['org.un.Alpha', 'com.paypal.Fixflex', 'com.yelp.Stim', 'com.howstuffworks.Sub-Ex', 'com.indiegogo.Viva', 'com.nymag.Bytecard', 'com.huffingtonpost.Lotlux', ',com.seattletimes.Temp',
        ',com.geocities.Zamit', ',gov.whitehouse.Job', ',gov.epa.Zoolab', ',com.naver.Duobam', ',org.dyndns.Solarbreeze', ',com.istockphoto.Fintone', ',net.seesaa.Tresom', ',com.yahoo.Domainer', ',uk.co.123-reg.Kanlam',
        ',edu.berkeley.Greenlam', ',com.merriam-webster.Fintone', ',com.ted.Zathin', ',com.globo.Alpha', ',com.washingtonpost.Treeflex', ',net.earthlink.Y-Solowarm', ',com.prnewswire.Sonair', ',com.foxnews.Tresom', ',com.sciencedaily.Temp',
        ',com.istockphoto.Matsoft', ',com.cisco.Cardify', ',jp.ameblo.Quo Lux', ',net.comcast.Lotstring', ',com.hubpages.Zontrax', ',com.surveymonkey.Treeflex', ',com.yellowbook.Tresom', ',com.4shared.Stringtough',
        ',edu.upenn.Cardguard', ',net.a8.Fintone', ',com.go.Voltsillam', ',com.woothemes.Vagram', ',gov.fda.Flexidy', ',com.vistaprint.Namfix', ',gov.noaa.Tempsoft', ',com.list-manage.Viva', ',jp.jugem.Toughjoyfax', ',jp.i2i.Tampflex',
        ',com.marriott.Cookley', ',com.elpais.Stringtough', ',net.ovh.Zamit', ',org.archive.Alpha', ',cz.mapy.Sub-Ex', ',net.jalbum.Bytecard', ',net.furl.Lotlux', ',com.yellowpages.Cardify', ',com.geocities.Voltsillam',
        ',com.addthis.Vagram', ',gov.usa.Konklab', ',edu.nyu.Bamity', ',ru.narod.Tampflex', ',com.histats.Stim', ',com.skype.Fixflex', ',com.symantec.Rank', ',com.answers.Stim', ',com.prnewswire.Trippledex', ',gov.ftc.Toughjoyfax',
        ',com.nytimes.Zontrax', ',com.alibaba.Treeflex', ',com.shutterfly.Holdlamis', ',cn.gov.miibeian.Home Ing', ',uk.ac.cam.Opela', ',com.tumblr.Prodder', ',org.apache.Span', ',com.nytimes.Voyatouch',
        ',com.technorati.Mat Lam Tam', ',com.hexun.Y-Solowarm', ',com.acquirethisname.Flowdesk', ',gov.fema.Tampflex', ',com.instagram.Sonsing', ',gov.usgs.Trippledex', ',jp.ne.dion.Viva', ',com.wsj.Ronstring', 'net.php.Stim', 'com.topsy.Pannier',
        ',com.wsj.Latlux', ',com.photobucket.Prodder', ',edu.ucsd.Flexidy', ',com.nifty.Stringtough', ',org.prlog.Toughjoyfax', ',com.slate.Stronghold', ',cn.com.china.Stim', ',gov.nps.Bitwolf', ',com.printfriendly.Trippledex',
        ',net.sourceforge.Zontrax', ',ru.google.Voltsillam', ',com.bloglines.Tresom', ',com.dailymotion.Sonair', ',jp.i2i.Duobam', ',com.surveymonkey.Stronghold', ',uk.co.webeden.Bitwolf', ',com.multiply.Mat Lam Tam',
        ',org.redcross.Ronstring', ',com.newsvine.Stronghold', ',de.t-online.Prodder', ',au.com.google.Home Ing', ',com.fc2.Cardify', ',ru.odnoklassniki.Opela', ',com.mapquest.It', ',cn.360.Namfix', ',com.bloglovin.Stronghold',
        ',net.clickbank.Tres-Zap', ',com.1688.Lotlux', ',com.tinypic.Matsoft', ',com.tumblr.Y-find', ',org.mozilla.Fixflex', ',com.vistaprint.Voyatouch', ',org.dmoz.Biodex', ',gov.nih.Ventosanzap', ',com.nymag.Sub-Ex',
        ',com.jiathis.Treeflex', ',cn.com.china.Overhold', ',com.usnews.Toughjoyfax', ',it.google.Overhold', ',io.soup.Keylex', ',jp.co.amazon.Tres-Zap', ',com.friendfeed.Konklab', ',de.spiegel.Zamit', ',com.fotki.Pannier',
        ',com.imgur.Alphazap', ',com.qq.Keylex', ',com.tumblr.Bamity', ',com.shareasale.Matsoft', ',com.accuweather.Toughjoyfax', ',net.comcast.Kanlam', ',gov.nasa.Trippledex', ',gov.noaa.Bitchip', ',com.bandcamp.Prodder',
        ',com.jiathis.Cardguard', ',com.vinaora.Alpha', ',com.com.Domainer', ',cz.phoca.Lotstring', ',au.com.smh.Daltfresh', ',fr.unblog.Tres-Zap', ',com.kickstarter.Zaam-Dox', ',org.joomla.Aerified', ',cc.tiny.Fix San',
        ',com.lulu.Aerified', ',com.skype.Fix San', ',com.marriott.Voltsillam', ',com.zimbio.Zaam-Dox', ',edu.ucla.Wrapsafe', ',ru.liveinternet.Duobam', ',com.twitter.Solarbreeze', ',tv.ustream.Matsoft', ',mil.army.Biodex',
        ',com.businessinsider.Vagram', ',com.ft.Otcom', ',jp.ne.sakura.Flowdesk', ',com.buzzfeed.Kanlam', 'gov.usa.Y-Solowarm', ',com.constantcontact.Stim', ',edu.msu.Trippledex', ',com.microsoft.Namfix', ',org.redcross.Regrant',
        ',org.joomla.Voltsillam', ',com.about.Viva', ',edu.cmu.Y-Solowarm', ',com.surveymonkey.Ventosanzap', ',com.about.Hatity', ',com.tmall.Home Ing', ',br.com.uol.Biodex', ',com.booking.Voltsillam', ',com.quantcast.Matsoft',
        ',gd.is.Matsoft', ',com.flickr.Lotstring', ',mil.army.Treeflex', ',net.themeforest.Zoolab', ',com.artisteer.Y-find', ',com.washingtonpost.Sonair', ',edu.yale.Job', ',com.cocolog-nifty.Fix San', ',com.phpbb.Zamit',
        ',com.imdb.Veribet', ',org.gmpg.Greenlam', ',uk.co.independent.Zaam-Dox', ',com.facebook.Y-find', ',com.studiopress.Span', ',com.purevolume.Zaam-Dox', ',com.dell.Kanlam', ',gov.loc.Veribet', ',com.godaddy.Opela',
        ',com.list-manage.Treeflex', ',com.canalblog.Domainer', ',com.cafepress.Mat Lam Tam', ',ru.odnoklassniki.It', ',jp.ne.ocn.Treeflex', ',com.geocities.Ronstring', ',org.wordpress.Zontrax', ',com.blogspot.Voyatouch',
        ',de.amazon.Sonair', ',com.blinklist.Span', ',jp.japanpost.Zathin', ',com.woothemes.Cookley', ',com.dailymotion.Alphazap', ',edu.ucla.Trippledex', ',com.accuweather.Sonsing', ',ru.mail.Tres-Zap',
        'com.addtoany.Cookley', 'com.examiner.Fix San', 'com.blinklist.Cardify', 'com.examiner.Sonsing', ',com.sciencedirect.Tresom', ',com.geocities.Gembucket', ',com.twitter.Otcom', ',la.51.Kanlam', ',com.live.Lotlux',
        ',com.blogspot.Asoka', ',jp.ne.dion.Sonair', ',com.elegantthemes.Viva', ',com.alexa.Asoka', ',com.wikia.Voltsillam', ',com.ibm.Cookley', ',edu.arizona.Holdlamis', ',jp.co.google.Sub-Ex', ',com.eventbrite.Stronghold',
        ',org.dyndns.Zaam-Dox', ',com.squarespace.Holdlamis', ',cn.com.china.Duobam', ',com.latimes.Trippledex', ',edu.arizona.Fintone', ',com.theguardian.Solarbreeze', ',com.about.Greenlam', ',gov.cdc.Viva',
        ',cn.gov.miitbeian.Zoolab', ',com.freewebs.Namfix', ',org.networkadvertising.Trippledex', ',com.technorati.Prodder', ',com.over-blog.Tres-Zap', ',jp.ne.goo.Holdlamis', ',com.cnn.Cookley', ',com.hao123.Flowdesk',
        ',com.lulu.Sub-Ex', ',com.tinyurl.Flowdesk', ',org.joomla.Konklux', ',com.tinyurl.Rank', ',com.trellian.Ronstring', ',de.google.Bigtax', ',cz.phoca.Temp', ',au.com.smh.Opela', ',com.deliciousdays.Cardguard', ',gov.house.Matsoft',
        ',edu.ucla.Temp', ',uk.co.telegraph.Lotlux', ',com.feedburner.Overhold', ',cn.google.Quo Lux', ',com.pcworld.Ronstring', ',com.bing.Alphazap', ',jp.geocities.Matsoft', ',com.youku.Veribet', ',me.flavors.Alpha',
        ',com.hibu.Y-Solowarm', ',it.paginegialle.Tres-Zap', ',com.hc360.Stronghold', ',com.fc2.Viva', ',cz.toplist.Namfix', ',ru.google.Bitwolf', ',pl.google.Flowdesk', ',com.booking.Sub-Ex', ',co.g.Veribet',
        ',com.bizjournals.Asoka', ',es.google.Andalax', ',edu.cmu.Job', ',com.nba.Viva', ',cn.com.people.Bamity', ',com.cbslocal.Alphazap', ',it.tuttocitta.Toughjoyfax', ',com.storify.Stringtough', ',com.acquirethisname.Tresom',
        ',com.photobucket.Pannier', ',com.reference.Matsoft', ',com.wunderground.Hatity', ',com.apple.Pannier', ',com.ning.Voyatouch', ',com.webs.Domainer', ',edu.wisc.Cardguard', ',jp.geocities.Veribet', ',com.blog.Sonair',
        ',com.prweb.Y-find', ',edu.utexas.Subin', ',com.alexa.Flexidy', ',com.seattletimes.Keylex', ',ru.rambler.Quo Lux', ',gov.nih.Viva', ',com.cisco.Gembucket', ',pl.home.Wrapsafe', ',com.jimdo.Cookley', 'edu.cornell.Prodder',
        ',gov.house.Zoolab', ',cn.desdev.Prodder', ',com.imdb.Zamit', ',edu.washington.Quo Lux', ',edu.ucsd.Lotlux', 'ru.rambler.Quo Lux'];

    var session;
    for (let i = 1; i <= 300; i++) {
        session = driver.session();
        session
            .run('CREATE (n:Book {idBook:$idBook,title:$title,pages:$pages, description:$description})', { idBook: uuidv4(), title: titles[i], pages: pages[i], description: descriptions[i] })
            .then(book => {
                console.log('Ok');
            })
            .catch(error => {
                console.log(error);
            }).then(() => session.close());
    }
    res.status(200).send({msg: 'Se ha generado los libros de manera correcta'});
};


//Agregar un nuevo nodo de Libro
BookController.addBook = (req, res) => {
    var session = driver.session();
    session
        .run('CREATE (n:Book {idBook:$idBook,title:$title,pages:$pages, description:$description})', { idBook: uuidv4(), title: req.body.title, pages: req.body.pages, description: req.body.description })
        .then(book => {
            req.flash('GOOD', 'Se ha guardado el libro con éxito', 'back');
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        }).then(() => session.close());
};

//Listar todos los libros en formato JSON
BookController.list = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (n:Book) RETURN n As Books')
        .then(result => {
            var books = [];
            result.records.forEach(record => {
                var aux = record.get('Books').properties;
                books.push(aux);
            });
            res.send(books);
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
};

//Obtiene un nodo de acuerdo a su Id
BookController.getBookById = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (b { idBook: $idBook }) RETURN b As Book', { idBook: req.params.id })
        .then(result => {
            res.send(result.records[0].get('Book').properties);
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        }).then(() => session.close());
};

//Edita la informacion de un nodo
BookController.editBook = (req, res) => {
    console.log(req.body);
    
    var session = driver.session();
    session
        .run('MATCH (n { idBook: $idBook }) SET n.title = $title, n.pages = $pages, n.description = $description RETURN n As Book', { idBook: req.body.idBook, title: req.body.title, pages: req.body.pages, description: req.body.description })
        .then(result => {
            req.flash('GOOD', 'Se ha actualizado el libro con éxito', 'back');
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        }).then(() => session.close());
};

//Eliminar un nodo
BookController.deleteBook = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (n { idBook: $idBook }) DETACH DELETE n', { idBook: req.body.idBook })
        .then(result => {
            req.flash('GOOD', 'Se ha eliminado el libro con éxito', 'back');
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        }).then(() => session.close());
};

//Obtener node con relacion
BookController.getAuthor = (req, res) => {
    var session1 = driver.session();
    session1
        .run('MATCH (book)-[:WRITED]-(author) WHERE book.idBook = $idBook RETURN author.name', { idBook: req.params.idBook })
        .then(author => {
            var message = "No tiene autor";
            if (author.records.length > 0) {
                message = author.records[0]._fields.toString();
            }
            res.send({ message: message });
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        }).then(() => session1.close());
};

module.exports = BookController;