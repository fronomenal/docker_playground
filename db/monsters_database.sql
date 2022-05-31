CREATE TABLE monsters(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	personality VARCHAR(50),
	home INT,
	FOREIGN KEY (home) REFERENCES habitats(id)
);

CREATE TABLE habitats(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	climate VARCHAR(50),
	temperature int
);

INSERT INTO habitats(name, climate, temperature)
VALUES
('desert','dry',100),
('forest','haunted',70),
('mountain','icy',30);

INSERT INTO monsters(name, personality, home)
VALUES
('Fluffy','aggressive', 1),
('Noodles','impatient', 2),
('Rusty','passionate', 3);