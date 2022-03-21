import create from "zustand";
import { devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools((set, get) => ({
    isLoggin: JSON.parse(localStorage.getItem("__isLoggin")) || false,
    //isLoggin: false,
    setIsLoggin: (value) => {
      set((state) => ({
        isLoggin: value,
      }));

      get().addToLocalStorageAuth();
    },

    userInformations:
      JSON.parse(localStorage.getItem("__userInformations")) || [],
    setUserInformations: (value) => {
      set((state) => ({
        userInformations: value,
      }));

      get().addToLocalStorageAuth();
    },

    addToLocalStorageAuth: () => {
      // localStorage.removeItem("__products")
      localStorage.setItem(
        "__user_at",
        JSON.stringify(get().userInformations["access_token"])
      );
      localStorage.setItem("__isLoggin", JSON.stringify(get().isLoggin));
      localStorage.setItem(
        "__userInformations",
        JSON.stringify(get().userInformations)
      );
    },
    checkLocalStorageAuth: () => {
      if (
        typeof localStorage.getItem("__isLoggin") !== "undefined" &&
        localStorage.getItem("__isLoggin") !== null &&
        localStorage.getItem("__isLoggin") !== ""
      )
        set((state) => ({
          isLoggin: JSON.parse(localStorage.getItem("__isLoggin")),
        }));
      if (
        typeof localStorage.getItem("__userInformations") !== "undefined" &&
        localStorage.getItem("__userInformations") !== null &&
        localStorage.getItem("__userInformations") !== ""
      )
        set((state) => ({
          userInformations: JSON.parse(
            localStorage.getItem("__userInformations")
          ),
        }));
    },
  }))
);
