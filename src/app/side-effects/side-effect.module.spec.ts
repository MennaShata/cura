import { SideEffectModule } from './side-effect.module';

describe('SideEffectModule', () => {
  let sideEffectModule: SideEffectModule;

  beforeEach(() => {
    sideEffectModule = new SideEffectModule();
  });

  it('should create an instance', () => {
    expect(sideEffectModule).toBeTruthy();
  });
});
