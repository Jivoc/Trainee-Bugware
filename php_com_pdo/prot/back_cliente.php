<?php

	class crud
	{
		private $conexao;
		private $cliente; 

		public function __construct(conexao $conexao, cliente $cliente)
		{
			$this->conexao = $conexao->conectar();
			$this->cliente = $cliente;
		}

		public function inserir ()
		{
			$query='insert into cliente(cliente)values(:cliente)';
			$stmt = $this->conexao->prepare($query);
			$stmt->bindValue(':cliente',$this->cliente->__get('cliente'));
		}
		public function editar ()
		{
			$query = 'select Nome,CPF from cliente';
			$stmt = $this->conexao->prepare($query);
			$stmt->execute();
			return $stmt->fechtAll(PDO::FETCH_OBJ);
		}
		public function listar ()
		{
			
		}
		public function deletar ()
		{
			
		}

	}



?>