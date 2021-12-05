const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookbook= new Cookbook();
      const myCookbookCli=new CookbookCli(myCookbook);
      const message=myCookbookCli.add('Bread', ['floar','water','yeast']);
      expect(message).toEqual('Successfully added the following recipe: Bread');
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookbook= new Cookbook();
      const myCookbookCli=new CookbookCli(myCookbook);
      myCookbookCli.add('Bread', ['floar','water','yeast']);
      myCookbookCli.add('Cake', ['floar','water','sugar']);
      const message=myCookbookCli.list();
      expect(message).toEqual('You have the following recipes: Bread,Cake');
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookbook= new Cookbook();
      const myCookbookCli=new CookbookCli(myCookbook);
      myCookbookCli.add('Bread', ['floar','water','yeast']);
      myCookbookCli.add('Cake', ['floar','water','sugar']);
      const message=myCookbookCli.get('Bread');
      expect(message).toEqual('The ingredients for Bread are: floar,water,yeast');
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myCookbook= new Cookbook();
      const myCookbookCli=new CookbookCli(myCookbook);
      myCookbookCli.add('Bread', ['floar','water','yeast']);
      const message=myCookbookCli.remove('Bread');
      expect(message).toEqual('Successfully removed the following recipe: Bread');
    });
  });
});
