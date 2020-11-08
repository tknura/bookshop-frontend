export const pl = {
  translation: {
    common: {
      appName: 'Bookshop',
      email: 'E-mail',
      password: 'Hasło',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      phoneNumber: 'Numer telefonu',
      errors: {
        email: {
          required: 'Adres e-mail jest wymagany',
          format: 'Adres e-mail jest niepoprawny.',
        },
        password: {
          required: 'Hasło jest wymagane',
          toShort: 'Hasło powinno mieć conajmniej 8 znaków',
        },
        firstName: {
          required: 'Imię jest wymagane',
        },
        lastName: {
          required: 'Nazwisko jest wymagane',
        },
        phoneNumber: {
          required: 'Numer telefonu jest wymagany',
          format: 'Podany numer telefonu ma nieprawidlowy format',
        },
      },
    },
    navigation: {
      login: 'Zaloguj się',
      tabNames: {
        books: 'Książki',
        articles: 'Artykuły',
        events: 'Wydarzenia',
      },
    },
    screen: {
      signInUp: {
        buttons: {
          noAccount: 'Nie masz konta? Zarejestruj się',
          haveAccount: 'Masz już konto? Zaloguj się',
        },
      },
      signIn: {
        buttons: {
          signIn: 'Zaloguj się',
          resetPassword: 'Zresetuj hasło',
        },
      },
      signUp: {
        repeatPassword: 'Powtórz hasło',
        buttons: {
          signUp: 'Zarejestruj się',
        },
        errors: {
          repeatPassword: {
            notMatch: 'Podane hasło nie jest zgodne',
            required: 'Powtórzenie hasła jest wymagane',
          },
        },
      },
      cart: {
        title: 'Twój Koszyk',
        order: 'Złóż zamówienie',
        empty: 'Koszyk jest pusty. ',
      },
    },
  },
}
