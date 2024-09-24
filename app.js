var userTable = +prompt("Enter table no:");


for (var i = 1; i <= userTable; userTable--) {

    for (var h = 1; h <= 10; h++) {
        document.write(userTable + " x " + h + " = ", h * userTable, "<br>")
    }
    document.write("<br>")

}