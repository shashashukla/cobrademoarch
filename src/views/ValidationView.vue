<template>
  <div class="empvlidate">
    <Empvalidation msg="User Validate"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Empvalidation from '@/components/EmployeeValidation.vue';

export default defineComponent({
  name: 'ValidationView',
  components: {
    Empvalidation,
  },
});
</script>
