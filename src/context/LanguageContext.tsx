import { createContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'es';

type TranslationKey =
  | 'language.select'
  | 'header.logoAlt'
  | 'header.home'
  | 'header.menu'
  | 'header.company'
  | 'header.login'
  | 'header.logout'
  | 'header.user'
  | 'header.dark'
  | 'header.light'
  | 'header.order'
  | 'header.switchToDark'
  | 'header.switchToLight'
  | 'hero.titleStart'
  | 'hero.titleAccent'
  | 'hero.titleEnd'
  | 'hero.descriptionStart'
  | 'hero.descriptionMiddle'
  | 'hero.descriptionEnd'
  | 'hero.phone'
  | 'hero.phoneAlt'
  | 'hero.orderButton'
  | 'hero.ratingTitle'
  | 'hero.ratingScore'
  | 'hero.ratingText'
  | 'hero.foodAlt'
  | 'footer.logoAlt'
  | 'footer.description'
  | 'footer.company'
  | 'footer.home'
  | 'footer.order'
  | 'footer.faq'
  | 'footer.contact'
  | 'footer.template'
  | 'footer.styleGuide'
  | 'footer.changelog'
  | 'footer.license'
  | 'footer.webflowUniversity'
  | 'footer.flowbase'
  | 'footer.moreClonables'
  | 'company.title'
  | 'company.description'
  | 'menu.title'
  | 'menu.descriptionStart'
  | 'menu.phone'
  | 'menu.descriptionEnd'
  | 'menu.freshFood'
  | 'menu.loading'
  | 'menu.seeMore'
  | 'category.aria'
  | 'category.dessert'
  | 'category.dinner'
  | 'category.breakfast'
  | 'meal.defaultDescription'
  | 'meal.quantityFor'
  | 'meal.addToCart'
  | 'login.title'
  | 'login.email'
  | 'login.emailPlaceholder'
  | 'login.password'
  | 'login.passwordPlaceholder'
  | 'login.submit'
  | 'login.register'
  | 'login.firebaseMissing'
  | 'login.loginFailed'
  | 'login.registerFailed'
  | 'order.title'
  | 'order.customer'
  | 'order.empty'
  | 'order.total'
  | 'order.street'
  | 'order.house'
  | 'order.submit'
  | 'order.success'
  | 'order.quantityFor'
  | 'order.remove';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

type LanguageProviderProps = {
  children: ReactNode;
};

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'language.select': 'Select language',
    'header.logoAlt': 'Logo',
    'header.home': 'Home',
    'header.menu': 'Menu',
    'header.company': 'Company',
    'header.login': 'Login',
    'header.logout': 'Logout',
    'header.user': 'User',
    'header.dark': 'Dark',
    'header.light': 'Light',
    'header.order': 'Order',
    'header.switchToDark': 'Switch to dark theme',
    'header.switchToLight': 'Switch to light theme',
    'hero.titleStart': 'Beautiful food & takeaway,',
    'hero.titleAccent': 'delivered',
    'hero.titleEnd': 'to your door.',
    'hero.descriptionStart':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500. Prefer to order by',
    'hero.descriptionMiddle': '',
    'hero.descriptionEnd': '.',
    'hero.phone': 'phone',
    'hero.phoneAlt': 'Phone number',
    'hero.orderButton': 'Place an Order',
    'hero.ratingTitle': 'Trustpilot',
    'hero.ratingScore': '4.8 out of 5',
    'hero.ratingText': 'based on 2000+ reviews',
    'hero.foodAlt': 'Food',
    'footer.logoAlt': 'Logo',
    'footer.description': 'Takeaway & Delivery template for mass, medium businesses.',
    'footer.company': 'Company',
    'footer.home': 'Home',
    'footer.order': 'Order',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact',
    'footer.template': 'Template',
    'footer.styleGuide': 'Style Guide',
    'footer.changelog': 'Changelog',
    'footer.license': 'License',
    'footer.webflowUniversity': 'Webflow University',
    'footer.flowbase': 'Flowbase',
    'footer.moreClonables': 'More Clonables',
    'company.title': 'Company',
    'company.description':
      'Beautiful food takeaway helps customers order fresh meals online for delivery or pickup.',
    'menu.title': 'Browse our menu',
    'menu.descriptionStart': 'Use our menu to place an order online, or',
    'menu.phone': 'phone',
    'menu.descriptionEnd': 'our store to place a pickup order. Fast and',
    'menu.freshFood': 'fresh food.',
    'menu.loading': 'Loading menu...',
    'menu.seeMore': 'See more',
    'category.aria': 'Meal categories',
    'category.dessert': 'Dessert',
    'category.dinner': 'Dinner',
    'category.breakfast': 'Breakfast',
    'meal.defaultDescription':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'meal.quantityFor': 'Quantity for',
    'meal.addToCart': 'Add to cart',
    'login.title': 'Log in',
    'login.email': 'Email',
    'login.emailPlaceholder': 'Enter your email',
    'login.password': 'Password',
    'login.passwordPlaceholder': 'Enter your password',
    'login.submit': 'Submit',
    'login.register': 'Register',
    'login.firebaseMissing': 'Firebase config is missing.',
    'login.loginFailed': 'Failed to log in.',
    'login.registerFailed': 'Failed to register.',
    'order.title': 'Finish your order',
    'order.customer': 'Customer',
    'order.empty': 'Your cart is empty.',
    'order.total': 'Total',
    'order.street': 'Street',
    'order.house': 'House',
    'order.submit': 'Order',
    'order.success': 'Order placed successfully.',
    'order.quantityFor': 'Quantity for',
    'order.remove': 'Remove',
  },
  ru: {
    'language.select': 'Выбрать язык',
    'header.logoAlt': 'Логотип',
    'header.home': 'Главная',
    'header.menu': 'Меню',
    'header.company': 'Компания',
    'header.login': 'Войти',
    'header.logout': 'Выйти',
    'header.user': 'Пользователь',
    'header.dark': 'Темная',
    'header.light': 'Светлая',
    'header.order': 'Заказ',
    'header.switchToDark': 'Переключить на темную тему',
    'header.switchToLight': 'Переключить на светлую тему',
    'hero.titleStart': 'Красивая еда навынос,',
    'hero.titleAccent': 'доставленная',
    'hero.titleEnd': 'к вашей двери.',
    'hero.descriptionStart':
      'Lorem Ipsum - это простой текст-заполнитель для печатной и наборной индустрии. Lorem Ipsum был стандартным текстом отрасли с 1500 года. Предпочитаете заказать по',
    'hero.descriptionMiddle': '',
    'hero.descriptionEnd': '.',
    'hero.phone': 'телефону',
    'hero.phoneAlt': 'Номер телефона',
    'hero.orderButton': 'Оформить заказ',
    'hero.ratingTitle': 'Trustpilot',
    'hero.ratingScore': '4.8 из 5',
    'hero.ratingText': 'на основе 2000+ отзывов',
    'hero.foodAlt': 'Еда',
    'footer.logoAlt': 'Логотип',
    'footer.description': 'Шаблон доставки еды навынос для малого и среднего бизнеса.',
    'footer.company': 'Компания',
    'footer.home': 'Главная',
    'footer.order': 'Заказ',
    'footer.faq': 'FAQ',
    'footer.contact': 'Контакты',
    'footer.template': 'Шаблон',
    'footer.styleGuide': 'Гайд стилей',
    'footer.changelog': 'История изменений',
    'footer.license': 'Лицензия',
    'footer.webflowUniversity': 'Webflow University',
    'footer.flowbase': 'Flowbase',
    'footer.moreClonables': 'Больше шаблонов',
    'company.title': 'Компания',
    'company.description':
      'Сервис еды навынос помогает клиентам заказывать свежие блюда онлайн с доставкой или самовывозом.',
    'menu.title': 'Посмотрите наше меню',
    'menu.descriptionStart': 'Используйте меню, чтобы сделать заказ онлайн, или',
    'menu.phone': 'позвоните',
    'menu.descriptionEnd': 'нам для заказа самовывоза. Быстрая и',
    'menu.freshFood': 'свежая еда.',
    'menu.loading': 'Загрузка меню...',
    'menu.seeMore': 'Показать еще',
    'category.aria': 'Категории блюд',
    'category.dessert': 'Десерт',
    'category.dinner': 'Ужин',
    'category.breakfast': 'Завтрак',
    'meal.defaultDescription':
      'Lorem Ipsum - это простой текст-заполнитель для печатной индустрии.',
    'meal.quantityFor': 'Количество для',
    'meal.addToCart': 'В корзину',
    'login.title': 'Войти',
    'login.email': 'Email',
    'login.emailPlaceholder': 'Введите email',
    'login.password': 'Пароль',
    'login.passwordPlaceholder': 'Введите пароль',
    'login.submit': 'Войти',
    'login.register': 'Регистрация',
    'login.firebaseMissing': 'Конфигурация Firebase отсутствует.',
    'login.loginFailed': 'Не удалось войти.',
    'login.registerFailed': 'Не удалось зарегистрироваться.',
    'order.title': 'Завершите заказ',
    'order.customer': 'Клиент',
    'order.empty': 'Корзина пуста.',
    'order.total': 'Итого',
    'order.street': 'Улица',
    'order.house': 'Дом',
    'order.submit': 'Заказать',
    'order.success': 'Заказ успешно оформлен.',
    'order.quantityFor': 'Количество для',
    'order.remove': 'Удалить',
  },
  es: {
    'language.select': 'Seleccionar idioma',
    'header.logoAlt': 'Logotipo',
    'header.home': 'Inicio',
    'header.menu': 'Menu',
    'header.company': 'Empresa',
    'header.login': 'Entrar',
    'header.logout': 'Salir',
    'header.user': 'Usuario',
    'header.dark': 'Oscuro',
    'header.light': 'Claro',
    'header.order': 'Pedido',
    'header.switchToDark': 'Cambiar a tema oscuro',
    'header.switchToLight': 'Cambiar a tema claro',
    'hero.titleStart': 'Comida bonita para llevar,',
    'hero.titleAccent': 'entregada',
    'hero.titleEnd': 'en tu puerta.',
    'hero.descriptionStart':
      'Lorem Ipsum es simplemente un texto de relleno de la industria de impresion y composicion. Lorem Ipsum ha sido el texto estandar de la industria desde 1500. Prefieres pedir por',
    'hero.descriptionMiddle': '',
    'hero.descriptionEnd': '.',
    'hero.phone': 'telefono',
    'hero.phoneAlt': 'Numero de telefono',
    'hero.orderButton': 'Hacer un pedido',
    'hero.ratingTitle': 'Trustpilot',
    'hero.ratingScore': '4.8 de 5',
    'hero.ratingText': 'basado en 2000+ resenas',
    'hero.foodAlt': 'Comida',
    'footer.logoAlt': 'Logotipo',
    'footer.description': 'Plantilla de comida para llevar y entrega para negocios pequenos y medianos.',
    'footer.company': 'Empresa',
    'footer.home': 'Inicio',
    'footer.order': 'Pedido',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contacto',
    'footer.template': 'Plantilla',
    'footer.styleGuide': 'Guia de estilo',
    'footer.changelog': 'Cambios',
    'footer.license': 'Licencia',
    'footer.webflowUniversity': 'Webflow University',
    'footer.flowbase': 'Flowbase',
    'footer.moreClonables': 'Mas clonables',
    'company.title': 'Empresa',
    'company.description':
      'El servicio de comida para llevar ayuda a los clientes a pedir comidas frescas online para entrega o recogida.',
    'menu.title': 'Explora nuestro menu',
    'menu.descriptionStart': 'Usa nuestro menu para hacer un pedido online, o',
    'menu.phone': 'llama',
    'menu.descriptionEnd': 'a nuestra tienda para recogerlo. Comida rapida y',
    'menu.freshFood': 'fresca.',
    'menu.loading': 'Cargando menu...',
    'menu.seeMore': 'Ver mas',
    'category.aria': 'Categorias de comidas',
    'category.dessert': 'Postre',
    'category.dinner': 'Cena',
    'category.breakfast': 'Desayuno',
    'meal.defaultDescription':
      'Lorem Ipsum es simplemente un texto de relleno de la industria de impresion.',
    'meal.quantityFor': 'Cantidad para',
    'meal.addToCart': 'Anadir al carrito',
    'login.title': 'Entrar',
    'login.email': 'Email',
    'login.emailPlaceholder': 'Introduce tu email',
    'login.password': 'Contrasena',
    'login.passwordPlaceholder': 'Introduce tu contrasena',
    'login.submit': 'Entrar',
    'login.register': 'Registrarse',
    'login.firebaseMissing': 'Falta la configuracion de Firebase.',
    'login.loginFailed': 'No se pudo iniciar sesion.',
    'login.registerFailed': 'No se pudo registrar.',
    'order.title': 'Finaliza tu pedido',
    'order.customer': 'Cliente',
    'order.empty': 'Tu carrito esta vacio.',
    'order.total': 'Total',
    'order.street': 'Calle',
    'order.house': 'Casa',
    'order.submit': 'Pedir',
    'order.success': 'Pedido realizado correctamente.',
    'order.quantityFor': 'Cantidad para',
    'order.remove': 'Eliminar',
  },
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey) => translations[language][key];

  return <LanguageContext value={{ language, setLanguage, t }}>{children}</LanguageContext>;
}
