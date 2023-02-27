#include <bits/stdc++.h>
#include<iostream>
#include <stdio.h>
#include <stdbool.h>
#include<algorithm>
using namespace std;
struct gracze{  
  char graczee[25];
  int wynik;
  bool operator < (const gracze &x)const 
  {                
    return wynik>x.wynik;
  }
};
int main()
{
    int ga,gb,gc,gd,ge,gaa,gab,gac,gad,gae,wa,wb,wc,wd,we;
    string str = "dbbaCEDbdAacCEAadcB";
    cout << "Liczba punktow litery gracza a : "
         << count(str.begin(), str.end(), 'a' ) << endl;
    cout << "Liczba punktow ujemnych litery gracza a : "
         << count(str.begin(), str.end(), 'A' ) << endl;
    cout << "Liczba punktow litery gracza b : "
         << count(str.begin(), str.end(), 'b' ) << endl;
    cout << "Liczba punktow ujemnych litery gracza b : "
         << count(str.begin(), str.end(), 'B' ) << endl;
             cout << "Liczba punktow litery gracza c : "
         << count(str.begin(), str.end(), 'c' ) << endl;
    cout << "Liczba punktow ujemnych litery gracza c : "
         << count(str.begin(), str.end(), 'C' ) << endl;
    cout << "Liczba punktow litery gracza d : "
            << count(str.begin(), str.end(), 'd' ) << endl;
    cout << "Liczba punktow ujemnych litery gracza d : "
         << count(str.begin(), str.end(), 'D' ) << endl;
             cout << "Liczba punktow litery gracza e : "
            << count(str.begin(), str.end(), 'e' ) << endl;
    cout << "Liczba punktow ujemnych litery gracza E : "
         << count(str.begin(), str.end(), 'E' ) << endl;
    ga = count(str.begin(), str.end(), 'a' );
    gaa = count(str.begin(), str.end(), 'A' );
        gb = count(str.begin(), str.end(), 'b' );
    gab = count(str.begin(), str.end(), 'B' );
        gc = count(str.begin(), str.end(), 'c' );
    gac = count(str.begin(), str.end(), 'C' );
        gd = count(str.begin(), str.end(), 'd' );
    gad = count(str.begin(), str.end(), 'D' );
        ge = count(str.begin(), str.end(), 'e' );
    gae = count(str.begin(), str.end(), 'E' );   
    wa=ga-gaa;
    wb=gb-gab;
    wc=gc-gac;
    wd=gd-gad;
    we=ge-gae;
    cout << "Wynik gracza A: " << wa << endl;
    cout << "Wynik gracza B: " << wb << endl;
    cout << "Wynik gracza C: " << wc << endl;
    cout << "Wynik gracza D: " << wd << endl;
    cout << "Wynik gracza E: " << we << endl;
	gracze gracz[] = {
		{"Gracz A", wa},
		{"Gracz B", wb},
		{"Gracz C", wc},
		{"Gracz D", wd},
		{"Gracz E", we}
	};
	  cout<<"Wyniki graczy przed sortowaniem: "<<endl;
  for(int i=0;i<5;i++){
	cout << gracz[i].graczee <<": "<<gracz[i].wynik<<endl;}
	  sort(gracz, gracz+5);
	  cout<<"Wyniki graczy po sortowaniu : "<<endl;
  for(int i=0;i<5;i++){
    cout << gracz[i].graczee <<": "<<gracz[i].wynik<<endl;}
	return 0;
	}
