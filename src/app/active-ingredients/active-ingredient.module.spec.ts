import { ActiveIngredientModule } from './active-ingredient.module';

describe('ActiveIngredientModule', () => {
  let activeIngredientModule: ActiveIngredientModule;

  beforeEach(() => {
    activeIngredientModule = new ActiveIngredientModule();
  });

  it('should create an instance', () => {
    expect(activeIngredientModule).toBeTruthy();
  });
});
