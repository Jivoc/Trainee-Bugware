<?php

$acao = 'inserir';
require 'cliente_control.php';

?>
<html>
<head>
	<title>teste</title>
	<meta charset="utf-8">
</head>
<body>
	<form method="post" action="prot/cliente_control_back.php>
		<input type="text" placeholder="Nome" name="Nome">
		<br/>
		<input type="text" placeholder="CPF" name="CPF">
		<br/>	
		<button>Entrar</button>
	</form>

</body>
</html>