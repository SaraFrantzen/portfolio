describe("User can see list of Educations", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#educations-tab").click();
  });

  it("displays first education", () => {
    cy.get("#education-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".name").should("contain", "Craft Academy");
      cy.get(".title").should("contain", "Full Stack Web Developer");
      cy.get(".description").should(
        "contain",
        "12 week Craft Academy BootCamp"
      );
      cy.get(".time").should("contain", "2020");
    });
  });

  it("displays second education", () => {
    cy.get("#education-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".name").should("contain", "Eleiko");
      cy.get(".title").should("contain", "Lic. Eleiko Personal Trainer");
      cy.get(".description").should(
        "contain",
        "In addition to personal trainer"
      );
      cy.get(".time").should("contain", "2015");
    });
  });

  it("displays third education", () => {
    cy.get("#education-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".name").should("contain", "Stockholm University");
      cy.get(".title").should("contain", "Masterdegree in Quaternary");
      cy.get(".description").should(
        "contain",
        "Masterproject 60hp 'Using n-alkanes"
      );
      cy.get(".time").should("contain", "2012");
    });
  });

  it("displays fourth education", () => {
    cy.get("#education-4").within(() => {
      cy.get(".image").should("exist");
      cy.get(".name").should("contain", "Indea Yoga");
      cy.get(".title").should("contain", "500+ h TTC");
      cy.get(".description").should("contain", "2months Yoga Teacher Training");
      cy.get(".time").should("contain", "2019");
    });
  });
});
