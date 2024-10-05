import { Page } from "@playwright/test";

export class Home {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addTask(description: string) {
    await this.page.getByLabel("Tarefa:").fill(description);
    await this.page.getByRole("button", { name: "Adicionar Tarefa" }).click();
  }

  async cleanTasks() {
    await this.page.getByRole("button", { name: "Limpar Atividades" }).click();
  }

  async startTask() {
    await this.page.getByRole("button", { name: "Iniciar" }).click();
  }

  async stopTask() {
    await this.page.getByRole("button", { name: "Pausar" }).click();
  }
}
