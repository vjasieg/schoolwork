#include <iostream>

#define N 3
#define M 4

using namespace std;

int min(int a, int b, int c, int d) {
    int min = a;
    if(b < min) min = b;
    if(c < min) min = c;
    if(d < min) min = d;
    return min;
}

int main() {
    int tab[N][M];
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < M; j++) {
            cin >> tab[i][j];
        }
    }
    for(int i = 0; i < N; i++) {
        cout << "Najmniejsza liczba z wierszu " << i + 1 << " to: " << min(tab[i][0], tab[i][1], tab[i][2], tab[i][3]) << endl;
    }
}