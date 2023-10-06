describe("Prueba de login y página de home", () => {
   let sessionState = false;
 
   beforeEach(() => {
     if (!sessionState) {
       cy.visit("http://127.0.0.1:5173");
       sessionState = true;
     } else {
       cy.visit("http://127.0.0.1:5173/home");
       sessionState = false;
     }
   });

   it("Pruebas de login", async () => {
      const dataUser = await cy.fixture("user.json");
      cy.get("#email_user").type(dataUser.email);
      cy.get("#password").type(dataUser.password);
      cy.get("#btn_enviar").click();
   });
 
   it("Verificar home", () => {
      cy.contains("#name_app", "SGP").should("be.visible")
      cy.get(".icon-setting").should("exist");
      cy.contains("#name-user", "Jose Pereira").should("be.visible")
      cy.contains(".section-facturas", "No hay facturas.").should("be.visible")
   });
 });
