<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anatomia Quiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 20px;
        }

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .question {
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }

        input[type="radio"] {
            margin-right: 5px;
        }

        input[type="submit"] {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4caf50;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .correct {
            color: #4caf50;
            font-weight: bold;
        }

        .incorrect {
            color: #f44336;
            font-weight: bold;
        }

        .result {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <form action="index.php" method="post">
        <?php
        // Pobieramy pytania z pliku
        $questions = file("pytania.txt", FILE_IGNORE_NEW_LINES);
        // Pobieramy odpowiedzi z pliku
        $answers = file("odpowiedzi.txt", FILE_IGNORE_NEW_LINES);

        // Inicjalizujemy licznik pytań
        $questionCount = 0;

        // Iterujemy przez pytania
        foreach ($questions as $line) {
            // Sprawdzamy, czy linia zawiera numer pytania
            if (preg_match('/^(\d+\.\s+)(.+)/', $line, $matches)) {
                $questionCount++;
                $questionNumber = $matches[1];
                $questionText = $matches[2];
                echo "<div class='question'>$questionNumber$questionText</div>";
            } elseif (!empty($line)) {
                // Zakładamy, że odpowiedzi są niepuste
                $questionKey = "question$questionCount";
                $cleanedLine = preg_replace('/^[A-Z]\.\s+/', '', $line); // Usuwamy literę przed odpowiedzią
                echo "<input type='radio' name='$questionKey' value='$cleanedLine'> $cleanedLine<br>";
            } else {
                echo "<br>";
            }
        }
        ?>

        <input type="submit" value="Sprawdź odpowiedzi">
    </form>

    <?php
    // Sprawdzamy, czy formularz został przesłany
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Początkowa wartość punktacji
        $score = 0;

        // Iterujemy przez pytania i odpowiedzi
        for ($i = 0; $i < count($questions); $i++) {
            $questionKey = "question" . ($i + 1);

            // Sprawdzamy, czy istnieje odpowiedź na dane pytanie w formularzu
            if (isset($_POST[$questionKey])) {
                $selectedAnswer = $_POST[$questionKey];

                // Sprawdzamy, czy istnieje prawidłowa odpowiedź dla danego pytania
                $correctAnswerIndex = $i; // Indeks odpowiedzi dla danego pytania
                if (isset($answers[$correctAnswerIndex])) {
                    $correctAnswer = strtolower(trim(preg_replace('/\s+/', ' ', $answers[$correctAnswerIndex])));

                    // Sprawdzamy, czy udzielona odpowiedź jest poprawna
                    if (strtolower(trim($selectedAnswer)) == $correctAnswer) {
                        $score++;
                        echo "<p class='correct'>Poprawna odpowiedź na pytanie " . ($i + 1) . ": $correctAnswer</p>";
                    } else {
                        echo "<p class='incorrect'>Błędna odpowiedź na pytanie " . ($i + 1) . ": $correctAnswer</p>";
                    }
                }
            }
        }

        // Wyświetlamy wynik
        echo "<p class='result'>Twój wynik to: $score / " . $questionCount . "</p>";
    }
    ?>
</body>
</html>
