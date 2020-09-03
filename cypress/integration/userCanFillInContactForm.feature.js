describe("User can fill in and submit contact form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#contact-tab").click();
    });

    describe("User can fill in contact form", () => {
      
        it("can find name line", () => {
          cy.get("#name").should("contain", "Your Name:");
        });

        it("can find email line", () => {
            cy.get("#email").should("contain", "Your Email:");
          });
        
        it("can find message line", () => {
            cy.get("#message").should("contain", "Message:");
          });
    });
});


