import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("user", {
  state: () => ({ userInfoState: {}, token: "" }),
  getters: { userInfo: (state) => state.userInfoState },
  actions: {
    async authUser({ params }) {
      const result = await axios.post(
        `${process.env.VUE_APP_API_URL}/auth/init`,
        { ...params }
      );
      this.token = result.data.token;
      localStorage.setItem("token", result.data.token);
      return result.data;
    },
  },
});
