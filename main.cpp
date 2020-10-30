#include <iostream>

using namespace std;

int main() {
    int width, height;
    cout << "Podaj wysokosc: ";
    cin >> height;
    cout << "\n";
    cout << "Podaj szerokosc: ";
    cin >> width;
    cout << "\n";
    for(int i = 0; i < width; i++) {
        cout << "x";
    }
    cout << "\n";
    if(height > 2) {
        for (int i = 0; i < height - 2; i++) {
            for (int i = 0; i < width; i++) {
                if (i == 0 || i == width - 1) {
                    cout << "x";
                } else {
                    cout << " ";
                }
            }
            cout << "\n";
            if (i == height - 3) {
                for (int i = 0; i < width; i++) {
                    cout << "x";
                }
            }
        }
    }else {
        for(int i = 0; i < height - 1; i++) {
            for(int i = 0; i < width; i++) {
                cout << "x";
            }
            cout << "\n";
        }
    }
}