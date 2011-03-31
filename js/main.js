$(document).ready(function() {
	var operand = '';
	var operands = [];
	var operators = [];
	
	$("#digits .digit").click(function() {
		var digit = $(this).text();
		if (operand.length < 21 && (operand != '' || digit != "0")) {
			operand += digit;
		}
		$("#display").text(operand);
	});
	
	$("#operators .operator").click(function() {
		if (operand != '') {
			operands.push(operand);
			operand = '';
			
			var operator = $(this).text();
			
			if (operator != "=") {
				operators.push(operator);
			} else {
				operators.reverse();
				operands.reverse();
				var expression = '';
				while (operators.length != 0) {
					expression += operands.pop() + operators.pop();
				}
				expression += operands.pop();
				$("#display").text(eval(expression).toString());
				operands = [];
				operators = [];
			}			
		}
	});
});