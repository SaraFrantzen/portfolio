describe("User should be able to click on links in Projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("can click on Github link in button", () => {
    cy.get("#github").click();
  });

  it("can click on Webpage link in button", () => {
    cy.get("#webpage").click();
  });
});
