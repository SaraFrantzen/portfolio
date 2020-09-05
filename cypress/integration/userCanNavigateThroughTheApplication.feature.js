describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("to Cv tab and it", () => {
    beforeEach(() => {
      cy.get("#cv-tab").click();
    });

    it("displays Cv Header", () => {
      cy.get("#cv-header").should("contain", "Curriculum vitae");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "cv");
    });

    it("does not display Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });
  });

  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click();
    });

    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "Web Development");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "projects");
    });

    it("does not display Cv Header", () => {
      cy.get("#cv-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });
  });

  describe("to My Contact tab and it", () => {
    beforeEach(() => {
      cy.get("#contact-tab").click();
    });

    it("displays My Contacts header", () => {
      cy.get("#contact-header").should("contain", "Contact Me");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "contact");
    });

    it("does not display Cv Header", () => {
      cy.get("#cv-header").should("not.exist");
    });

    it("does not display Hello World", () => {
      cy.get("#hello").should("not.exist");
    });

    it("does not display my Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });
  });

  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("#cv-tab").click();
      cy.get("#header").click();
    });

    it("displays Hello World", () => {
      cy.get("#hello").should("contain", "Sara Lundkvist");
    });

    it("displays correct url", () => {
      cy.url().should("not.contain", "projects").and("not.contain", "cv");
    });

    it("does not display Cv header", () => {
      cy.get("#cv-header").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display Contact header", () => {
      cy.get("#contact-header").should("not.exist");
    });
  });
});
