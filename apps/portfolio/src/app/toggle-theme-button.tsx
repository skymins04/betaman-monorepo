"use client";

import { Theme, useTheme } from "@betaman/tailwind";
import { Button } from "@betaman/shadcn";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button onClick={handleClick} variant="ghost" size="icon">
      {theme === "dark" ? <IconMoon /> : <IconSun />}
    </Button>
  );
};
