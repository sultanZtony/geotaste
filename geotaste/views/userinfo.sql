CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL,
    `password` varchar(225) NOT NULL, 
    `email ` varchar(100) NOT NULL,
    PRIMARY KEY (`id1`)
    UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci

INSERT INTO users(first_name, last_name, username, password, email)
VALUES('Sneha', 'Yendluri', 'snye8655', 'colorado123!', 'snye8655@colorado.edu'),
('Filip', 'Casey', 'fica4568', 'colorado123!', 'fica4568@colorado.edu'),
('Mackenzie', 'Elmhirst', 'mael0818', 'colorado123!', 'mael0818@colorado.edu'),
('Kelly', 'Walsh', 'wawa1919', 'colorado123!', 'wawa1919@colorado.edu'),
('Alex', 'Pederson', ' alpe1974', 'colorado123!', 'alpe1974@colorado.edu'),
('Sultan', 'Alshakrah', 'sual1972', 'colorado123!', 'sual1972@colorado.edu')
;