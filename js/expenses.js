function addBudget(){
    var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    let addmoney = parseInt(document.getElementById("userBudget").value);
    while (addmoney == "" || isNaN(addmoney)) {
        alert("please enter a valid amount in numbers")
    }
    totalBudget += addmoney;
    currentBalance += addmoney;
    document.getElementById("totalBudget").innerHTML = totalBudget;
    document.getElementById("currentBalance").innerHTML = currentBalance;

    document.getElementById("userBudget").value = "";
}

function addExpense(){
    // var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var ExpenseName = document.getElementById("userExp").value;
    var ExpenseAmount = document.getElementById("userAmt").value;
    if(ExpenseName.length =="" || (!isNaN(ExpenseName))){
        alert("please enter a valid Expenses name")
    }else if (ExpenseAmount == "" || isNaN(ExpenseAmount)) {
        alert("please enter a valid Expenses Amount")
    } else if(ExpenseAmount <= currentBalance ){
        currentBalance -= ExpenseAmount;
        document.getElementById("currentBalance").innerHTML= currentBalance;
        var paragraph = document.createElement("p")
        paragraph.innerHTML= "Expense Name : " + ExpenseName + "<br>" + "Expense Amount : " + ExpenseAmount;
        document.getElementById("parent").appendChild(paragraph);

        document.getElementById("userExp").value= "";
        document.getElementById("userAmt").value= "";
    }else{
        alert("Expense Amount is higher than current Balance");
    }
}