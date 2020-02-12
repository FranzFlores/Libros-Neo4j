'use strict'
var driver = require('../database');
const uuidv4 = require('uuid/v4');
var session = driver.session();
const AuthorController = {};

//Cargar la vista para el autor 
AuthorController.loadView = (req, res) => {
    res.render('author', { title: "Autores" });
};


AuthorController.loadData = (req, res) => {

    var names = ['Filmore', 'Gino', ',Vanya', ',Tabby', 'Francesca', 'Gwyneth', 'Waldon', 'Harrison', ',Teresa', 'Devina', ',Nanny', ',Kalli', ',Powell', ',Tripp', 'Arie', ',Ronnie', ',Ryann', ',Noam', 'Darla', ',Valerie', ',Wat', ',Penn', ',Logan', ',Sharia',
        'Elysha', 'Evelyn', 'Gertruda', ',Shaine', ',Humfrey', 'Dud', ',Kienan', 'Gayleen', 'Winifred', 'Elwyn', ', Mario', ', Shirlene', 'Dulcinea', 'Cyrill', ', Thibaud', 'Aatholomew', ', Ulrika', ', Jessy', ', Jorgan', ', Suzanne',
        'Janeva', 'Felipe', 'Afton', ',Thatcher', ',Vergil', ',Tine', ',Monique', ',Hobey', ',Leighton', 'Erda', ', Othelia', 'Derek', 'Amble', ', Vaughn', ', Laure',
        'Joscelin', ',Laurel', 'Edmon', ', Tanhya', ', Whitney', ', Kathrine', 'Fifine', ', Sarajane', ', Kirsten', ', Sophronia', ', Ward', ', Reagan', ', Mischa', ', Ranique',
        ',Leodora', 'Dalt', ',Salomi', ',Ivor', 'Guendolen', 'Aetsey', 'Aelia', ',Lishe', 'Aethanne', ',Marcelia', ',Mayor', 'Dionisio', 'Frankie', ',Reginald',
        'Eddi', ', Raleigh', 'Elise', ',Kev', ',Olga', 'Gerry', 'Candide', ',Marv', ',Knox', ',Lorie', ',Helsa', ',Hendrik', 'Aear', ',Kristy', ',Vaclav', ',Shaina', ',Phillis', ',Monty', ',Wrennie',
        'Donica', 'Gilda', 'Ardelia', ',Ingrim', 'Casandra', ',Heywood', 'Cosmo', 'George', 'Garvey', ',Umeko', ',Tedi', 'Grace', 'Aird', 'Anne-marie', 'Arandais', 'Christine', 'Carlita',
        'Sinclare', ',Nicolea', ',Karine', ',Richmond', 'Devina', ',Maggi', ',Pooh', ',Leslie', ',Larine', 'Cherish', 'Gunar', ',Mill', ',Sherie', ',Karylin', ',Tobe', 'Cherlyn', 'Don', 'Amalee',
        'Arander', 'Fannie', 'Dinnie', 'Charlena', 'Annora', ',Hildy', ',Karlens', 'Giffer', 'Enrico', ', Norina', ', Helaina', ', Stanwood', ', Robin', 'Aertrand', 'Ermina', 'Alf', ',Raoul', 'Gavra',
        'Axe', 'Aarnebas', ',Libby', ',Lucretia', ',Kitty', 'Domeniga', 'Coletta', ',Kettie', ',Palm', ',Matt', ',Jock', ',Perla', 'Giana', ',Lira', ',Sydney', ',Wolfie', 'Conchita', ',Valentine', ',Helyn',
        ',Horton', ',Lulita', ',Iver', ',Malynda', ',Reade', ',Tallulah', ',Kipp', ',Shelden', ',Windham', ',Violante', ',Kile', ',Honey', 'Cullan', ',Karola', ',Humfried', ',Zulema', 'Aeauregard', ',Misti',
        ',Rolph', ',Jephthah', 'Aond', ',Mellisa', 'Alissa', 'Aurthur', ',Murdoch', 'Dolph', ',Melodee', ',Marianna', ',Yalonda', 'Ches', 'Alberta', ',Maxwell', ',Will', 'Charisse', 'Elden',
        'Emmalynne', 'Kermit', 'Elwira', ',Tootsie', 'Carol-jean', ',Ian', ',Kip', ',Tomaso', 'Gibbie', 'Alair', 'Carlita', 'Cleon', 'Archaimbaud', ',Marnia', ',Sascha', 'Arucie', 'Aev',
        ',Jilleen', ',Millisent', ',Melba', ',Myriam', ',Ketty', ',Laurie', 'Gusty', 'Emmy', 'Aren', ', Rob', ', Matthias', 'Corbett', 'Dag', 'Gottfried', ', Nichol', ', Rosmunda', 'Alena', ', Lil',
        'Fern', 'Dorella', 'Colline', ',Hy', ',Vincenty', 'Alasteir', ',Tedmund', ',Nicol', 'Fawne', 'Darb', 'Gladys', 'Cami', ',Kylila', ',Michail', ',Walsh', ',Zebulon', 'Aloysia', ',Sisely',
        ',Vivienne', ',Milly', 'Elizabet', 'Drugi', 'Aradney', ', Tadeas', 'Gusta', ', Jameson', ', Leandra', ', Maighdiln', ', Kristan', 'Averill', 'Aobina', ', Rebe', 'Elizabet', 'Alane', ',Martin',
        ',Rozamond', 'Ebba', 'Rory', 'Kristoffer', 'Clim', ', Knox', 'Chelsae', ', Rosita', ', Marlo', ', Ronny', 'Conny', ', Kamila', 'Eolanda', ',Isis', 'Clerkclaude', ',Nathanil', ',Hinda', ',Pietra',
        'Clementia', 'Dru', ',Renae', 'Dory', ',Jennie', ',Nani', 'Dael', 'Eugenio', 'Augusta', ', Mariam', ', Scotti', ', Hermon', ', Von', ', Jo - ann', 'Alexis', ', Jamison', 'Atlanta', 'Aentley', ', Martha',
        ',Walt', ',Rikki', ',Richardo', ',Lilah', ',Nye', 'Aank', 'Aeulah', ',Weber', 'Alexa', ',Porter', ',Jermayne', ',Jobye', 'Aibbye', 'Ailbert', 'Jackqueline', 'Rana', 'Josefa', ', Mozes', 'Aank',
        ',Katrinka', ',Stanislas', ',Stevie', ',Stanleigh', ',Tomaso', 'Georgetta', ',Witty', ',Sissie', ',Mil', ',Jemmy', ',Rochelle', 'Constantine', 'Corilla', ',Lesya', 'Ambrosi', 'Alanch', 'Farris',
        ',Kacy', 'Aleta', 'Georgi', ',Nannette', 'Ethelda', ', Simona', ', Sibilla', ', Obadias', 'Dalton', ', Romola', 'Aerty', ', Janela', 'Delila', ', Richmound', ', Hobart', ', Martynne', 'Antoine',
        ',Hansiain', ',Valentin', ',Moritz', ',Regina', ',Willie', 'Amity', ',Tamarra', ',Nathanil', 'Felicity', ',Juliana', ',Meta', 'Denys', 'Andrei', ',Valene', ',Penni', ',Langsdon', ',Maridel',
        'Ezmeralda', ', Jamison', ', Tirrell', ', Patrizia', ', Katina', 'Elle', ',Tommie', 'Carter', 'Chickie', ',Hubey', ',Patsy', ',Katherine', ',Melany', 'Aan', 'Carce', 'Arnold', 'Ailis', 'Aarb',
        'Denyse', 'Desirae', ',Nikos', ',Harmon', ',Kim', 'Edwina', 'Aran', ', Webb', ', Kellina', ', Lebbie', 'Adel', ', Melisse', 'Farly', ', Udall', ', Padraig', 'Edd', 'Alinny', ',Rita', 'Arendon',
        ',Winni', 'Gabriele', 'Francklin', ',Kerk', 'Elliot', ', Rolland', ', Peterus', ', Hadlee', 'Ambrosius', ', Wilma', ', Monte', ', Shantee', 'George', 'Anatollo', ', Lyell', ', Heddie', ', Sauncho',
        ',Roddy', 'Flinn', ',Helenka', ',Hashim', ',Herman', 'Aailie', ',Una', 'Carin', 'Arooks', 'Ado', 'Erastus', ', Otis', 'Carmon', 'Erhart', ',Massimo', ',Jobie', 'Dunc', ',Rhoda', ',Laryssa',
        'Delphinia', 'Eolanda', ', Naomi', 'Aertina', 'Elden', 'Gert', 'Tarrance', 'Cross', 'Culley', ', Saloma', ', Phillie', ', Leonora', 'Gilbert', ', Heall', 'Clement', 'Aridget', 'Donavon',
        'Zelda', 'Korie', ',Mariellen', 'Doralynne', ',Rhonda', 'Gaylord', 'Anthia', ',Laird', ',Nevsa', 'Judi', 'Duffy', ',Jephthah', ',Vernon', ',Yancey', 'Fanni', ',Othella', ',Nicolis', 'Corly',
        ',Ulrike', 'Adolphus', 'Chloette', ',Lotta', ',Rickie', 'Fitzgerald', ',Stillmann', ',Mel', ',Jerrine', ',Kean', ',Sherry', 'Elmer', 'Consalve', 'Egor', ',Sissie', 'Abbey', 'Alma',
        ',Sydney', 'Courtnay', ',Kata', ',Travus', 'Farica', 'Austen', ',Simonette', ',Steffi', ',Hashim', ',Yehudi', 'Emmalee', ', Max', 'Ashia', 'Giana', 'Clyde', ', Zeb', 'Garwood', ', Jeni',
        'Gibbie', 'Christie', 'Curt', 'Cherice', ',Novelia', ',Tilly', ',Kermit', 'Garwood', ',Rinaldo', 'Gerianna', ',Lauren', 'Gwenneth', 'Aarry', ',Marten', ',Woodrow', ',Vivien', ',Nerti',
        ',Mercedes', 'Charleen', ',Leyla', 'Ailis', ',Valenka', 'Fernande', 'Flor', 'Aloysia', ',Tobe', ',Mathias', ',Nanci', ',Maia', 'Giff', ',Maggee', ',Inglebert', ',Ursa', 'Cyndia', ',Paolina',
        'Dill', ',Oswell', ',Ricky', ',Timofei', 'Dorelia', ',Meris', ',Viv', ',Vanny', 'Gordon', ',Phillip', ',Sadella', 'Dehlia', ',Roderich', 'Ainslie', 'Edik', 'Aeverly', ', Zachery', ', Noland',
        'Eziechiele', 'Arit', 'Kore', 'Anne', ', Jena', ', Johny', 'Gabbie', ', Merry', ', Noemi', ', Maurizia', ', Zebulon', ', Raymund', 'Adella', ', Zita', ', Talya', ', Sibley', 'Alric', ', Rosalia', ', Trip', 'Aimil',
        'Davide', 'Edan', ', Sidney', 'Chicky', ', Randell', 'Christan', ', Ignace', ', Nathan', ', Hedi', ', Wilhelmina', ', Jacquelin', ', Rozamond', 'Chadd', ', Huberto', ', Klarika', 'Devan', ', Kean',
        'Frederique', ',Kelcie', 'Alexio', ',Jenni', ',Mariska', ',Janina', ',Lutero', 'Anjanette', 'Garrek', ',Raquela', 'Aonnie', ',Imogene', 'Donny', ',Shirl', 'Devinne', ',Philip', ',Selestina',
        'Farica', ',Lynette', ',Harlene', ',Martie', 'Cecelia', ',Merralee', 'Grier', ',Ysabel', ',Porty', 'Ertha', ', Melitta', ', Walt', 'Elle', 'Cleavland', 'Anselma', ',Irita', 'Ethelbert', ', Nathalia',
        ',Theresita', ',Rabi', ',Leonelle', ',Lia', ',Kara', 'Dunstan', 'Gunar', ',Nada', 'Edwina', ', Iver', ', Holly - anne', 'Erv', 'Devy', ',Wren', 'Elysia', ', Will', ', Pen', ', Towny', ', Henrie',
        'Cami', 'Ronda', ', Trixie', ', Janie', 'Eva', ',Willamina', ',Thalia', ',Tuck', 'Felizio', 'Eilis', ', Noam', ', Roddy', 'Catharina', 'Angelica', ', Thebault', 'Clarissa', ', Maritsa', 'Aida',
        ',Rosco', ',Wendye', ',Sabrina', ',Haley', ',Linda', 'Donella', ',Matias', ',Winnie', ',Lawry', ',Maryjo', ',Nannie', ',Rosemaria', ',Jaquenetta', ',Iona', ',Yanaton', 'Cinnamon', ',Jolynn',
        'Dulcy', 'Angie', 'Aettina', 'Conrade', 'Gerta', 'Culley', ',Salomo', 'Debby', ',Korry', ',Jory', 'Guendolen', 'Clementine', ',Hayley', 'Aentley', 'Gavrielle', ',Rani', ',Shirl', ',Sam',
        'Elaina', 'Cynde', 'Diane - marie', ', Merv', 'Aonnibelle', ', Martha', ', Shelbi', 'Arittne', ', Marchall', 'Dominik', ', Shannan', 'Amanda', 'Andrea', 'Gilli', ', Shandra', ', Rudd', ', Yance',
        'Ardelle', ',Madge', 'Cassandre', ',Lanie', ',Rollie', ',Jyoti', ',Niel', ',Jefferson', 'Dinnie', 'Andonis', 'Elden', 'Cele', ', Valentia', ', Tilda', 'Allina', 'Aeltran', ', Penny', 'Aondon',
        'Malissa', ',Norrie', 'Demetria', 'Joan', ',Penny', 'Anabelle', 'Dick', 'Orlando', 'Charyl', 'Aarbabas', ', Wallas', ', Will', ', Porter', 'Grange', ', Lauraine', ', Lucais', ', Justinian', ', Melicent',
        ', Joanne', ', Moira', 'Auguste', ', Malva', 'Eran', 'Arabella', 'Any', 'Eward', ', Mylo', ', Teriann', ', Newton', ', Lira', 'Aryn', ', Orlan', ', Maggee', 'Carlene', ', Keeley', 'Dulci', 'Cindelyn', 'Ginelle', 'Field', ', Janelle', ', Rori', 'Devin', ', Judie',
        ',May', ',Land', ',Logan', ',Margret', ',Willyt', 'Emmet', 'Dacey', ', Wyndham', 'Annnora', ', Humfrey', ', John', ', Manya', 'Carlota', ', Olly', ', Vilma', 'Fredi', 'Filide', ', Rorie', ', Nessa',
        'Archambault', 'Aeatrisa', 'Ardelis', ',Hendrik', ',Towny', ',Katha', 'Catharine', 'Ewan', 'Galen', ', Inglis', 'Dena', ', Tani', ', Sol', ', Torie', ', Lind', ', Sylvester', ', Hasheem', 'Gianina',
        ',Robbyn', 'Alvan', 'Shawn', 'Zachary', 'Aoniface', 'Christal', 'Carlynne', ',Marina', ',Jenine', 'Corrie', 'Averill', 'Camila', ',Richart', ',Idelle', ',Tiffani', ',Kally', ',Norbie', ',Shanan',
        ',Joyan', 'Gert', 'Faythe', 'Dana', 'Ede', ', Lamar', ', Joela', ', Tamara', 'Adina', ', Revkah', 'Dyane', 'Aecki', ', Regina', ', Neel', 'Eugenius', ',Rodie', ',Tyne', 'Andonis', ',Ulrike',
        ',Velvet', ',Patience', ',Meggie', 'Franciskus', ',Millicent', ',Jeane', 'Colet', 'Dacie', ',Mariam', ',West', 'Carrol', ',Phaidra', 'Corene', 'Aobbie', 'Adore', ',Pansie', 'Cross', ',Natalina',
        'Ford', 'Faustine', ',Idell', 'Arook', ',Rudyard', ',June', 'Adrian', ',Meghann', 'Darn', ',Miner', ',Opal', ',Henriette', 'Esmeralda', 'Dag', ', Osmund', ', Lari', ', Orelle',
        ',Luigi', ',Jacques', ',Odette', 'Gustavo', 'Clarence', 'Dewitt', 'Aldis', ',Yancey', 'Amalia', ',Norry', ',Morlee', ',Kalindi', 'Evyn', ', Idell', 'Tedda', ',Jobye', 'Constantine', ',Raimund',
        'Dannie', ',Viva', 'Carina', ',Levon', 'Cristabel', ',Kimmi', 'Albert', 'Ainslie', 'Joscelin', ',Nonie', 'Derek', ',Lay', ',Jyoti', ',Pen', ',Lilly', ',Sholom', 'Annora', ',Quinn', 'Gram',
        'Gregoor', 'Ferdy', ',Mariam', 'Ginni', 'Evy', ', Ulla', 'Adena', ', Pamelina', ', Ulrich', ', Heidie', ', Susann', 'Dosi', 'Agnes', ', Marlyn', ', Kin', 'Flss', 'Abrahan', 'Astra', 'Caddric',
        'Damien', 'Eolanda', ', Whitaker', ', Zia', ', Selestina', ', Wye', ', Willetta', ', Marietta', ', Sonnnie', 'Aert', ', Nancee', 'Ban', 'Cheslie',
        'Aryana', ',Sven', ',Libbey', ',Townie', 'Aarret', ',Tedra', 'Gerrilee', ',Sebastiano', 'Drew', 'Freida', 'Christoper', ',Nikolia', 'Boris', ',Rhett'];

    var countries = ['Pakistan', 'Brazil', 'China', 'Serbia', 'China', 'Indonesia', 'Guatemala', 'Benin', 'Czech Republic', 'Bulgaria', 'Bolivia', 'Malaysia', 'Ukraine', 'Philippines', 'South Korea',
        'Greece', 'China', 'China', 'Luxembourg', 'Armenia', 'China', 'Ethiopia', 'Syria', 'Indonesia', 'Brazil', 'Benin', 'Sweden', 'China', 'Estonia', 'Japan', 'Poland', 'Cyprus', 'Indonesia',
        'Ukraine', 'Indonesia', 'Brazil', 'China', 'Poland', 'Russia', 'Canada', 'China', 'Ukraine', 'China', 'Russia', 'China', 'China', 'Brazil', 'United States', 'Panama', 'Indonesia',
        'Armenia', 'Greece', 'Indonesia', 'Peru', 'United Kingdom', 'Honduras', 'Canada', 'Indonesia', 'China', 'Indonesia', 'South Africa', 'Japan', 'Philippines', 'Cameroon', 'Morocco',
        'Bulgaria', 'Brazil', 'China', 'Pakistan', 'United States', 'Indonesia', 'Poland', 'Iran', 'Indonesia', 'China', 'China', 'Japan', 'Russia', 'China', 'Indonesia', 'Greece', 'Greece',
        'China', 'Belarus', 'Mexico', 'Czech Republic', 'Philippines', 'China', 'Portugal', 'China', 'Colombia', 'China', 'Peru', 'United States', 'Ethiopia', 'Lesotho', 'China', 'Iran', 'Canada',
        'Russia', 'Sweden', 'Indonesia', 'China', 'Madagascar', 'China', 'France', 'Russia', 'China', 'Netherlands', 'China', 'Indonesia', 'Chile', 'Japan', 'Sweden', 'Russia', 'Philippines',
        'Saint Helena', 'Senegal', 'France', 'China', 'Croatia', 'United States', 'Nigeria', 'China', 'Philippines', 'China', 'Serbia', 'Canada', 'Brazil', 'Kyrgyzstan', 'Armenia', 'Luxembourg',
        'Indonesia', 'French Polynesia', 'Philippines', 'China', 'Armenia', 'Saudi Arabia', 'Philippines', 'Georgia', 'Russia', 'Nigeria', 'Poland', 'Russia', 'Democratic Republic of the Congo',
        'Indonesia', 'Peru', 'Brazil', 'France', 'Czech Republic', 'Indonesia', 'Colombia', 'Indonesia', 'Sweden', 'Madagascar', 'Yemen', 'Zambia', 'Philippines', 'Brazil', 'Poland', 'Nepal',
        'Russia', 'Indonesia', 'Russia', 'Germany', 'China', 'Thailand', 'Philippines', 'Czech Republic', 'Indonesia', 'Indonesia', 'China', 'Argentina', 'Russia', 'Czech Republic',
        'Brazil', 'Russia', 'Uganda', 'Portugal', 'Honduras', 'Ukraine', 'Spain', 'Ukraine', 'Russia', 'Indonesia', 'Vietnam', 'China', 'Netherlands', 'China', 'Poland', 'Brazil', 'Philippines',
        'Russia', 'Estonia', 'Philippines', 'Bahamas', 'South Africa', 'China', 'Albania', 'Indonesia', 'China', 'Indonesia', 'Mexico', 'Morocco', 'Mexico', 'United States', 'China', 'Uruguay',
        'Greece', 'China', 'United States', 'China', 'Portugal', 'Indonesia', 'China', 'Ghana', 'Philippines', 'Indonesia', 'China', 'Greece', 'Georgia', 'Czech Republic', 'China', 'Philippines', 'Russia',
        'Afghanistan', 'Greece', 'Indonesia', 'Indonesia', 'Poland', 'Indonesia', 'Portugal', 'China', 'Brazil', 'South Africa', 'Indonesia', 'Philippines', 'Serbia', 'United States', 'Japan',
        'China', 'Netherlands', 'Yemen', 'Japan', 'Ireland', 'Sweden', 'Poland', 'Sudan', 'Brazil', 'Portugal', 'Sweden', 'China', 'Sweden', 'Iran', 'Colombia', 'Cuba', 'Indonesia', 'Philippines',
        'Panama', 'Georgia', 'Ukraine', 'Philippines', 'Costa Rica', 'Brazil', 'Philippines', 'Indonesia', 'Dominican Republic', 'Portugal', 'Denmark', 'Ukraine', 'Libya', 'Poland', 'Argentina',
        'France', 'Slovenia', 'Netherlands', 'China', 'Sweden', 'Croatia', 'Palestinian Territory', 'Sweden', 'Indonesia', 'El Salvador', 'China', 'Indonesia', 'China', 'Brazil', 'Democratic Republic of the Congo',
        'Niue', 'Ukraine', 'Jamaica', 'Peru', 'Portugal', 'China', 'Iran', 'Russia', 'Czech Republic', 'China', 'Indonesia', 'Indonesia', 'China', 'Sweden', 'Venezuela', 'France', 'Dominican Republic', 'Indonesia',
        'Colombia', 'Ivory Coast', 'Brazil', 'El Salvador', 'Poland', 'Estonia', 'France', 'Palestinian Territory', 'Czech Republic', 'Serbia', 'Sri Lanka', 'Portugal', 'China', 'Portugal', 'United States',
        'Mexico', 'Peru', 'New Zealand', 'China', 'Indonesia', 'Bosnia and Herzegovina', 'Brazil', 'Philippines', 'China', 'Indonesia', 'Norway', 'Russia', 'Peru', 'Malaysia', 'China', 'China',
        'Indonesia', 'Russia', 'Afghanistan', 'Poland', 'Philippines', 'Indonesia', 'Brazil', 'Uganda', 'China', 'United States', 'Belarus', 'China', 'Ukraine', 'Canada', 'Nigeria', 'Indonesia', 'China',
        'Vietnam', 'China', 'United States', 'Madagascar', 'China', 'France', 'China', 'Canada', 'Portugal', 'Colombia', 'Philippines', 'Oman', 'Yemen', 'Poland', 'Bosnia and Herzegovina',
        'Russia', 'China', 'Tunisia', 'China', 'Czech Republic', 'China', 'China', 'China', 'Philippines', 'China', 'Brazil', 'Poland', 'Indonesia', 'Russia', 'China', 'France', 'Indonesia', 'Syria',
        'Russia', 'Slovenia', 'United Kingdom', 'Guatemala', 'Canada', 'Greece', 'Bangladesh', 'Poland', 'Papua New Guinea', 'Canada', 'Japan', 'United Kingdom', 'Greece', 'China', 'Czech Republic',
        'Philippines', 'Azerbaijan', 'Greece', 'China', 'Poland', 'France', 'Indonesia', 'Brazil', 'China', 'Vietnam', 'Chile', 'United States', 'Indonesia', 'Myanmar', 'Argentina', 'China', 'France',
        'Russia', 'Portugal', 'Philippines', 'Pakistan', 'China', 'China', 'China', 'Guinea', 'Haiti', 'Russia', 'Japan', 'Philippines', 'Brazil', 'Nigeria', 'Russia', 'United States', 'Indonesia',
        'France', 'China', 'Russia', 'China', 'China', 'China', 'Guam', 'China', 'Greece', 'Netherlands', 'Brazil', 'Portugal', 'South Africa', 'Democratic Republic of the Congo', 'Moldova',
        'Brazil', 'Indonesia', 'Yemen', 'France', 'Angola', 'China', 'Honduras', 'Argentina', 'Brazil', 'Russia', 'Nigeria', 'Chad', 'Poland', 'China', 'Saudi Arabia', 'China', 'Bulgaria',
        'Russia', 'Japan', 'Poland', 'Russia', 'China', 'Russia', 'China', 'Mongolia', 'Mexico', 'Jordan', 'Sweden', 'China', 'Croatia', 'China', 'Portugal', 'Norway', 'Brazil', 'Indonesia', 'Philippines',
        'Canada', 'Indonesia', 'Vietnam', 'Sweden', 'Russia', 'Portugal', 'China', 'Albania', 'China', 'China', 'United States', 'Chile', 'Indonesia', 'Peru', 'Argentina', 'China', 'Indonesia', 'Poland',
        'Indonesia', 'Portugal', 'Indonesia', 'Indonesia', 'Philippines', 'Portugal', 'Japan', 'Jordan', 'Paraguay', 'Sweden', 'South Africa', 'Indonesia', 'Poland', 'Indonesia', 'China',
        'Russia', 'China', 'Nicaragua', 'Indonesia', 'Russia', 'Argentina', 'China', 'Sweden', 'Ethiopia', 'Netherlands', 'Nigeria', 'Sweden', 'Poland', 'Indonesia', 'Russia', 'United States',
        'China', 'Portugal', 'China', 'Malaysia', 'Mauritania', 'Sweden', 'Malawi', 'Brazil', 'Czech Republic', 'Sweden', 'China', 'Russia', 'Macedonia', 'China', 'Brazil', 'Russia', 'Iran', 'China',
        'Indonesia', 'Portugal', 'Sweden', 'Papua New Guinea', 'Vietnam', 'China', 'Lesotho', 'Mexico', 'Portugal', 'Brazil', 'Guam', 'Bulgaria', 'Belarus', 'Brazil', 'China', 'Russia', 'China',
        'China', 'Pakistan', 'Brazil', 'Honduras', 'South Korea', 'Poland', 'China', 'Russia', 'Greece', 'Mexico', 'Poland', 'Poland', 'Japan', 'Philippines', 'China', 'Indonesia', 'Russia',
        'Indonesia', 'Peru', 'Thailand', 'Brazil', 'Indonesia', 'Uzbekistan', 'Ireland', 'China', 'Ireland', 'Portugal', 'Indonesia', 'Portugal', 'China', 'China', 'Portugal', 'Honduras', 'Palestinian Territory',
        'Moldova', 'Philippines', 'United States', 'Laos', 'China', 'Zambia', 'Indonesia', 'Nepal', 'China', 'Ukraine', 'Portugal', 'Colombia', 'Indonesia', 'France', 'Philippines,Philippines', 'Mongolia',
        'Indonesia', 'Zambia', 'Mexico', 'Brazil', 'Peru', 'China', 'Philippines', 'Russia', 'Argentina', 'Czech Republic', 'Brazil', 'Indonesia', 'Portugal', 'China', 'Peru', 'Egypt', 'China',
        'Czech Republic', 'Poland', 'Russia', 'Russia', 'Sudan', 'China', 'Mozambique', 'Portugal', 'Poland', 'Philippines', 'Syria', 'Philippines', 'United States', 'Philippines', 'France', 'China',
        'China', 'Tunisia', 'Indonesia', 'China', 'Russia', 'China', 'Venezuela', 'Luxembourg', 'China', 'Venezuela', 'China', 'Rwanda', 'Indonesia', 'China', 'United States', 'South Africa', 'China',
        'Indonesia', 'Myanmar', 'Russia', 'Philippines', 'Ireland', 'China', 'Indonesia', 'China', 'United States', 'Bangladesh', 'Ivory Coast', 'Venezuela', 'Philippines', 'Russia',
        'Thailand', 'Lithuania', 'China', 'Philippines', 'Germany', 'Palestinian Territory', 'China', 'Venezuela', 'Venezuela', 'Poland', 'Brazil', 'China', 'Argentina', 'China', 'Dominican Republic',
        'Indonesia', 'Ivory Coast', 'China', 'Benin', 'China', 'China', 'United States', 'Finland', 'Thailand', 'Indonesia', 'France', 'Indonesia', 'Portugal', 'Egypt', 'Nicaragua', 'Indonesia',
        'Iraq', 'Burkina Faso', 'Portugal', 'Bangladesh', 'China', 'Portugal', 'Madagascar', 'Indonesia', 'Costa Rica', 'Estonia', 'Argentina', 'Georgia', 'Thailand', 'China', 'China', 'Philippines',
        'China', 'Belarus', 'Brazil', 'China', 'Canada', 'Yemen', 'Sweden', 'China', 'Eritrea', 'Ireland', 'Serbia', 'Belarus', 'China', 'Macedonia', 'China', 'Nigeria', 'Indonesia', 'Philippines', 'Indonesia',
        'Ukraine', 'China', 'Peru', 'Indonesia', 'Albania', 'China', 'Slovenia', 'Colombia', 'Portugal', 'Philippines', 'Russia', 'Serbia', 'China', 'Libya', 'China', 'France', 'Germany',
        'Peru', 'Ivory Coast', 'Portugal', 'France', 'Brazil', 'China', 'Cameroon', 'China', 'United States', 'Portugal', 'Brazil', 'Japan', 'China', 'China', 'Portugal', 'Portugal', 'Australia', 'Philippines',
        'Canada', 'Philippines', 'Russia', 'France', 'Indonesia', 'France', 'China', 'Indonesia', 'Myanmar', 'Armenia', 'Russia', 'Philippines', 'Sweden', 'China', 'Chile', 'China', 'Peru', 'China',
        'Nigeria', 'Finland', 'Russia', 'Peru', 'Peru', 'Indonesia', 'Indonesia', 'Vietnam', 'Greece', 'Panama', 'Russia', 'Indonesia', 'Argentina', 'Philippines', 'Norway', 'China', 'France', 'China',
        'Russia', 'Mexico', 'China', 'Indonesia', 'Honduras', 'Greece', 'Armenia', 'China', 'Albania', 'Indonesia', 'Indonesia', 'Estonia', 'Kazakhstan', 'Sweden', 'Indonesia', 'Croatia', 'Denmark',
        'Dominica', 'Bosnia and Herzegovina', 'Portugal', 'Russia', 'China', 'China', 'Cameroon', 'Philippines', 'Portugal', 'Latvia', 'China', 'China', 'Peru', 'Estonia', 'Indonesia', 'Sweden',
        'South Africa', 'Afghanistan', 'United States', 'Indonesia', 'China', 'Ecuador', 'Russia', 'United States', 'Poland', 'Brazil', 'France', 'France', 'Indonesia', 'Russia', 'Brazil', 'Philippines',
        'Brazil', 'China', 'Portugal', 'Poland', 'Sweden', 'Portugal', 'China', 'Indonesia', 'Indonesia', 'Russia', 'Sweden', 'Japan', 'Brazil', 'Brazil', 'Albania', 'Japan', 'China', 'Philippines', 'Slovenia',
        'Greece', 'Philippines', 'China', 'China', 'China', 'Portugal', 'Japan', 'Yemen', 'China', 'Vietnam', 'Ghana', 'Bhutan', 'Indonesia', 'China', 'China', 'Indonesia', 'France', 'Indonesia', 'Thailand',
        'Ecuador', 'Panama', 'Indonesia', 'China', 'China', 'Portugal', 'China', 'Poland', 'Palestinian Territory', 'Russia', 'Nigeria', 'Sweden', 'Indonesia', 'New Zealand', 'United States', 'United States',
        'China', 'Brazil', 'China', 'Czech Republic', 'Philippines', 'Belgium', 'Indonesia', 'Laos', 'Philippines', 'China', 'Indonesia', 'China', 'China', 'Iran', 'Czech Republic', 'Philippines', 'Poland',
        'Poland', 'Indonesia', 'Thailand', 'Russia', 'United States', 'Syria', 'Portugal', 'Kazakhstan', 'Uruguay', 'Thailand', 'Colombia', 'United States', 'Brazil', 'Cameroon', 'Philippines', 'Russia',
        'Colombia', 'Sweden', 'China', 'Panama', 'Malawi', 'Philippines', 'Japan', 'Indonesia', 'Mauritius', 'Netherlands', 'China', 'Peru', 'China', 'Panama', 'Russia', 'Indonesia', 'French Polynesia', 'Russia',
        'Argentina', 'Pakistan', 'Kosovo', 'Jordan', 'Ukraine', 'Brazil', 'Indonesia', 'Japan', 'China', 'Philippines', 'Russia', 'China', 'Kuwait', 'Portugal', 'Indonesia', 'Vietnam', 'China', 'United States',
        'Argentina', 'Norway', 'Brazil', 'China', 'Indonesia', 'Ecuador'];


    for (let index = 0; index <= 1000; index++) {
        var session = driver.session();
        session
            .run('CREATE (n:Author {idAuthor:$idAuthor,name:$name, country:$country})', { idAuthor: uuidv4(), name: names[index], country: countries[index] })
            .then(author => {
                console.log("Ok");
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => session.close());
    }
    res.status(200).send({ msg: 'Se ha generado los autores de manera correcta' });
};


AuthorController.addAuthor = (req, res) => {
    var session = driver.session();
    session
        .run('CREATE (n:Author {idAuthor:$idAuthor,name:$name, country:$country})', { idAuthor: uuidv4(), name: req.body.name, country: req.body.country })
        .then(author => {
            req.flash('GOOD', 'Se ha guardado el autor con exito', 'back');
            console.log(author);
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
};

AuthorController.list = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (n:Author) RETURN n As Authors')
        .then(result => {
            var authors = [];
            result.records.forEach(record => {
                var aux = record.get('Authors').properties;
                authors.push(aux);
            });
            res.status(200).send(authors);
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
}

AuthorController.getAuthor = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (n { idAuthor: $idAuthor }) RETURN n As Author', { idAuthor: req.params.id })
        .then(result => {
            console.log(result);
            
            res.send(result.records[0].get('Author').properties);
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
}

AuthorController.editAuthor = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (n { idAuthor: $idAuthor }) SET n.name = $name, n.country = $country RETURN n As Author', { idAuthor: req.body.idAuthor, name: req.body.name, country: req.body.country })
        .then(result => {
            req.flash('GOOD', 'Se ha actualizado el autor con exito', 'back');
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
};


AuthorController.deleteAuthor = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (n { idAuthor: $idAuthor }) DETACH DELETE n', { idAuthor: req.body.idAuthor })
        .then(result => {
            req.flash('GOOD', 'Se ha eliminado el autor con exito', 'back');
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
};



AuthorController.relationBook = (req, res) => {
    var session = driver.session();
    session
        .run("MATCH (a:Author),(b:Book) WHERE a.idAuthor=$idAuthor AND b.idBook=$idBook CREATE(a)-[:WRITED {year: $year}]->(b)", { idAuthor: req.body.idAuthor, idBook: req.body.idBook, year: req.body.year })
        .then(result => {
            console.log(result);
            req.flash('GOOD', 'Se ha realizado la relacion con éxito', 'back');
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
};

AuthorController.getBooks = (req, res) => {
    var session = driver.session();
    session
        .run('MATCH (author)-[:WRITED]-(book) WHERE author.idAuthor = $idAuthor RETURN book.title AS Books', { idAuthor: req.params.idAuthor })
        .then(result => {
            var authorBooks = [];
            var aux = {};
            console.log(result);
            
            result.records.forEach(record => {
                aux.name = record.get('Books');
                authorBooks.push(aux);
            });
            res.send(authorBooks);
        })
        .catch(error => {
            req.flash('BAD', 'Ha ocurrido un error', 'back');
            console.log(error);
        })
        .then(() => session.close());
};

module.exports = AuthorController;