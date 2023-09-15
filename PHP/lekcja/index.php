<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php
echo 'Pierwsza linia';
echo '<br>';
@require("ab.php");
echo '<br>';
echo 'Ostatnia linia';
echo '<br>';

echo 'nasza zmienna zawiera ';
echo ($a);
define("STRONA","http://koleksiak.github.io");
echo '<br>';
?>    
<a href="<?php
echo (STRONA)
?>"><?php
echo (STRONA)
?></a>
</body>
</html>