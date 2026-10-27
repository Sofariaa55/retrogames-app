CREATE DATABASE IF NOT EXISTS db_retrogames;

USE db_retrogames;

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    plataforma VARCHAR(50) NOT NULL,
    desenvolvedora VARCHAR(100) NOT NULL,
    imagem_url VARCHAR(500) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jogos
(titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES
(
    'Super Mario World',
    'SNES',
    'Nintendo',
    'https://placehold.co/300x200?text=Super+Mario+World',
    99.90
);

INSERT INTO jogos
(titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES
(
    'Sonic the Hedgehog',
    'Mega Drive',
    'Sega',
    'https://placehold.co/300x200?text=Sonic',
    79.90
);

INSERT INTO jogos
(titulo, plataforma, desenvolvedora, imagem_url, preco)
VALUES
(
    'Crash Bandicoot',
    'PlayStation 1',
    'Naughty Dog',
    'https://placehold.co/300x200?text=Crash+Bandicoot',
    89.90
);