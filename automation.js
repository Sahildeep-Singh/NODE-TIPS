const puppeteer = require("puppeteer");
let tab1;

// promise chaining
puppeteer
  .launch({ headless: false })
  .then((browser) => browser.pages())
  .then((browserPages) => {
    tab1 = browserPages[0];
    return tab1.goto("https://www.google.com/");
  })
  .then(() => tab1.waitForSelector("input[type='text']", { visible: true }))
  .then(() =>
    tab1.type("input[type='text']", "linkedin.com/in/sahildeep-singh-251a99209")
  )
  .then(() => tab1.keyboard.press("Enter"))
  .then(() => tab1.waitForSelector("h3.LC20lb", { visible: true }))
  .then(() => tab1.click("h3.LC20lb"))
  .catch((error) => console.log("ERROR-->", error));

// async await
const myLinkedIn = async () => {
  try {
    const browseOpenPromise = await puppeteer.launch({ headless: false });
    const browser = await browseOpenPromise.pages();
    const tab1 = browser[0];
    await tab1.goto("https://www.google.com/");
    await tab1.waitForSelector("input[type='text']", { visible: true });
    await tab1.type(
      "input[type='text']",
      "linkedin.com/in/sahildeep-singh-251a99209"
    );
    await tab1.keyboard.press("Enter");
    await tab1.waitForSelector("h3.LC20lb", { visible: true });
    await tab1.click("h3.LC20lb");
  } catch (error) {
    console.log("ERROR--->", error);
  }
};
myLinkedIn();
