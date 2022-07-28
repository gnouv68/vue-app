<template>
<nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
  <div class="container">
       <a class="navbar-brand logo-text" href="/">SLT Agency</a> 
      <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item">
                  <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/#services">Services</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/#details" >Về Chúng Tôi</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/#features">Cam kết</router-link>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dịch Vụ</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown01">
                      <li><router-link to="/performance-marketing" class="dropdown-item">Chạy quảng cáo (Google , Facebook)</router-link></li>
                      <li><div class="dropdown-divider"></div></li>
                        <li><a class="dropdown-item" href="#">Terms Conditions</a></li>
                        <li><div class="dropdown-divider"></div></li>
                        <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                  </ul>
              </li>
          </ul>
          <span class="nav-item">
              <a class="btn-solid-sm" href="#contact">Get quote</a>
          </span>
      </div> 
  </div> 
</nav>
  <header id="header" class="header1">
    <div class="container" >
      <div class="row">
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <h2 class="h2-large">PERFORMANCE MARKETING</h2>
            <p class="p-large">
              Marketing giúp tăng đơn hàng và doanh số, tối ưu quảng cáo trên:
            </p>
            <h5 class="p-medium">
              Google, Facebook, Instagram, Zalo, Linkedin,Tiki, Lazada, Shopee
            </h5>
          </div>
        </div>
        <div class="col-lg-6 col-xl-7">
          <div class="image-container">
            <img
            style="opacity: 0.5;"
              class="img-fluid"
              src="assets/images/bg_ads.png"
              alt="alternative"
            />
          </div>
        </div>
      </div>
    </div>
  </header>

  <div id="contact" class="form-1" >
    <div class="container-fluid">
   
      <div class="row" style="background-color: rgb(243, 244, 245);">
        <div class="col-lg-6">
          <div class="text-container" >
            <h5 class="font_5" style="font-size:40px;"><span style="font-family:wfont_ae6712_262e2c2166894a8caf73acc2d78a6be3,wf_262e2c2166894a8caf73acc2d,orig_avenirnextltprobold;"><span style="color:#294474;">Vấn đề&nbsp;</span></span><span style="font-family:wfont_ae6712_cd1becc9a28c4d0bacdd1b2c5337633d,wf_cd1becc9a28c4d0bacdd1b2c5,orig_avenirnextltproregular;"><span style="color:#000000;">của doanh nghiệp</span></span></h5>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-container" style="text-align:left; font-size: 20px">
            <ul class="list-unstyled li-space-lg">
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Các doanh nghiệp thương mại điện tử lớn đều có team digital marketing trong nhà chạy theo dạng tối ưu ra doanh số
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Đa số agency bên ngoài chỉ chạy theo dạng branding (tối ưu
                  click hoặc view), không có kinh nghiệm về thương mại điện tử,
                  không tối ưu theo hiệu quả doanh nghiệp.
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Đa số doanh nghiệp khó tuyển được team digital marketing giỏi
                  do thiếu kiến thức chuyên môn để tuyển dụng, quản lý và mức
                  lương thường quá khả năng chi trả.
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Không có lựa chọn nào khác, doanh nghiệp chỉ còn cách tự chạy
                  hoặc thuê các freelancer nhưng không đảm bảo về chất lượng.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" >
        <div class="col-lg-6">
          <div class="text-container" >
            <h6 class="font_5" style="font-size:40px;"><span style="font-family:wfont_ae6712_262e2c2166894a8caf73acc2d78a6be3,wf_262e2c2166894a8caf73acc2d,orig_avenirnextltprobold;"><span style="color:#294474;">Giải pháp&nbsp;</span></span><span style="font-family:wfont_ae6712_cd1becc9a28c4d0bacdd1b2c5337633d,wf_cd1becc9a28c4d0bacdd1b2c5,orig_avenirnextltproregular;"><span style="color:#000000;">của SLT Agency</span></span></h6>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-container" style="text-align:left; font-size: 20px">
            <ul class="list-unstyled li-space-lg">
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Các doanh nghiệp thương mại điện tử lớn đều có team digital
                  marketing trong nhà chạy theo dạng tối ưu ra doanh số
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Đa số agency bên ngoài chỉ chạy theo dạng branding (tối ưu
                  click hoặc view), không có kinh nghiệm về thương mại điện tử,
                  không tối ưu theo hiệu quả doanh nghiệp.
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Đa số doanh nghiệp khó tuyển được team digital marketing giỏi
                  do thiếu kiến thức chuyên môn để tuyển dụng, quản lý và mức
                  lương thường quá khả năng chi trả.
                </div>
              </li>
              <li class="d-flex">
                <i class="fas fa-square"></i>
                <div class="flex-grow-1">
                  Không có lựa chọn nào khác, doanh nghiệp chỉ còn cách tự chạy
                  hoặc thuê các freelancer nhưng không đảm bảo về chất lượng.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  </div>

  <div class="cards-2 bg-gray" style="margin-top: -300px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="h2-heading">Phạm vi công việc</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <img
              class="quotes"
              src="assets/images/budget.png"
              alt="alternative"
            />
            <div class="card-body">
              <div class="testimonial-author">PHÂN BỔ NGÂN SÁCH</div>
              <!-- <p class="testimonial-text"> Chạy marketing tăng doanh số , tối ưu website</p> -->
              <!-- <div class="testimonial-author">Kết quả</div> -->
              <div class="occupation">
                Lên kế hoạch phân bổ ngân sách cho các kênh digital marketing và
                các dạng quảng cáo từng kênh.
              </div>
              <!-- <div class="testimonial-author">Lune Production</div> -->
            </div>
            <div class="gradient-floor red-to-blue"></div>
          </div>

          <div class="card">
            <img
              class="quotes"
              src="assets/images/online.png"
              alt="alternative"
            />
            <div class="card-body">
              <div class="testimonial-author">CHẠY QUẢNG CÁO</div>

              <div class="occupation">
                Tạo và tối ưu quảng cáo, lưu chuyển ngân sách để có hiệu quả
                marketing (return on investment) cao nhất.
              </div>
            </div>
            <div class="gradient-floor blue-to-purple"></div>
          </div>

          <div class="card">
            <img
              class="quotes"
              src="assets/images/budget.png"
              alt="alternative"
            />
            <div class="card-body">
              <div class="testimonial-author">ĐỀ XUẤT TỐI ƯU</div>

              <div class="occupation">
                Phối hợp chặt chẽ với nội bộ của DN, đưa ra đề xuất về chương
                trình, sản phẩm, quy trình làm việc
              </div>
            </div>
            <div class="gradient-floor purple-to-green"></div>
          </div>
          <div class="card">
            <img
              class="quotes"
              src="assets/images/analytics.png"
              alt="alternative"
            />
            <div class="card-body">
              <div class="testimonial-author">ĐỀ XUẤT TỐI ƯU</div>

              <div class="occupation">
                Phối hợp chặt chẽ với nội bộ của DN, đưa ra đề xuất về chương
                trình, sản phẩm, quy trình làm việc giúp tăng số đơn hàng và tỉ
                lệ chốt đơn.
              </div>
            </div>
            <div class="gradient-floor purple-to-green"></div>
          </div>

          <!-- <div class="card">
                  <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                  <div class="card-body">
                      <p class="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                      <div class="testimonial-author">Vanya Dropper</div>
                      <div class="occupation">General Manager, Presentop</div>
                  </div>
                  <div class="gradient-floor red-to-blue"></div>
              </div> -->

          <!-- <div class="card">
                  <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                  <div class="card-body">
                      <p class="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                      <div class="testimonial-author">Lefty Brown</div>
                      <div class="occupation">General Manager, Presentop</div>
                  </div>
                  <div class="gradient-floor blue-to-purple"></div>
              </div> -->

          <!-- <div class="card">
                  <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                  <div class="card-body">
                      <p class="testimonial-text">Suspendisse vitae enim arcu. Aliqu convallis risus a felis blandit, at mollis nisi bibendum aliquam noto ricos</p>
                      <div class="testimonial-author">Susane Blake</div>
                      <div class="occupation">General Manager, Presentop</div>
                  </div>
                  <div class="gradient-floor purple-to-green"></div>
              </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="basic-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <h2>Kênh & chi phí</h2>
          </div>
        </div>
        <div class="col-lg-6 col-xl-7">
          <div class="image-container">
            <div class="text-container">
              <table class="table table-bordered border-primary">
                <thead class="table-dark">
                  <tr style="text-align: center">
                    <th scope="col">Ngân sách hàng tháng</th>
                    <th scope="col">Phí quản lý</th>
                  </tr>
                </thead>
                <tbody style="text-align: center">
                  <tr>
                    <td>Từ 20 - dưới 40 triệu</td>
                    <td>8,000,000</td>
                  </tr>
                  <tr>
                    <td>Từ 40 - dưới 100 triệu</td>
                    <td>20% * ngân sách</td>
                  </tr>
                  <tr>
                    <td>Từ 100 - dưới 200 triệu</td>
                    <td>17% * ngân sách</td>
                  </tr>
                  <tr>
                    <td>Từ 200 - dưới 500 triệu</td>
                    <td>15% * ngân sách</td>
                  </tr>
                  <tr>
                    <td>Từ 500 triệu - dưới 1 tỷ</td>
                    <td>12% * ngân sách</td>
                  </tr>
                  <tr>
                    <td>Từ 1 tỷ</td>
                    <td>10% * ngân sách</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Procedure/>
  
