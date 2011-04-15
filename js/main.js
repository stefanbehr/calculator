$(document).ready(function() {
    var operand = '';
    var operands = [];
    var operators = [];
    var resultOperandFlag = false;
    
    $(".digits .digit").click(function() {
        if (resultOperandFlag) {
            operand = '';
            resultOperandFlag = false;
        }
        var digit = $(this).text();
        if (operand.length < 23 && operand != '0') {
            operand += digit;
        }
        $("#display").text(operand);
    });
    
    $("#operators .operator").click(function() {
        if (operand != '') {
            operands.push(operand);
            operand = '';
            resultOperandFlag = false;
            
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
                result = eval(expression).toString();
                $("#display").text(result);
                operand = result;
                resultOperandFlag = true;
            }            
        }
    });
    
    $("#clear").click(function() {
        $("#display").text("");
        operands = [];
        operators = [];
        operand = '';
    });
});