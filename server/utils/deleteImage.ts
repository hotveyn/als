import fs from "node:fs/promises";
import { resolve } from "node:path";

export async function deleteImage(name: string) {
  // write a function that deletes an image from the /public/images folder
  const imagePath = resolve("public", "images", name);
  try {
    await fs.stat(imagePath);
    await fs.unlink(imagePath);
  } catch (e) {
    console.error(e);
  }
}
