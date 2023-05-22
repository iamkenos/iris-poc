import { givenRequest, Request } from "@iamkenos/iris";

export const BASE_URL = "https://gorest.co.in";
export const TOKEN = "Bearer 8ca53fe20cbc28f26c1bee2526b5543ca22dab339f5b5e0516329fcbf51530fc";
export const REQ_PATH = "/public/v2/users";
export const REQ_METHOD_GET = "GET";
export const REQ_METHOD_POST = "POST";

export type PostUserRequestBody = {
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
}

export function givenGetUsersRequest() {
  return givenRequest(`${BASE_URL}${REQ_PATH}`, {
    method: REQ_METHOD_GET,
  });
}

export function givenGetUsersRequestByQueryParam(params: { [key: string]: string }) {
  return givenRequest(`${BASE_URL}${REQ_PATH}`, {
    method: REQ_METHOD_GET,
    params
  });
}

export function givenPostUserRequest(body: PostUserRequestBody, headers?: Request["spec"]["headers"]) {
  return givenRequest(`${BASE_URL}${REQ_PATH}`, {
    method: REQ_METHOD_POST,
    headers,
    body
  });
}
