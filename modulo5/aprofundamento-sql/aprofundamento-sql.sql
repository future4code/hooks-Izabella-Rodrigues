USE `hooks-4313371-izabella-rodrigues`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projects (
id INT PRIMARY KEY,
name VARCHAR(55) UNIQUE NOT NULL,
title VARCHAR(255) NOT NULL,
date DATE NOT NULL
);

SELECT * FROM Projects;

INSERT INTO Projects (id, name, title, date) 
VALUES (1, "001", "LSy", "2023/10/05"),
(2, "Labefy", "LFy", "2024/01/06"),
(3, "AstroZoom", "AZm", "2022/12/20");

UPDATE Projects 
SET name = "LabeSky"
WHERE id = 1;

ALTER TABLE Projects
DROP COLUMN title;

DESCRIBE Projects;

ALTER TABLE Projects 
CHANGE date dueDate VARCHAR(255) NOT NULL;


SELECT * FROM Projects;

ALTER TABLE Projects
ADD email VARCHAR(255) UNIQUE;

ALTER TABLE Projects 
CHANGE dueDate dueDate VARCHAR(255) NOT NULL;

ALTER TABLE Projects
ADD description VARCHAR(300) NOT NULL;

UPDATE Projects
SET description = "Projeto de sistema em nuvem da Labenu." 
WHERE id = 1;

UPDATE Projects
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 2;

UPDATE Projects
SET description = "Projeto de rede de comunicação da Labenu."
WHERE id = 3;

SELECT * FROM Projects;

SELECT id, name, dueDate, email, description
FROM Projects
ORDER BY dueDate DESC;

SELECT name, dueDate
FROM Projects
ORDER BY dueDate ASC
LIMIT 0, 2;