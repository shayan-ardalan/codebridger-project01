const JobInfo = {
 template: `
     <div class="container">
         <h1>اطلاعات شغلی در حوزه مهندسی</h1>
           <div class="job-info">
            <div class="job-card">
                 <h3>مهندس نرم‌افزار</h3>
                 <p>میانگین درآمد ماهانه:</p>
                  <p class="salary">۳۵ تا ۶۰ میلیون تومان</p>
                </div>
                <div class="job-card">
                  <h3>مهندس هوش مصنوعی</h3>
                   <p>میانگین درآمد ماهانه:</p>
                  <p class="salary">۴۵ تا ۸۰ میلیون تومان</p>
                </div>
                <div class="job-card">
                  <h3>مهندس DevOps</h3>
                 <p>میانگین درآمد ماهانه:</p>
                  <p class="salary">۴۰ تا ۷۰ میلیون تومان</p>
                </div>
                <div class="job-card">
                 <h3>مهندس امنیت سایبری</h3>
                  <p>میانگین درآمد ماهانه:</p>
                 <p class="salary">۵۰ تا ۹۰ میلیون تومان</p>
              </div>
          </div>
        </div>
    `
}

 const NameManager = {
    data() {
      return {
         newName: '',
        names: ['علی اکبری', 'سارا هادی', 'سحر خادم']
        }
    },
    methods: {
      addName() {
       if (this.newName.trim()) {
          this.names.push(this.newName.trim())
           this.newName = ''
            }
        },
        removeName(index) {
         this.names.splice(index, 1)
        }
    },
    template: `
        <div class="container">
            <h2>لیست متقاضیان</h2>
            <div class="name-list">
              <div class="input-group">
                <input v-model="newName" 
                  placeholder="نام جدید را وارد کنید" 
                   @keyup.enter="addName">
                  <button @click="addName">افزودن</button>
                </div>
                <div v-for="(name, index) in names" 
                   :key="index" 
                  class="name-item">
                <span>{{ name }}</span>
                <button class="delete-btn" 
                  @click="removeName(index)">حذف</button>
             </div>
          </div>
        </div>
    `
}

  const ContactForm = {
   data() {
     return {
     formData: {
         fullName: '',
          email: '',
           phone: ''
          }
       }
    },
    methods: {
      submitForm() {
         alert('اطلاعات شما با موفقیت ثبت شد!')
          this.formData = {
           fullName: '',
            email: '',
            phone: ''
           }
      }
    },
    template: `
      <div class="container">
      <h2>فرم تماس</h2>
       <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
           <label>نام و نام خانوادگی:</label>
            <input type="text" v-model="formData.fullName" required>
              </div>
             <div class="form-group">
                <label>ایمیل:</label>
               <input type="email" v-model="formData.email" required>
                 </div>
            <div class="form-group">
                  <label>شماره تماس:</label>
                <input type="tel" v-model="formData.phone" required>
                </div>
              <button type="submit">ارسال اطلاعات</button>
          </form>
      </div>
    `
}

 const SiteFooter = {
    template: `
   <footer class="footer">
     <div class="footer-content">
       <div class="footer-section">
          <h3>درباره ما</h3>
           <p>ما در تلاشیم تا با ارائه اطلاعات دقیق و به‌روز در حوزه برنامه‌نویسی، به شما در انتخاب مسیر شغلی مناسب کمک کنیم.</p>
       </div>
          <div class="footer-section">
            <h3>اطلاعات تماس</h3>
              <div class="contact-info">
                  <a href="tel:+989122365789">
                 <i class="fas fa-phone"></i>
                            09122365789
          
                    </a>
                      <a href="mailto:info@example.com">
                          <i class="fas fa-envelope"></i>
                              shayan@gmail.com
                     </a>
                      <a href="#">
                       <i class="fas fa-map-marker-alt"></i>
                          تهران، خیابان ولیعصر
                      </a>
                    </div>
                </div>
                <div class="footer-section">
                  <h3>شبکه‌های اجتماعی</h3>
                 <p>ما را در اپکیشن ها ی زیر دنبال کنید</p>
                  <div class="social-links">
                          <a href="#" title="اینستاگرام"><i class="fab fa-instagram"></i></a>
                         <a href="#" title="تلگرام"><i class="fab fa-telegram"></i></a>
                           <a href="#" title="لینکدین"><i class="fab fa-linkedin"></i></a>
                            <a href="#" title="گیت‌هاب"><i class="fab fa-github"></i></a>
                      </div>
               </div>
              </div>
            <div class="copyright">
              <p>این سایت متعلق به شایان می‌باشد - تمامی حقوق محفوظ است ©️ ۱۴۰3</p>
            </div>
      </footer>
    `
}

const app = Vue.createApp({})
 app.component('job-info', JobInfo)
  app.component('name-manager', NameManager)
 app.component('contact-form', ContactForm)
 app.component('site-footer', SiteFooter)
app.mount('#app') 