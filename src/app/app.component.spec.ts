import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let underTest: AppComponent;

  beforeEach(() => {
    underTest = new AppComponent();
  });

  it('should create the app', () => {
    expect(underTest).toBeTruthy();
  });
});
