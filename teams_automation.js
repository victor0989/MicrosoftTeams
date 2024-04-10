const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Ir a la página de inicio de Teams
    await page.goto('https://teams.microsoft.com');

    // Esperar a que se cargue la página y se muestre el botón de iniciar sesión
    await page.waitForSelector('button[data-tid="loginButton"]');

    // Hacer clic en el botón de iniciar sesión
    await page.click('button[data-tid="loginButton"]');

    // Esperar a que se cargue la página de inicio de sesión
    await page.waitForSelector('input[name="loginfmt"]');

    // Ingresar el nombre de usuario (aquí debes reemplazar 'usuario' con tu nombre de usuario)
    await page.fill('input[name="loginfmt"]', 'usuario');

    // Hacer clic en el botón siguiente para avanzar al formulario de contraseña
    await page.click('input[type="submit"]');

    // Esperar a que se cargue el formulario de contraseña
    await page.waitForSelector('input[name="passwd"]');

    // Ingresar la contraseña (aquí debes reemplazar 'contraseña' con tu contraseña)
    await page.fill('input[name="passwd"]', 'contraseña');

    // Hacer clic en el botón de iniciar sesión para iniciar sesión en Teams
    await page.click('input[type="submit"]');

    // Esperar a que se cargue la página principal de Teams
    await page.waitForSelector('button[aria-label="Teams"]');

    // Hacer clic en el botón de "Teams" en la barra lateral para abrir la lista de equipos
    await page.click('button[aria-label="Teams"]');

    // Esperar a que se cargue la lista de equipos y seleccionar un equipo (aquí debes reemplazar 'Nombre del equipo' con el nombre de tu equipo)
    await page.waitForSelector('button[aria-label="Nombre del equipo"]');
    await page.click('button[aria-label="Nombre del equipo"]');

    // Hacer clic en el botón de "Chat" en el equipo seleccionado para abrir el chat
    await page.waitForSelector('button[aria-label="Chat"]');
    await page.click('button[aria-label="Chat"]');

    // Esperar a que se cargue la ventana de chat y escribir un mensaje (aquí puedes reemplazar '¡Hola!' con tu propio mensaje)
    await page.waitForSelector('div[role="textbox"]');
    await page.fill('div[role="textbox"]', '¡Hola!');

    // Enviar el mensaje pulsando Enter
    await page.press('div[role="textbox"]', 'Enter');

    // Esperar unos segundos para que el mensaje se envíe
    await page.waitForTimeout(2000);

    // Cerrar el navegador
    await browser.close();
})();
