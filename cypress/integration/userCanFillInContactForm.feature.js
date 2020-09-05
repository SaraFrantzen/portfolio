describe("User can fill in and submit contact form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#contact-tab").click();
  });

  describe("User can fill in contact form", () => {
    it("can find name line", () => {
      cy.get("#name").should("contain", "Name:");
    });

    it("can find email line", () => {
      cy.get("#email").should("contain", "Email:");
    });

    it("can find message line", () => {
      cy.get("#message").should("contain", "Message:");
    });

    //.submit() can not be used as the form is of a div element
    describe("user can send message in contact form", () => {
      it("can press send-button", () => {
        cy.get("#contact-button").click();
      });
    });
  });
});
