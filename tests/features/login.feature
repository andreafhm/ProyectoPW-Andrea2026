Feature: Login

  @smoke @login
  Scenario: Login exitoso
    Given el usuario ingresa a la página de MercadoPrueba
    When ingresa las credenciales válidas
    And da click en el botón de ingresar
    Then el usuario debería ser redirigido y ver un mensaje de bienvenida