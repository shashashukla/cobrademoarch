// we fetch it from .env file per environments

import ApiBaseUrl from "@/core/ApiBaseUrl";

const ApiRouterConstant =({
  Employee: {
      getEmployees:`${ApiBaseUrl.API_BASE_URL}/posts`,
      createEmployee:`${ApiBaseUrl.API_BASE_URL}/Employee/get-employee`,
    },
});

export default ApiRouterConstant;