<div id="features" class="accordion-1">
  <div class="container">
      <div class="row">
          <div class="col-xl-12">
              <h2 class="h2-heading">FAQ</h2>
              <!-- <p class="p-heading">Suspendisse vitae enim arcu. Aliquam convallis risus a felis blandit, at mollis nisi bibendum. Aliquam nec purus at ex blandit posuere nec a odio. Proin lacinia dolor justo</p> -->
          </div> 
      </div>   
      <div class="row">
          <div class="col-xl-5">
              <div class="accordion" id="accordionExample">
                  
                 
                  <div class="accordion-item">
                      <div class="accordion-icon">
                          <span class="fas fa-tv"></span>
                      </div> 
                      <div class="accordion-header" id="headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Optimus phân bổ ngân sách và ước tính hiệu quả bằng cách nào?
                          </button>
                      </div>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">Optimus sẽ dựa vào các thông tin như: mô hình kinh doanh, loại sản phẩm, phân khúc khách hàng, nhu cầu hiện tại của doanh nghiệp để tư vấn cách phân bổ ngân sách đem lại hiệu quả cao nhất về mặt doanh số. Các ước lượng về kết quả của Optimus dựa vào các chỉ số trung bình của ngành hoặc của sản phẩm, tập khách hàng tương tự mà Optimus từng chạy trước đây.</div>
                      </div>
                  </div>
                 
                 
                  <div class="accordion-item">
                      <div class="accordion-icon blue">
                          <span class="fas fa-microphone"></span>
                      </div> 
                      <div class="accordion-header" id="headingTwo">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Optimus có cam kết hiệu quả không?
                          </button>
                      </div>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">Sau 1 tháng chạy thử để có dữ liệu lịch sử, Optimus sẽ dựa vào đó để cam kết KPI mỗi tháng.</div>
                      </div>
                  </div>
                 
                 
                  <div class="accordion-item">
                      <div class="accordion-icon purple">
                          <span class="fas fa-video"></span>
                      </div> 
                      <div class="accordion-header" id="headingThree">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Làm sao tôi theo dõi được hiệu quả marketing?
                          </button>
                      </div>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div class="accordion-body">Khi bắt đầu chạy marketing, Optimus sẽ tạo 1 báo cáo được tự động cập nhật mỗi ngày, bạn có thể xem các chỉ số như: chi phí, số tương tác, số comment, số inbox...


