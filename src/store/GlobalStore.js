import create from "zustand";
import { devtools } from "zustand/middleware";

export const useGloabalStore = create(
  devtools((set, get) => ({
    selectedMenuItem:
      JSON.parse(localStorage.getItem("__selectedMenuItem")) || "1",
    setSelectedMenuItem: (value) => {
      set((state) => ({
        selectedMenuItem: value,
      }));

      get().addToLocalStorageGloabal();
    },

   
    addToLocalStorageGloabal: () => {
      localStorage.setItem(
        "__selectedMenuItem",
        JSON.stringify(get().selectedMenuItem)
      );
      localStorage.setItem("__headerTitle", JSON.stringify(get().headerTitle));
    },
    checkLocalStorageGloabal: () => {
      if (
        typeof localStorage.getItem("__selectedMenuItem") !== "undefined" &&
        localStorage.getItem("__selectedMenuItem") !== null &&
        localStorage.getItem("__selectedMenuItem") !== ""
      )
        set((state) => ({
          isLoggin: JSON.parse(localStorage.getItem("__selectedMenuItem")),
        }));

     
    },
  }))
);
