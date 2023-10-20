<template class="w-auto">
  <div class="mt-32 formulario">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" v-model="name" placeholder="Ex.: Your full name" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control collor" v-model="email" @blur="validateEmail" placeholder="Ex.: myemail@email.com" required>
      <p v-if="emailError" class="error">Invalid email</p>
    </div>
    <div class="mb-3">
      <label class="form-label">Phone</label>
      <input type="tel" class="form-control" v-model="phone" @blur="validatePhone" @input="formatPhone" placeholder="Ex.: (84) 9 9999-9999" required>
      <p v-if="phoneError" class="error">Invalid phone</p>
    </div>
    <div class="mb-3">
      <label class="form-label">Message</label>
      <textarea class="form-control" rows="4" v-model="message" placeholder="Contact message for Marvel" required></textarea>
    </div>

    <!-- Button trigger modal -->
    <button :disabled="!isValid" type="button" class="btn" :class="{'btn-primary': isValid, 'btn-secondary': !isValid}" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Send
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header text-center px-4">
        <h1 class="mtf mb-0" id="exampleModalLabel">Message sent successfully!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body px-4 py-4 mbf">
        Thank you, we'll reach you as soon as possible
      </div>
      <div class="modal-footer px-4">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      emailError: false,
      phoneError: false
    }
  },
  computed: {
    isValid() {
      return this.name && this.email && this.phone && this.message && !this.emailError && !this.phoneError;
    }
  },
  methods: {
    validateEmail() {
      const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      this.emailError = !pattern.test(this.email);
    },
    validatePhone() {
      const pattern = /^\(\d{2}\) \d \d{4}-\d{4}$/;
      this.phoneError = !pattern.test(this.phone);
    },
    formatPhone() {
      let numbers = this.phone.replace(/\D/g, ''); 
  let char = {0: '(', 2: ') ', 3: ' ', 7: '-'};
  numbers = numbers.slice(0, 11); 

  this.phone = '';
  
  for (let i = 0; i < numbers.length; i++) {
    this.phone += (char[i] || '') + numbers[i];
  }
    }
  }
}
</script>

<style scoped>
.mt-32 {
  margin-top: 32px;
}
.formulario {
  width: 620px;
  height: 422px;
}
.form-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
}
.form-control::placeholder { 
  color: #CCCCCC;
}
.error {
  color: red;
}

.btn-primary {
  border: none;
  border-radius: 4px;
  width: 96px;
  height: 41px;
  background-color: #EC1D24;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
}
.btn-secondary {
  border: none;
  border-radius: 4px;
  width: 96px;
  height: 41px;
  background-color: #CCCCCC;
  color: #767676;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
}
.mtf {
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;

}
.mbf{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;

}

@media (max-width: 700px) {
  .formulario{
    width: auto;
  }
  .modal-dialog {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
