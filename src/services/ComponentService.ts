import httpCommonService from "@/CommonService";


class ApiDataService {
  private fullUrl: any;

  getUrl(Apiurl : any){
    const baseUrlData = Apiurl;

    return this.fullUrl = baseUrlData;
  }
  

  getAll(): Promise<any> {
    let response: any;
    try {
      response = httpCommonService.get(this.fullUrl)
    } catch (error) {
      response = error
    }
    return response;
  }

  create(data: any): Promise<any> {
    return httpCommonService.post(this.fullUrl, data);
  }

  deleteAll(): Promise<any> {
    return httpCommonService.delete(this.fullUrl);
  }
}

export default new ApiDataService();