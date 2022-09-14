import { BaseLayout } from './layout';

export class RelierPage extends BaseLayout {
  goto(query?: string) {
    const url = query
      ? `${this.target.relierUrl}?${query}`
      : this.target.relierUrl;
    return this.page.goto(url);
  }

  async isLoggedIn() {
    const login = this.page.locator('#loggedin');
    await login.waitFor();
    return login.isVisible();
  }

  isPro() {
    return this.page.isVisible('.pro-status', { timeout: 1000 });
  }

  async signOut() {
    await Promise.all([
      this.page.click('#logout'),
      this.page.waitForResponse(/\/api\/logout/),
    ]);
  }

  clickEmailFirst() {
    return Promise.all([
      this.page.click('button.email-first-button'),
      this.page.waitForNavigation({ waitUntil: 'load' }),
    ]);
  }

  async clickSubscribe() {
    await Promise.all([
      this.page.click('a[data-currency=usd]'),
      this.page.waitForNavigation({ waitUntil: 'load' }),
    ]);
  }
}
