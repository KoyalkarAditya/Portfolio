import React, { useState } from "react";

export function useSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
}
