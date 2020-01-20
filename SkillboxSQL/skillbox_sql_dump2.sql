
DROP TABLE IF EXISTS `teachers`;

CREATE TABLE names (
id INT(10) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
PRIMARY KEY(id)
) ENGINE = InnoDB;

INSERT INTO names (name)
 VALUES ('Boss'),('Secretary'), ('Sale'), ('Sale'), ('Boss');



DROP TABLE IF EXISTS `students`;

CREATE TABLE names (
id INT(10) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
teacher_id INT(100) unsigned,
PRIMARY KEY(id),
KEY teacher_idx (teacher_id),
CONSTRAINT teacher FOREIGN KEY (teacher_id) REFERENCES Teachers(id)
) ENGINE = InnoDB;

INSERT INTO names (name)
 VALUES ('Boss'),('Secretary'), ('Sale'), ('Sale'), ('Boss');