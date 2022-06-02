const seeder =[
`CREATE TABLE habitats(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	climate VARCHAR(50),
	temperature INT
);`
,
`CREATE TABLE creatures(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	personality VARCHAR(50),
	home INT,
	FOREIGN KEY (home) REFERENCES habitats(id)
);`
,
`INSERT INTO habitats(name, climate, temperature)
VALUES
('desert','dry',100),
('forest','haunted',70),
('mountain','icy',30);`
,
`INSERT INTO creatures(name, personality, home)
VALUES
('Fluffy','aggressive', 1),
('Noodles','impatient', 2),
('Rusty','passionate', 3);`
]

module.exports = seeder;