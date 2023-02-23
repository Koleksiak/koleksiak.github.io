#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

const int ROWS = 10;
const int COLS = 10;
const int ROWSa = 10;
const int COLSa = 10;

int main() {
  char grid[ROWS][COLS];
  char grida[ROWS][COLS];
  

  // Inicjalizacja generatora liczb pseudolosowych
  srand(time(NULL));

  // Wype³nienie tablicy "-" oznaczaj¹cymi puste pola
  for (int i = 0; i < ROWS; i++) {
    for (int j = 0; j < COLS; j++) {
      grid[i][j] = '-';
    }
  }
  for (int i = 0; i < ROWSa; i++) {
    for (int j = 0; j < COLS; j++) {
      grida[i][j] = '-';
    }
  }
  // Wype³nienie piêcioma losowymi "x" oznaczaj¹cymi statki
  int num_ships = 5;

  while (num_ships > 0) {
    int x = rand() % ROWS;
    int y = rand() % COLS;

    if (grid[x][y] == '-') {
      grid[x][y] = '+';
      num_ships--;
    }
  }

  // Mechanizm strzelania
  while (true) {
    int x, y;
    cout << "Podaj wspolrzedne pola, na ktore chcesz oddac strzal (od 0 do 9): ";
    cin >> x >> y;

    if (grid[x][y] == '+') {
      cout << "TRAFIONY!" << endl;
      grida[x][y] = 'x';
    } else {
      cout << "PUDLO!" << endl;
      grida[x][y] = 'z';
    }

    // Wyswietlenie planszy
    for (int i = 0; i < ROWS; i++) {
      for (int j = 0; j < COLS; j++) {
        cout << grida[i][j] << " ";
      }
      cout << endl;
    }
    
    // Sprawdzenie, czy pozostaly jakies statki
        bool any_ships_left = false;
    for (int i = 0; i < ROWS; i++) {
      for (int j = 0; j < COLS; j++) {
        if (grid[i][j] == '+') {
          any_ships_left = true;
          break;
        }
      }
      if (any_ships_left) {
        break;
      }
    }

    if (!any_ships_left) {
      cout << "WYGRANA!" << endl;
      break;
    }
  }

  return 0;
}
