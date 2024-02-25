import { join } from "path";

export const MONOREPO_ROOT_DIR_PATH = join(__dirname, "..", "..");

export const MONOREPO_APPS_DIR_PATH = join(MONOREPO_ROOT_DIR_PATH, "apps");

export const MONOREPO_LIBS_DIR_PATH = join(MONOREPO_ROOT_DIR_PATH, "libs");

export const MONOREPO_PACKAGES_DIR_PATH = join(
  MONOREPO_ROOT_DIR_PATH,
  "packages"
);
