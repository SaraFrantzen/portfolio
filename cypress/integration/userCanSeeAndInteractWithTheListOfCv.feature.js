describe("User can see list of Working Experience in CV", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });

  it("displays first working experience and can click on website link", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".ui.header").should("contain", "Apollo");
      cy.get(".title").should("contain", "Sports Instructor / Yoga teacher");
      cy.get(".description").should(
        "contain",
        "Been working as a Sports instructor"
      );
      cy.get("#cv-button").click();
    });
  });

  it("displays second working experience and can click on website link", () => {
    cy.get("#cv-2").within(() => {
      cy.get(".ui.header").should("contain", "Form Gotland");
      cy.get(".title").should("contain", "Personal Trainer");
      cy.get(".description").should(
        "contain",
        "Personal Trainer at the largest gym"
      );
      cy.get("#cv-button").click();
    });
  });

  it("displays third working experience and can click on website link", () => {
    cy.get("#cv-3").within(() => {
      cy.get(".ui.header").should("contain", "Avesta municipality");
      cy.get(".title").should("contain", "Trainee");
      cy.get(".description").should(
        "contain",
        "The trainee program by Avesta extends a year"
      );
      cy.get("#cv-button").click();
    });
  });

  it("displays fourth working experience and can click on website link", () => {
    cy.get("#cv-4").within(() => {
      cy.get(".ui.header").should("contain", "Colorez");
      cy.get(".title").should("contain", "Store manager");
      cy.get(".description").should(
        "contain",
        "Colorez is a former street-style clothing shop that was located in Stockholm"
      );
    });
  });

  it("displays fifth working experience and can click on website link", () => {
    cy.get("#cv-5").within(() => {
      cy.get(".ui.header").should("contain", "SKANSKA");
      cy.get(".title").should("contain", "Geologist");
      cy.get(".description").should(
        "contain",
        "I calculated the hydraulic conductivity"
      );
      cy.get("#cv-button").click();
    });
  });

  it("displays sixth working experience and can click on website link", () => {
    cy.get("#cv-6").within(() => {
      cy.get(".ui.header").should(
        "contain",
        "Stockholm University, geochemical institution"
      );
      cy.get(".title").should("contain", "Lab Assistant");
      cy.get(".description").should(
        "contain",
        "I prepped and analyzed samples"
      );
      cy.get("#cv-button").click();
    });
  });
});
