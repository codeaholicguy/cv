const assert = require("assert");
const fs = require("fs");

const cv = require("../src/data/cv.json");
const page = fs.readFileSync("src/pages/index.js", "utf8");
const layout = fs.readFileSync("src/components/layout/index.js", "utf8");

assert.ok(cv.info.headline, "CV must include a visible professional headline");
assert.strictEqual(
  cv.summary.length,
  1,
  "Professional summary must be one concise paragraph",
);
assert.ok(
  cv.summary[0].includes("teams in Singapore and Vietnam") &&
    cv.summary[0].includes("products across 13 markets"),
  "Summary must distinguish engineering team locations from product markets",
);
assert.ok(
  cv.summary[0].includes("AI-native engineering") &&
    cv.summary[0].includes("doubled engineering velocity"),
  "Summary must highlight the organization-wide AI-native transition and outcome",
);
assert.ok(
  Array.isArray(cv.coreSkills) && cv.coreSkills.length >= 10,
  "CV must include an explicit Core Skills section",
);

const book = cv.recognition.find((item) => item.year === "2025");
const githubStar = cv.recognition.find((item) => item.year === "2022");
const aiDevKit = cv.recognition.find((item) =>
  item.detail.includes("AI DevKit"),
);
assert.ok(aiDevKit, "Recognition must include AI DevKit as public work");
assert.ok(
  aiDevKit.detail.includes("23,000+ downloads") &&
    aiDevKit.detail.includes("1,600+ GitHub stars"),
  "AI DevKit recognition must include verified adoption metrics",
);
assert.strictEqual(
  aiDevKit.link,
  "https://github.com/codeaholicguy/ai-devkit",
  "AI DevKit public work must link to its GitHub repository",
);
assert.strictEqual(
  book.link,
  "https://ownthecraftbook.com",
  "Book recognition must provide a direct link",
);
assert.strictEqual(
  githubStar.link,
  "https://stars.github.com/alumni",
  "GitHub Star recognition must link to the alumni page",
);
assert.ok(
  page.includes("href={item.link}"),
  "Recognition links must render as clickable anchors",
);

const vpRole = cv.history.find((role) => role.title === "VP of Engineering");
assert.strictEqual(
  vpRole.companyLink,
  "https://www.shopback.com",
  "VP of Engineering must link ShopBack from the company name",
);
vpRole.projects.forEach((project) => {
  assert.ok(
    !project.link,
    "VP of Engineering must not display a separate ShopBack project link",
  );
});
assert.ok(
  page.includes("href={item.companyLink}"),
  "Company names must render as clickable anchors when linked",
);

const bulletLimits = [4, 5, 4, 3, 2, 1, 1];
cv.history.forEach((role, index) => {
  const bulletCount = role.projects.reduce(
    (total, project) => total + project.responsibilities.length,
    0,
  );

  assert.ok(
    bulletCount <= bulletLimits[index],
    `${role.title} has ${bulletCount} bullets; maximum is ${bulletLimits[index]}`,
  );
  assert.ok(!role.skills, `${role.title} must not repeat a separate skills list`);
});

const experienceText = cv.history
  .flatMap((role) =>
    role.projects.flatMap((project) => [
      project.description,
      ...project.responsibilities,
    ]),
  )
  .join(" ");
assert.ok(
  !/\bI\b/.test(experienceText),
  "Experience content must use direct resume language without first-person pronouns",
);
assert.ok(
  !/memo/i.test(experienceText),
  "Experience content must not reference the Engineering Memo",
);
assert.ok(
  /Owned and drove ShopBack's transition to AI-native engineering/.test(
    experienceText,
  ),
  "VP experience must clearly state ownership of the AI-native transition",
);

[
  "Professional Summary",
  "Core Skills",
  "Professional Experience",
  "Selected Recognition and Public Work",
].forEach((heading) => {
  assert.ok(page.includes(heading), `Page must use the heading: ${heading}`);
});

assert.ok(
  layout.includes("@media print"),
  "CV layout must include print rules for the downloadable resume",
);
assert.ok(
  page.includes("cv-page-two"),
  "Professional experience must define a stable two-page print break",
);

console.log("CV content contract passed");
