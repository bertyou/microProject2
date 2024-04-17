const HomePage = {
    template: `
      <div>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
      </div>
    `,
    data() {
      return {
        title: 'Welcome to the Home Page',
        message: 'Hello, Group assingment about Vue. We will gradute on Apr. 19 and there are many exams in this week ... So, it is too simply!'
      };
    }
  };
  
  const ContactPage = {
    template: `
    <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="userInput" placeholder="Your message here">
      <input type="submit" value="Submit">
      <p v-if="submitted" class="submitted-message">You submitted: {{ userInput }}</p>
    </form>
  </div>
    `,
    data() {
      return {
        userInput: '',
        submitted: false // Add a new data property to track if the form has been submitted
      };
    },
    methods: {
      submitForm() {
        this.submitted = true; // Set submitted to true when the form is submitted
        // To see the output in the console
        console.log(this.userInput);
      }
    }
  };
  
  
  const app = Vue.createApp({
    data() {
      return {
        currentPage: 'home'
      };
    },
    components: {
      'home-page': HomePage,
      'contact-page': ContactPage
    }
  });
  
  app.mount('#app');
  