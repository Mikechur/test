
DROP TABLE IF EXISTS `names`;

CREATE TABLE names (
id INT(10) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
manager_id INT(10) NULL,
PRIMARY KEY(id)
) ENGINE = InnoDB;


INSERT INTO names (id, name, manager_id)
 VALUES (1,'Boss', NULL),
	(2,'Sales Manager', 1),
	(3,'Secretary', 1),
	(4,'Sale 1', 3),
	(5,'Sale 1', 3),
	(6,'Secretary', 3),
	(7,'Boss', NULL);




