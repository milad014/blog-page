import { api } from "../utils/http-common";

export function getPost(id: string) {
  return api({ method: "GET", url: `/posts/${id}` });
}

export function createComment(id: number, data: { text: string }) {
  return api({
    method: "POST",
    url: `/posts/${id}/comment`,
    data,
  });
}
