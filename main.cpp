#include <iostream>

using namespace std;

class Ulamek {
private:
    int licznik;
    int mianownik;
public:
    Ulamek() {}
    Ulamek(int a, int b) {
        this->licznik = a;
        this->mianownik = b;
    }
    void setLicznik(int a) {
        this->licznik = a;
    }
    void setMianownik(int a) {
        this->mianownik = a;
    }
    int getLicznik() {
        return this->licznik;
    }
    int getMianownik() {
        return this->mianownik;
    }
    void printValue() {
        std::cout << std::to_string((float)licznik/(float)mianownik) << std::endl;
    }
    float getValue() {
        return (float)licznik/(float)mianownik;
    }
};
Ulamek operator+ (Ulamek u1, Ulamek u2) {
    Ulamek u;
    Ulamek u_dod;
    Ulamek final;
    if(u1.getMianownik() != u2.getMianownik()) {
        u.setLicznik(u1.getLicznik() * u2.getMianownik());
        u.setMianownik(u1.getMianownik() * u2.getMianownik());
        u_dod.setLicznik(u1.getMianownik() * u2.getLicznik());
        u_dod.setMianownik(u1.getMianownik() * u2.getMianownik());
        final = u + u_dod;
    }else {
        u.setLicznik(u1.getLicznik() + u2.getLicznik());
        u.setMianownik(u1.getMianownik());
        final = u;
    }
    return final;
}

Ulamek operator- (Ulamek u1, Ulamek u2) {
    Ulamek u;
    Ulamek u_dod;
    Ulamek final;
    if(u1.getMianownik() != u2.getMianownik()) {
        u.setLicznik(u1.getLicznik() * u2.getMianownik());
        u.setMianownik(u1.getMianownik() * u2.getMianownik());
        u_dod.setLicznik(u1.getMianownik() * u2.getLicznik());
        u_dod.setMianownik(u1.getMianownik() * u2.getMianownik());
        final = u - u_dod;
    }else {
        u.setLicznik(u1.getLicznik() - u2.getLicznik());
        u.setMianownik(u1.getMianownik());
        final = u;
    }
    return final;
}

Ulamek operator* (Ulamek u1, Ulamek u2) {
    Ulamek final;
    final.setMianownik(u1.getMianownik() * u2.getMianownik());
    final.setLicznik(u1.getLicznik() * u2.getLicznik());
    return final;
}

Ulamek operator/ (Ulamek u1, Ulamek u2) {
    Ulamek odwrocony;
    odwrocony.setLicznik(u2.getMianownik());
    odwrocony.setMianownik(u2.getLicznik());
    return u1 * odwrocony;
}


int main() {
    int licznik, mianownik;
    cout << "Podaj wartosc pierwszego ulamka\n Podaj licznik:";
    cin >> licznik;
    cout << "Podaj mianownik";
    cin >> mianownik;
    Ulamek u1(licznik, mianownik);
    cout << "Podaj wartosc druiego ulamka\n Podaj licznik:";
    cin >> licznik;
    cout << "Podaj mianownik";
    cin >> mianownik;
    Ulamek u2(licznik, mianownik);
    Ulamek dod = u1 + u2;
    cout << "dodawanie: " << endl;
    dod.printValue();
    Ulamek od = u1 - u2;
    cout << "odejmowanie: " << endl;
    od.printValue();
    Ulamek mn = u1 * u2;
    cout << "mnozenie: " << endl;
    mn.printValue();
    Ulamek dz = u1 / u2;
    cout << "dzielenie: " << endl;
    dz.printValue();
}