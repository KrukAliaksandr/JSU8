/* eslint-disable no-undef */
const { ExpectedConditions } = protractor;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

describe(`home page`, () => {
  const loginField = $(`input#username`);
  const passwordField = $(`input#password`);
  const logInBtn = $(`button#login_btn`);
  const userProfileBtn = $(`.Nav-toggle`);
  const openProfileButton = $(`[class*='Icon SideMenu-u']`);
  const profileName = $(`[class*='Profile-username']`);
  const sideBarGetSupportBtn = $(`[i18n-msg="Get Support"]`);
  const searchInput = $(`#helpcenter-search`);
  const getHelpBtn = $(`#support-get-help-btn`);
  const resultLink = $(`.SupportNav-link span`);
  const messagesBtn = $(`span a[href='/messages']`);
  const jobsBtn = $(`span a[href='/jobs']`);
  const notificationsBtn = $(`span a[href='/notifications']`);
  const inboxStatusHeading = $(`.Inbox-status-heading`);
  const notificationsEmptyTitle = $(`.WidgetRedirect-title`);
  const recommendedJobsTab = $(`[class='PageNav-link is-active']`);

  beforeAll(async () => {
    await browser.get(`https://www.freelancer.com/login`);
    await browser.wait(ExpectedConditions.presenceOf(loginField), 15000);
    await loginField.sendKeys(`testautomationuser990@gmail.com`);
    await passwordField.sendKeys(`98979897aa`);
    await logInBtn.click();
    await browser.wait(ExpectedConditions.presenceOf(userProfileBtn), 30000);
    await browser.waitForAngularEnabled(true);
  });

  beforeEach(async () => {
    await browser.get(`https://www.freelancer.com/`);
    await browser.wait(ExpectedConditions.presenceOf(userProfileBtn), 30000);
  });

  // it(`should check home page title`, async () => {
  //   await browser.wait(ExpectedConditions.presenceOf(userProfileBtn), 30000);
  //   await userProfileBtn.click();
  //   await browser.wait(ExpectedConditions.presenceOf(openProfileButton), 30000);
  //   await openProfileButton.click();
  //   await browser.wait(ExpectedConditions.presenceOf(profileName), 30000);
  //   expect(profileName.getText())
  //     .toContain(`Aliaksandr K.`);
  // });

  // it(`should check home page title`, async () => {
  //   await userProfileBtn.click();
  //   await sideBarGetSupportBtn.click();
  //   await searchInput.sendKeys(`Get started on Freelancer.com`);
  //   await getHelpBtn.click();
  //   await browser.wait(ExpectedConditions.presenceOf(resultLink), 30000);
  //   expect(resultLink.getText())
  //     .toContain(`Getting started on Freelancer.com`);
  // });

  it(`should check popular pages`, async () => {
    await messagesBtn.click();
    await browser.wait(ExpectedConditions.presenceOf(inboxStatusHeading), 30000);
    expect(inboxStatusHeading.getText())
      .toContain(`All caught up now!`);
  });

  it(`should check popular pages`, async () => {
    await notificationsBtn.click();
    await browser.wait(ExpectedConditions.presenceOf(notificationsEmptyTitle), 30000);
    expect(notificationsEmptyTitle.getText())
      .toContain(`You don't have notifications yet but you can...`);
  });

  it(`should check popular pages`, async () => {
    await jobsBtn.click();
    await browser.wait(ExpectedConditions.presenceOf(recommendedJobsTab), 30000);
    expect(recommendedJobsTab.getText())
      .toContain(`RECOMMENDED`);
  });
});
