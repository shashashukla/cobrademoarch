<template>
  <div class="validate">
      <div class="col-lg-12 col-md-12" style="margin-top: 10px">
        <div class="card">
          <h3
            class="card-header text-center font-weight-bold text-uppercase py-4"
          >
          {{ msg }}
          </h3>
          <div class="card-body">
            <div class="row mb-3">
              <input
                type="search"
                class="form-control col-md-6"
                placeholder="Search By SS Number"
                aria-controls="dtBasicExample"
                v-model="search"
              />
            </div>
            {{ getSearchlist }}
           
              <div></div>
              <h3 class="card-header text-center font-weight-bold py-4">
                Enrollment
              </h3>
              <form enctype="multipart/form-data">
                <div class="row g-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      v-model="ViewFormData.FirstName"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      v-model="ViewFormData.LastName"
                    />
                  </div>
                </div>
                <div style="margin-top: 10px"></div>
                <div class="row g-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      v-model="ViewFormData.Email"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      v-model="ViewFormData.ZIP"
                    />
                  </div>
                </div>
                <div style="margin-top: 10px"></div>
                <div class="row g-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="PF no"
                      aria-label="First name"
                      v-model="ViewFormData.pfno"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Mobile no"
                      aria-label="Last name"
                      v-model="ViewFormData.mobileno"
                    />
                  </div>
                </div>
                <div style="margin-top: 10px"></div>
                <button
                  type="button"
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import empAPIService from "@/services/ComponentService";
import responseData from "@/types/ResponseData";
import apiRouterConstant from "@/core/ApiRouteConstant";

export default defineComponent({
  name: 'EmployeeValidation',
  props: {
    msg: String,
  },
  data() {
    return {
      allproducts: [],
      search: "",
      ViewFormData: {
        id: "",
        FirstName: "",
        LastName: "",
        Email: "",
        ZIP: "",
        pfno: "",
        mobileno: "",
      },
      isLoading:false,
    };
  },
  
  async mounted() {
    this.getallproductslist();
  },
  computed: {
    getallproducts() {
      console.log("this.search", this.search);
      if (this.search) {
        return this.allproducts.filter((item) => {
          console.log("item", item);
          let socialSec = 'never';
          socialSec = item['SocialSecurity'];
          return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => socialSec.toLowerCase().includes(v));
        });
      }
      return this.allproducts;
    },
    getSearchlist() {
      console.log("getallproducts", this.getallproducts);
      let searchdata = {};
      if (this.getallproducts) {
        this.getallproducts.forEach((item) => {
          console.log("parentMessage", item);
          searchdata = item;
          let ViewFormDatav: any;
          ViewFormDatav = searchdata
          this.ViewFormData = ViewFormDatav;
        });
      }
      return this.ViewFormData;
    },
  },
  methods: {
    getallproductslist() {
      empAPIService.getUrl(apiRouterConstant.Employee.getEmployees)
      empAPIService.getAll()
        .then((response: responseData) => {
          this.isLoading = true;
          this.allproducts = response.data;
          console.log('response',response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
});
</script>


<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
