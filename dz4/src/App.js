import React, { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const [user, setUser] = useState(null);
  const [isJohn, setIsJohn] = useState(false);

  useEffect(() => {
    // Получаем имя и фамилию пользователя через prompt
    const name = prompt("Как вас зовут?");
    const lastname = prompt("Какая ваша фамилия?");

    // Создаем объект user
    const userInfo = { name, lastname };

    // Сохраняем его в состоянии
    setUser(userInfo);

    // Проверяем, является ли пользователь John Johns
    if (name === "John" && lastname === "Johns") {
      setIsJohn(true);
    }
  }, []);

  // Если user еще не задан, отображаем заглушку
  if (!user) {
    return <h1>Загрузка...</h1>;
  }

  // Отображаем страницу в зависимости от имени пользователя
  return (
      <div className="App">
        {isJohn ? <MainPage user={user} /> : <ErrorPage user={user} />}
      </div>
  );
}

export default App;
