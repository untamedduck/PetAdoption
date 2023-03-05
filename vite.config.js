import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base:"/PetAdoption/",
    plugins:[react()],
    root:"PetAdoption",
});