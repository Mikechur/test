
DROP TABLE IF EXISTS `names`;

CREATE TABLE names (
id INT(10) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
PRIMARY KEY(id)
) ENGINE = InnoDB;

INSERT INTO names (name)
 VALUES ('Boss'),('Secretary'), ('Sale'), ('Sale'), ('Boss');