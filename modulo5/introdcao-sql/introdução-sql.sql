SET SQL_SAFE_UPDATES = 0;

USE `hooks-4313371-izabella-rodrigues`;

CREATE TABLE Funcionarios (
	id VARCHAR(10) PRIMARY KEY,
    nome VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE
    );


INSERT INTO Funcionarios (id, nome, email)
VALUES (001, "Luana", "lua@lbn.com"), 
(002, "Vinicius", "vini@lbn.com"),
(003, "Laura", "lau@lbn.com");

SELECT * FROM Funcionarios;

SELECT id as identifier, nome 
FROM Funcionarios;

SELECT * FROM Funcionarios
WHERE nome= "Laura";

SELECT * FROM Funcionarios
WHERE nome LIKE "%a%";

SELECT * FROM Funcionarios
WHERE nome NOT LIKE"%r%" and email LIKE "%u%";

INSERT INTO Funcionarios (id, nome, email)
VALUES ("004", "Yuzo", "yuzo@lbn.com");

SELECT * FROM Funcionarios;

DELETE FROM Funcionarios
WHERE id="004";

SELECT * FROM Funcionarios;

UPDATE Funcionarios
SET email = "lau@lbn.com"
WHERE id="003";

