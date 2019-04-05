use dados191n;

-- -----------------------------------------------------
-- Table `dados191n`.`autores`
-- -----------------------------------------------------
insert into dados191n.autores 
		(aut_nome, aut_apelido, aut_sexo, aut_telefone, aut_email) 
values 	('Fernando Chinaglia', 'Fernando', 'M', '11-5205-4907', ''),
		('Aguinaldo Aragon Fernandes', 'Aguinaldo', 'M', '21-2568-1507', ''),
		('Vladimir Ferraz de Abreu', 'Vladimir', 'M', '11-2148-1437', ''),
		('Willian Stallings', 'Stallings', 'M', '', '');


-- -----------------------------------------------------
-- Table `dados191n`.`editoras`
-- -----------------------------------------------------		
insert into dados191n.editoras 
		(edt_nome, edt_cidade, edt_cep, edt_estado, edt_email, edt_telefone) 
values 	('BRASPORT Livros e Multimídia Ltda', 'Rio de Janeiro', '20270-280', 'RJ', 'editorial@brasport.com.br', '21-2568-1415'),
		('Pearson Education do Brasil', 'São Paulo', '02712-100', 'SP', 'vendas@pearson.com', '11-2178-8688'),
		('Editoria Makron Books', 'São Paulo', '05083-130', 'SP', 'editorial@mbooks.com.br', '11-3641-5314'),
		('Editora Ano Zero Ltda', 'Rio de Janeiro', '22210-010', 'RJ', 'editorial@editoraanozero.com.br', '11-205-4907');

		
-- -----------------------------------------------------
-- Table `dados191n`.`livros`
-- -----------------------------------------------------
insert into dados191n.livros 
		(liv_titulo, liv_edicao, liv_isbn, liv_ano, aut_codigo, edt_codigo) 
values 	('Dominando o Delphi 7 - A Biblia', '1ª Edição', '853-46-1408-3', '2001','3','1'),
		('Arquitetura e Organização de Computadores ', '8ª Edição', '978-85-7605-564-8', '2010','2','1'),
		('Implantando a Governança de TI', '4ª Edição', '978-85-7452-658-4', '2014','1','2'),
		('dBase III Plus - Master Informática', '1ª Edição', '84-88094-03-05', '1992','4','1');

		
		

		