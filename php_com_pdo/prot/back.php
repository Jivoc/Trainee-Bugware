<?php
	class cliente 
	{
		private $Nome;
		private $CPF;

		public function__get($atributo){
			return $this->$atributo;
		}
		public function__set($atributo, $valor ){
			$this->$atributo = $valor;
		}
	}
?>