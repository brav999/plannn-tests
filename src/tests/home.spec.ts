import { expect, test } from "@playwright/test";
import { Home } from "../pages/Home";

let home: Home;

test.beforeEach(async ({ page }) => {
  home = new Home(page);

  await page.goto("/");
});

test("should add a task with a empty name", async ({ page }) => {
  await home.addTask("");

  const popup = page.getByText("Por favor, insira o nome da tarefa.");

  await expect(popup).toBeVisible();
  await expect(popup).not.toBeVisible();
});
