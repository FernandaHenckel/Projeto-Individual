create database 1d;

use 1d;

create table usuario(
	id int primary key auto_increment,
	nome varchar(50) not null,
	email varchar(50) not null unique,
	senha varchar(50) not null,
	album int not null
);

create table quiz (
idTentativa int primary key auto_increment,
fk_usuario int not null,
pontuacao int not null,
constraint fk_quiz foreign key (fk_usuario) references usuario(id)
);

select * from usuario;

SELECT * FROM quiz;

select pontuacao from quiz;

select pontuacao as pontuacao from quiz;

-- select nome do usuário e a pontuação para dashboard
select u.nome, q.pontuacao from usuario u join quiz q on q.fk_usuario = u.id order by q.pontuacao;

-- reunindo a quantidade de cada álbum
select album, count(album) as quantidadeAlbum from usuario group by album;

-- pegando o álbum favorito entre os usuários
select album, count(album) as quantidadeAlbum from usuario group by album order by quantidadeAlbum desc limit 1;

-- indicador para mostrar a pessoa que mais fez ponto no quiz
select u.nome, q.pontuacao from usuario u join quiz q on q.fk_usuario = u.id order by q.pontuacao desc limit 1;
