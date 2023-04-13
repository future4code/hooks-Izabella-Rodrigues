### Relações em SQL

#### Exercicio 01:

    a) Chave Estrangeira é o que relacion uma tabela a outra, cria uma referencia.

    b) Query: 

    ~~~ CREATE TABLE Movies (
	    id VARCHAR(100) UNIQUE PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
	    ticket_price DECIMAL(8, 2) NOT NULL
    );

        CREATE TABLE Rating (
            id_rating VARCHAR(100) UNIQUE PRIMARY KEY,
            coment TEXT NOT NULL,
            evaluation FLOAT NOT NULL,
            id_movies VARCHAR(100),
            FOREIGN KEY (id_movies) REFERENCES Movies(id)
        );

        INSERT INTO Movies (id, name, ticket_price) 
            VALUES (123, "Crepusculo", 20),
                    (321, "Lua_Nova", 25),
                    (456, "Eclipse", 30),
                    (654, "Amanhecer", 32);

        INSERT INTO Rating (id_rating, coment, evaluation, id_movies)
            VALUES (01, "Very Good!", 7, 123), 
                    (02, "Could Be Better!", 5, 321),
                    (03, "Best Movie So Far", 8, 456),
                    (04, "The best Movie!!!", 9, 654); ~~~

    c)   Quando usamos um Id invalido informa que não é possivel adicionar ou atualizar uma linha filha pois existe uma restrição de chave estrangeira, ou seja, o ID passado não é encontrado na tabela "mãe" e por isso não pode ser adicionado nada na tabela a qual ele esta fazendo referencia.

    ~~~ INSERT INTO Rating (id_rating, coment, evaluation, id_movies)
	    VALUES (05, "Very Good", 8, 555); ~~~


    d) 

     ~~~ALTER TABLE Rating
        DROP COLUMN evaluation;~~~

    e) Não foi possivel apagar, deu um erro de chave primaria e segurança, onde ele informa que não é possivel usar o acesso de intervalos no indice devido a conversão de tipo ou agrupamento no campo id. 

        ~~~DELETE FROM Movies
            WHERE id = 123; ~~~

##### Exercicio 02:

    ~~~CREATE TABLE Actors (
        id_actors VARCHAR(100) UNIQUE PRIMARY KEY,
        name VARCHAR(20) NOT NULL
    );

    INSERT INTO Actors (id_actors, name)
        VALUES (001, "Robert_Pattison"),
                (002, "Kristen_Stewart"),
                (003, "Taylor_Lautner"),
                (004, "Billy_Burke"),
                (005, "Peter_Facinelli"),
                (006, "Ashley_Greene"),
                (007, "Nikki_Reed"),
                (008, "Sarah_Clarke");
                
    CREATE TABLE MovieCast (
        id_movies VARCHAR(100),
        id_actors VARCHAR(100),
        FOREIGN KEY (id_movies) REFERENCES Movies(id),
        FOREIGN KEY (id_actors) REFERENCES Actors(id_actors)
    );~~~

    a) É uma tabela que referencia a tabela de filmes e atores através do ID de ambas.

    b)

    ~~~ INSERT INTO MovieCast (id_movies, id_actors)	
            VALUES (123, 004),
                    (123, 001),
                    (123, 002),
                    (321, 004),
                    (321, 003),
                    (321, 001),
                    (456, 007),
                    (456, 008),
                    (456, 002); ~~~


    c) Quando usamos um Id invalido informa que não é possivel adicionar ou atualizar uma linha filha pois existe uma restrição de chave estrangeira, ou seja, o ID passado não é encontrado na tabela "mãe" e por isso não pode ser adicionado nada na tabela a qual ele esta fazendo referencia.

     ~~~INSERT INTO MovieCast (id_movies, id_actors)	
        VALUES (123, 009); ~~~

    d) Não foi possivel apagar, deu um erro de chave primaria e segurança, onde ele informa que não é possivel usar o acesso de intervalos no indice devido a conversão de tipo ou agrupamento no campo id.  

     ~~~DELETE FROM Actors
        WHERE id_actors = 001;~~~

    

#### Exercicio 03:

    ~~~ SELECT * FROM Movies
        INNER JOIN Rating ON Movies.id = Rating.id_movies;~~~

    a) **ON = SOBRE** ou seja, quando ele é usado na query INNER JOIN ele serve como operador de união, possibilitando colocar as informações que queremos trazer de ambas as tabelas.

b)
    ~~~ SELECT Movies.name, Movies.id, Rating.coment FROM Movies
        INNER JOIN Rating ON Movies.id = Rating.id_movies;~~~
