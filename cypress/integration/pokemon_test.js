describe("Pokedex", function () {
  beforeEach(function () {
    cy.visit("http://localhost:5000");
  });
  it("front page can be opened", function () {
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("can navigate to a particular Pokemon", function () {
    cy.contains("ivysaur").click();
    cy.contains("Next");
    cy.contains("Previous");
    cy.contains("overgrow");
    cy.contains("chlorophyll");
  });
});
