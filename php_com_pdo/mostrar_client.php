<?php

$acao = 'listar';
require 'cliente_control.php';
print_r($clientes);
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<h1>	LISTA DE CLIENTES	</h1>

<? foreach ($clientes as$indice=>$cliente) { ?>

		<div>
			<?$tarefa->tarefa?>
		</div>


	
<? } ?>

</body>
</html>