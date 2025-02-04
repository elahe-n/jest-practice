class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
  }

  add(name, ingredients) {
    this.cookbook.addRecipe(name, ingredients);
    return `Successfully added the following recipe: ${name}`;
  }

  get(name) {
    const getMessage=this.cookbook.getRecipe(name)
    if (getMessage!==undefined){
    return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;}
    else {return `WARNING ! ${name} recipe does not exist, get operation was failed !`;}
  }

  remove(name) {
    const message=this.cookbook.getRecipe(name)
    if (message!==undefined){
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;}
    else {return `WARNING ! ${name} recipe does not exist, remove operation was failed !`;}
  }
}

module.exports = { CookbookCli };


