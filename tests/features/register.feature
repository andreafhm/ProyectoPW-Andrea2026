Feature: Registro de Usuario

  @smoke @register
  Scenario: Register exitoso
    Given el usuario ingresa a la página de MercadoPrueba
    When da click en el botón Crear Cuenta
    And ingresa los datos requeridos para crear una cuenta
    And da click en el botón
    Then el usuario visualiza un mensaje de Creado con Éxito