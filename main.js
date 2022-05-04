function calcular() {
			var primeiro = document.getElementById('primeiroNum');
			var segundo = document.getElementById('segundoNum');
			var operação = document.querySelector('#opcoesOp').value;

			if (operação == 'soma') {

				var soma = Number(primeiro.value) + Number(segundo.value);
				var result = document.getElementById('resultado');
				result.innerHTML = `O resultado é ${soma}! Acertou, mizerávi`;

			} else if (operação == 'subtração') {
				
				var subtracao = Number(primeiro.value) - Number(segundo.value);
				var result = document.getElementById('resultado');
				result.innerHTML = `O resultado é ${subtracao}!`;

			} else if (operação == 'multiplicação') {

				var multiplicacao = Number(primeiro.value) * Number(segundo.value);
				var result = document.getElementById('resultado');
				result.innerHTML = `O resultado é ${multiplicacao}!`;

			} else if (operação == 'divisão') {

				var divisao = Number(primeiro.value) / Number(segundo.value);
				var result = document.getElementById('resultado');
				result.innerHTML = `O resultado é ${divisao}!`;
			}

		}