Ngoài ra Optimus cũng sẽ nhờ bạn cập nhật tình hình doanh số thực tế để nắm được hiệu quả marketing và có điều chỉnh hợp lý. Kinh nghiệm cho thấy việc cập nhật với nhau càng liên tục thì việc tối ưu càng hiệu quả và return on investment càng cao.</div>
                      </div>
                  </div>
                 
                  
                 
                  <div class="accordion-item">
                      <div class="accordion-icon orange">
                          <span class="fas fa-tools"></span>
                      </div> 
                      <div class="accordion-header" id="headingFour">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              Khi nào thì tôi cần sử dụng dịch vụ Chiến lược marketing?
                          </button>
                      </div>
                      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div class="accordion-body">Sử dụng nếu bạn: Có ngân sách trung bình từ 50tr/tháng
Có nhu cầu chạy marketing từ 2 kênh trở lên (các kênh marketing: Google, Facebook, Instagram, Zalo…)</div>
                      </div>
                  </div>
                 
              </div> 
          </div> 
          <div class="col-xl-7">
              <div class="image-container">
                  <img class="img-fluid" src="assets/images/features-dashboard.png" alt="alternative"/>
              </div> 
          </div> 
      </div>
  </div> 
</div> 

  <Footer/>
  <Copyright/>
