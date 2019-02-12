<?php

		require "../../prot/back.php"; //model
		require "../../prot/back_cliente.php"; //services
		require "../../prot/back_conect.php"; //conexao

      if($acao == 'inserir')
      {
  
  		$cliente = new cliente();
  		$cliente->__set('Nome', $_POST['Nome']);
  		$cliente->__set('CPF', $_POST['CPF']);

  		$conexao = new conexao(); //conexao

  		$crud = new crud($conexao, $cliente);
  		$crud->inserir();

  		header('Location: criar_cliente.php?inclusao=1')
  		}
      else if($acao == 'listar'){

        $cliente = new cliente();
        $conexao = new conexao();

        $crud = new crud($conexao, $cliente);
        $clientes = $crud->listar(); 
        
      }

?>