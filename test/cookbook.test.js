const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook= new Cookbook();
      myCookbook.addRecipe("Bread", ['floar','water','yeast']);
      expect(myCookbook.recipes).toEqual({Bread: ['floar','water','yeast']})
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook= new Cookbook();
      myCookbook.addRecipe("Bread", ['floar','water','yeast']);
      const myRecipes=myCookbook.listRecipes();
      expect(myRecipes).toEqual(['Bread']);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook= new Cookbook();
      myCookbook.addRecipe("Bread", ['floar','water','yeast']);
      const myRecipes=myCookbook.getRecipe("Bread");
      expect(myRecipes).toEqual([ 'floar', 'water', 'yeast' ]);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