</template>
<script>

import Footer from "../components/Footer.vue";
import Copyright from '../components/Copyright.vue';
import Procedure from "@/components/Procedure.vue";

export default {
  name: "Performance_Marketing",
  components : { Copyright, Footer, Procedure,  },
  data() {
    return {
      budget: "",
      fee: "",
      vat: "",
      result: "",
      value:""
    };
  },
  methods: {
    sum() {
      
      // if (this.budget.trim() == "")
      //  return  this.$Message.warning('Vui Lòng Nhập Ngân Sách Quãng Cáo');
      if(this.budget < 1000000) {
        console.log(typeof(this.budget))
        this.fee = 0
        this.vat = 0
        this.result = 0
      }
      if(this.budget >= 1000000 & this.budget < 20000000) {
        this.fee = 8000000
        this.vat = 640000
        this.result =  this.fee + this.vat + (parseInt (this.budget))
      }
      if(this.budget >= 20000000 & this.budget < 40000000) {
        this.fee = 8000000
        this.vat = (this.fee * 8)/100
        this.result = this.fee + this.vat + (parseInt (this.budget))
      }
      if(this.budget >= 40000000 & this.budget < 100000000) {
        this.fee = (this.budget * 20)/100
        this.vat = (this.fee * 8)/100
        this.result = this.fee + this.vat + (parseInt (this.budget))
      }
      if(this.budget >= 100000000 & this.budget < 200000000) {
        this.fee = (this.budget * 17)/100
        this.vat = (this.fee * 8)/100
        this.result = this.fee + this.vat + this.budget
      }
      if(this.budget >= 200000000 & this.budget < 500000000) {
        this.fee = (this.budget * 15)/100
        this.vat = (this.fee * 8)/100
        this.result = this.fee + this.vat + (parseInt (this.budget))
      }
      if(this.budget >= 500000000 & this.budget < 1000000000) {
        this.fee = (this.budget * 12)/100
        this.vat = (this.fee * 8)/100
        this.result = this.fee + this.vat + (parseInt (this.budget))
      }
      if(this.budget >=  1000000000) {
        this.fee = (this.budget * 10)/100
        this.vat = (this.fee * 8)/100
        this.result = this.fee + this.vat + (parseInt (this.budget))
      }
      
    },
  },
  computed: {
            formatNumber () {
                if (this.budget === '') return 'Enter number';
                function parseNumber(str) {
                    const re = /(?=(?!\b)(\d{3})+$)/g;
                    return str.replace(re, ',');
                }
                return parseNumber(this.budget);
            }
        }
};
</script>
<style scoped>
.basic-3 .text-container {
  padding: 5rem 1.5rem 5.5rem 1.5rem;
  border-radius: 28px;
  background-size: cover;
}
</style>
