import apiClient from "./api-client";
import create from "./http-service";

export type User = {
  id: number;
  name: string;
};
export default create("/users");
